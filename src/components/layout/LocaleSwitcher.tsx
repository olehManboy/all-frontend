import { useCallback } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { Box, Button, ButtonGroup } from '@material-ui/core'

export default function LocaleSwitcher() {
  const { t } = useTranslation()
  const router = useRouter()
  const changeLang = useCallback(
    // Same route different language
    (locale: string) => () => router.push(router.route, undefined, { locale }),
    [],
  )
  return (
    <Box textAlign="center">
      <ButtonGroup
        disableRipple
        variant="outlined"
        color="primary"
        aria-label="text primary button group">
        <Button onClick={changeLang('bg')}>{t('BG')}</Button>
        <Button onClick={changeLang('en')}>{t('EN')}</Button>
      </ButtonGroup>
    </Box>
  )
}
