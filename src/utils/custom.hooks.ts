import useAxios from 'axios-hooks'
import { filterData } from '@/utils/index'

type SignUpResponse = {
  success: boolean;
  data: any
};

export const useHttp = (url: string, method: string) => {
  const [
      { data, loading, error },
    actionFunc ] = useAxios<SignUpResponse>(
    {
      baseURL: process.env.NODE_ENV !== 'development' ? 'http://192.168.0.228:800/' : 'api',
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

