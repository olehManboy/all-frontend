import { useTranslation } from 'react-i18next'
import { AxiosError, AxiosResponse } from 'axios'
import { useMutation, useQuery } from 'react-query'

import { ApiErrors } from 'common/api-errors'
import { AlertStore } from 'stores/AlertStore'
import { endpoints } from 'common/api-endpoints'
import { createCheckoutSession } from 'common/rest'
import { CheckoutSessionInput, CheckoutSessionResponse, DonationPrice } from 'gql/donations'

export function usePriceList() {
  return useQuery<DonationPrice[]>(endpoints.donation.prices.url)
}
export function useSinglePriceList() {
  return useQuery<DonationPrice[]>(endpoints.donation.singlePrices.url)
}
export function useRecurringPriceList() {
  return useQuery<DonationPrice[]>(endpoints.donation.recurringPrices.url)
}
export function useDonationSession() {
  const { t } = useTranslation()
  const mutation = useMutation<
    AxiosResponse<CheckoutSessionResponse>,
    AxiosError<ApiErrors>,
    CheckoutSessionInput
  >({
    mutationFn: createCheckoutSession,
    onError: () => AlertStore.show(t('common:alerts.error'), 'error'),
    onSuccess: () => AlertStore.show(t('common:alerts.message-sent'), 'success'),
  })
  return mutation
}
