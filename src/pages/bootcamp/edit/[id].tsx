import { GetServerSideProps } from 'next'
import { dehydrate, QueryClient } from 'react-query'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import EditBootcamper from 'components/bootcamp/edit/[id]'

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

export default EditBootcamper