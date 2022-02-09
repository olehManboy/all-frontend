import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { queryFn } from 'common/rest'
import CountryEditPage from 'components/dashboard/country/CountryEditPage'

export const getServerSideProps: GetServerSideProps = async ({ locale, query }) => {
  const { id } = query
  const client = new QueryClient()
  await client.prefetchQuery(`/country/${id}`, queryFn)

  return {
    props: {
      id,
      ...(await serverSideTranslations(locale ?? 'bg', ['common', 'country', 'dashboard'])),
      dehydratedState: dehydrate(client),
    },
  }
}

export default CountryEditPage
