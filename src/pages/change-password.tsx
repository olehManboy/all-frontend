import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'common/useNextLocale'
import Page from 'components/auth/changePassword/ChangePasswordPage'

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
  props: {
    i18nResources: await serverSideTranslations(locale, ['common', 'auth', 'validation']),
  },
})

export default Page
