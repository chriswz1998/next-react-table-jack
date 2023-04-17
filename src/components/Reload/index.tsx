import { ReloadOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import useDebounce from '@/utils'

export const Reload = ({ func }: { func: () => void }) => {
  const reload = useDebounce(func, 1000)
  return (
    <Button className={'bg-sky-500 absolute bottom-5 right-5 flex items-center justify-center text-white z-50'}
            shape="circle" onClick={reload}
            icon={<ReloadOutlined/>}/>
  )
}
