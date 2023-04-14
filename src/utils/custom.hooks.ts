import useAxios from 'axios-hooks'
import { filterData } from '@/utils/index'

type SignUpResponse = {
  success: boolean;
  data: any
};

export const useHttp = (url: string, method: string) => {
  const [ { data, loading, error }, actionFunc ] = useAxios<SignUpResponse>(
    {
      baseURL: process.env.NODE_ENV !== 'development' ? 'http://10.18.56.54:9880/' : 'api',
      url: `/${url}`,
      method: method
    },

    {
      manual: false
    }
  )
  return {
    res: url === 'index/index/getProject' ? filterData(data?.data) : data?.data || [],
    loading,
    error,
    actionFunc
  }
}

