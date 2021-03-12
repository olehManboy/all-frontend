import { Checkbox, FormControl, FormControlLabel, FormHelperText } from '@material-ui/core'
import { useField } from 'formik'
import { useTranslation } from 'react-i18next'

import { TranslatableField, translateError } from 'common/form/validation'

export type AcceptTermsFieldProps = {
  name: string
  label: string
}

export default function CheckboxField({ name, label }: AcceptTermsFieldProps) {
  const { t } = useTranslation()
  const [field, meta] = useField(name)
  const helperText = meta.touched ? translateError(meta.error as TranslatableField, t) : ''
  return (
    <FormControl required component="fieldset" error={Boolean(meta.error) && Boolean(meta.touched)}>
      <FormControlLabel
        label={typeof label === 'string' ? t(label) : label}
        control={<Checkbox color="primary" checked={Boolean(field.value)} {...field} />}
      />
      {Boolean(meta.error) && <FormHelperText error>{helperText}</FormHelperText>}
    </FormControl>
  )
}
