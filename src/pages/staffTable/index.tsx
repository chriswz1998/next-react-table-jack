import { useHttp } from '@/utils/custom.hooks'
import { MergeTable } from '../../components/Table'
import { staffColumn, staffSubColumn } from '@/components/Table/table.class'
import { Header } from '@/components/header'
import { Reload } from '@/components/reload'


export default function StaffTable() {
  const { loading, actionFunc, res } = useHttp('', 'GET')

  const logSth = async () => {
    await actionFunc()
  }

  return (
    <div>
      <Reload func={logSth}/>
      <Header link={'/'} linkName={'项目详情'} title={'成员详情'}/>
      <MergeTable loading={loading} result={res} projectTableColumn={staffColumn}
                  projectTableSubColumn={staffSubColumn} subResultName={'task'}/>
    </div>
  )
}

