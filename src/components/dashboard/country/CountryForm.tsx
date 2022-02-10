import React from 'react'
import * as yup from 'yup'
import { useRouter } from 'next/router'
import { FormikHelpers } from 'formik'
import { useMutation } from 'react-query'
import { Button, Grid, Typography } from '@mui/material'
import { AxiosError, AxiosResponse } from 'axios'
import { useTranslation } from 'next-i18next'
import { makeStyles } from '@mui/styles'

import { routes } from 'common/routes'
import { AlertStore } from 'stores/AlertStore'
import { createCountry, editCountry } from 'common/rest'
import { CountryInput, CountryResponse } from 'gql/countries'
import GenericForm from 'components/common/form/GenericForm'
import SubmitButton from 'components/common/form/SubmitButton'
import FormTextField from 'components/common/form/FormTextField'
import { name } from 'common/form/validation'
import { ApiErrors, isAxiosError, matchValidator } from 'common/api-errors'
import LinkButton from 'components/common/LinkButton'

const useStyles = makeStyles({
  container: {
    maxWidth: '700px',
    margin: '0 auto',
  },
})

const validationSchema: yup.SchemaOf<CountryInput> = yup.object().defined().shape({
  name: name.required(),
  countryCode: name.required(),
})

const defaults: CountryInput = {
  name: '',
  countryCode: '',
}

type CountryFormProps = {
  initialValues?: CountryInput
  id?: string
}

export default function CountryForm({ initialValues = defaults, id }: CountryFormProps) {
  //if (id) -> edit form, else -> create form
  const { t } = useTranslation('country')
  const createMutation = useMutation<
    AxiosResponse<CountryResponse>,
    AxiosError<ApiErrors>,
    CountryInput
  >({
    mutationFn: createCountry,
    onError: () => AlertStore.show(t('alerts.new-row.error'), 'error'),
    onSuccess: () => AlertStore.show(t('alerts.new-row.success'), 'success'),
  })
  type CountryEditInput = {
    id: string
    data: CountryInput
  }
  const editMutation = useMutation<
    AxiosResponse<CountryResponse>,
    AxiosError<ApiErrors>,
    CountryEditInput
  >({
    mutationFn: editCountry,
    onError: () => AlertStore.show(t('alerts.edit-row.error'), 'error'),
    onSuccess: () => AlertStore.show(t('alerts.edit-row.success'), 'success'),
  })
  const router = useRouter()
  const classes = useStyles()

  const onSubmit = async (
    values: CountryInput,
    { setFieldError, resetForm }: FormikHelpers<CountryInput>,
  ) => {
    try {
      const data = {
        name: values.name,
        countryCode: values.countryCode,
      }
      if (id) {
        await editMutation.mutateAsync({ data, id })
      } else {
        await createMutation.mutateAsync(data)
        resetForm()
      }
      router.push(routes.dashboard.index)
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
    <Grid container direction="column" component="section" className={classes.container}>
      <GenericForm
        onSubmit={onSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant="h6">
              {id ? t('headings.edit-country') : t('headings.add-country')}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={8}>
            <FormTextField
              type="text"
              label="country:fields.name"
              name="name"
              autoComplete="name"
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <FormTextField
              type="text"
              label="country:fields.country-code"
              name="countryCode"
              autoComplete="country-code"
            />
          </Grid>
          {id ? (
            <>
              <Grid item xs={6}>
                <Button fullWidth variant="contained" type="submit" color="secondary">
                  {t('btns.save')}
                </Button>
              </Grid>
            </>
          ) : (
            <Grid item xs={6}>
              <SubmitButton fullWidth label="country:btns.add" />
            </Grid>
          )}
          <Grid item xs={6}>
            <LinkButton fullWidth variant="contained" color="primary" href={routes.dashboard.index}>
              {t('btns.cancel')}
            </LinkButton>
          </Grid>
        </Grid>
      </GenericForm>
    </Grid>
  )
}
