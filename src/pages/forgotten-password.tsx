import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Page from 'components/auth/forgottenPassword/ForgottenPasswordPage'

export const getServerSideProps: GetServerSideProps = async ({ locale = 'bg' }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'auth', 'validation'])),
  },
})

export default Page
