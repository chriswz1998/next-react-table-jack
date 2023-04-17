import { Inter } from 'next/font/google'
import { useHttp } from '@/utils/custom.hooks'
import { MergeTable } from '../components/Table'
import { projectTableColumn, projectTableSubColumn } from '@/components/Table/table.class'
import { Header } from '../components/Headers'
import { Reload } from '../components/Reload'

const inter = Inter({ subsets: [ 'latin' ] })

export default function Home() {
  const { loading, actionFunc, res } = useHttp('index/index/getProject', 'GET')

  const logSth = async () => {
    await actionFunc()
  }

  return (
    <div className={inter.className}>
      <Reload func={logSth}/>
      <Header link={'/staffTable'} linkName={'成员详情'} title={'项目详情'}/>
      <MergeTable loading={loading} result={res} projectTableColumn={projectTableColumn}
                  projectTableSubColumn={projectTableSubColumn} subResultName={'list'}/>
    </div>
  )
}
