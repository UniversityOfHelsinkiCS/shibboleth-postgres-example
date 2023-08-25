import { useQuery } from '@tanstack/react-query'

import { BASE_PATH } from '../../config'
import { User } from '../../types'

export const queryKey = ['login']

const useCurrentUser = () => {
  const queryFn = async (): Promise<User | null> => {
    const res = await fetch(`${BASE_PATH}/api/login`)

    if (res.status === 401) return null

    const data = await res.json()

    return data
  }

  const { data: user, ...rest } = useQuery(queryKey, queryFn)

  return { user, ...rest }
}

export default useCurrentUser
