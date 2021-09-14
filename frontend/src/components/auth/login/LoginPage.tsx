import React from 'react'
import { useTranslation } from 'next-i18next'
import { Container, Grid, Box } from '@material-ui/core'

import { routes } from 'common/routes'
import Link from 'components/common/Link'
import { LoginPageProps } from 'pages/login'
import Layout from 'components/layout/Layout'
import LoginForm from 'components/auth/login/LoginForm'

export default function LoginPage({ csrfToken }: LoginPageProps) {
  const { t } = useTranslation()
  return (
    <Layout
      title={t('nav.login')}
      githubUrl="https://github.com/podkrepi-bg/frontend/tree/master/frontend/src/components/auth/ProfilePage.tsx"
      figmaUrl="https://www.figma.com/file/MmvFKzUv6yE5U2wrOpWtwS/Podkrepi.bg?node-id=5055%3A21469">
      <Container maxWidth="xs">
        <LoginForm csrfToken={csrfToken || ''} />
        <Grid container justify="flex-end">
          <Box mt={2}>
            <Link href={routes.forgottenPassword}>{t('nav.forgottenPassword')}</Link>
          </Box>
        </Grid>
      </Container>
    </Layout>
  )
}
