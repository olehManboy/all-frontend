import * as yup from 'yup'
import { AxiosError } from 'axios'
import { observer } from 'mobx-react'
import { FormikHelpers } from 'formik'
import { useRouter } from 'next/router'
import { makeStyles } from '@mui/styles'
import { useMutation } from 'react-query'
import { useTranslation } from 'next-i18next'
import { Grid, Typography } from '@mui/material'

import { routes } from 'common/routes'
import { axios } from 'common/api-client'
import { endpoints } from 'common/api-endpoints'
import { name, email } from 'common/form/validation'
import GenericForm from 'components/common/form/GenericForm'
import SubmitButton from 'components/common/form/SubmitButton'
import { BootcampIntern } from 'lib/interfaces/BootcampIntern'
import FormTextField from 'components/common/form/FormTextField'
import { ApiErrors, isAxiosError, matchValidator } from 'common/api-errors'
import { BootcampInternInput, BootcampInternResponse } from 'gql/bootcamp'
import { NotificationStore } from 'stores/bootcamp-interns/NotificationStore'

import { drawerWidth } from './MyDrawer'

const useStyles = makeStyles(() => {
  return {
    internForm: {
      marginLeft: drawerWidth,
      marginTop: '200px',
    },
    internFormHeader: {
      marginBottom: '50px',
    },
  }
})

const validationSchema: yup.SchemaOf<BootcampInternInput> = yup.object().shape({
  firstName: name,
  lastName: name,
  email: email,
  id: yup.string().uuid(),
})

const defaults: BootcampInternResponse = {
  firstName: '',
  lastName: '',
  email: '',
}

export default observer(function BootcampInternCreateForm() {
  const router = useRouter()
  const classes = useStyles()
  const { t } = useTranslation()
  const { setNotificationMessage, showNotification } = NotificationStore

  const createIntern = async (internData: BootcampIntern) => {
    await axios.post(endpoints.bootcampIntern.listBootcampIntern.url, internData)
  }

  const mutation = useMutation({
    mutationFn: createIntern,
    onError: () => {
      showNotification()
      setNotificationMessage('Something went wrong, please try again later.')
    },
    onSuccess: () => {
      router.push(routes.bootcampIntern.index)
      showNotification()
      setNotificationMessage('Sucessfully created new intern.')
    },
  })

  const onSubmit = async (values: any, { setFieldError, resetForm }: FormikHelpers<any>) => {
    try {
      await mutation.mutateAsync({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
      })
      resetForm()
    } catch (error) {
      console.error(error)
      if (isAxiosError(error)) {
        const { response } = error as AxiosError<ApiErrors>
        response?.data.message.map(({ property, constraints }) => {
          setFieldError(property, t(matchValidator(constraints)))
        })
      }
    }
  }

  return (
    <Grid className={classes.internForm} container direction="column" component="section">
      <Typography variant="h2" className={classes.internFormHeader}>
        Create new Softuni Bootcamp Intern
      </Typography>
      <GenericForm onSubmit={onSubmit} initialValues={defaults} validationSchema={validationSchema}>
        <Grid container spacing={1.3}>
          <Grid item xs={12}>
            <FormTextField
              type="text"
              name="firstName"
              label="First name"
              autoComplete="firstName"
            />
          </Grid>

          <Grid item xs={12}>
            <FormTextField type="text" name="lastName" label="Last name" autoComplete="lastName" />
          </Grid>

          <Grid item xs={12}>
            <FormTextField type="text" name="email" label="Email" autoComplete="email" />
          </Grid>

          <Grid item mt={3} xs={12}>
            <SubmitButton fullWidth />
          </Grid>
        </Grid>
      </GenericForm>
    </Grid>
  )
})
