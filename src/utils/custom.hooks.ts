import useAxios from 'axios-hooks'
import { filterData } from '@/utils/index'

type SignUpResponse = {
  success: boolean;
  data: any
};

const api = process.env.NODE_ENV

export const useHttp = (url: string, method: string) => {
  const [ { data, loading, error }, actionFunc ] = useAxios<SignUpResponse>(
    {
      url: `${api}/${url}`,
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

