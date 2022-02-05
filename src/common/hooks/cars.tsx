import { MutateFunction, useMutation, UseMutationResult, useQuery } from 'react-query'
import { endpoints } from 'common/api-endpoints'
import { CarResponse } from 'gql/cars'
import { routes } from 'common/routes'
import { GridRowId } from '@mui/x-data-grid'
import { CarDataType } from 'gql/cars'
import { bankAccountResponse, bankAccountType } from 'gql/bankAccounts'
// GET REQUESTS

export function useBankAccountsList() {
  return useQuery<bankAccountResponse[]>(endpoints.bankAccounts.bankAccountList.url)
}

export function useViewBankAccount(slug: string) {
  return useQuery<bankAccountResponse>(endpoints.bankAccounts.viewBankAccount(slug).url)
}

//MUTATE CARS (POST, PATCH, DELETE)
export type MutationResultParams = bankAccountResponse
export const useMutateBankAccounts = (
  fn: any,
  queryClient: any,
  setNotificationsOpen: any,
  setNotificationMessage: any,
  handleClose: any,
  router?: any,
): UseMutationResult<MutateFunction, Error, bankAccountType, unknown> => {
  return useMutation(fn, {
    onSuccess: () => {
      queryClient.invalidateQueries('/bankaccount')
      handleClose && handleClose()
      setNotificationsOpen()
      setNotificationMessage(handleClose ? 'Записите бяха изтрити.' : 'Колата беше обновена')
      router && router.push(routes.cars.index)
    },
    onError: () => {
      handleClose && handleClose()
      setNotificationsOpen(true)
      setNotificationMessage('Нещо се обърка')
    },
  })
}
