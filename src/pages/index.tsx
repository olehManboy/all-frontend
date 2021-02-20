import { GetServerSideProps } from 'next'
import { getSession, Session } from 'next-auth/client'

import IndexPage from 'components/IndexPage'
import { serverSideTranslations } from 'common/useNextLocale'

export const getServerSideProps: GetServerSideProps<{ session: Session | null }> = async (ctx) => {
  const session = await getSession(ctx)

  return {
    props: {
      i18nResources: await serverSideTranslations(ctx.locale, ['common']),
      session,
    },
  }
}

export default IndexPage
