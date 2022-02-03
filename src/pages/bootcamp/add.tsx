import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import CreateBootcamper from 'components/bootcamp/create'

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
    const client = new QueryClient()
    return {
        props: {
            ...(await serverSideTranslations(locale ?? 'bg', [
                'common',
                'auth',
                'validation',
                'bootcamp',
            ])),
            dehydratedState: dehydrate(client),
        },
    }
}

export default CreateBootcamper