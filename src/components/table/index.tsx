import { Table, TableColumnsType } from 'antd'
import { TableDataType, TableSubDataType } from '@/pages/table/table.class'

export const MergeTable = ({ loading, result, subResultName, projectTableColumn, projectTableSubColumn }: {
  result: any[] | undefined,
  loading: boolean,
  subResultName: string,
  projectTableColumn: TableColumnsType<TableDataType>,
  projectTableSubColumn: TableColumnsType<any | TableSubDataType>
}) => {

  const expandedRowRender = (item: any) => {
    return <Table loading={loading} rowKey={'id'} rowClassName={'no-hover-bg'} pagination={false}
                  columns={projectTableSubColumn} dataSource={item[subResultName]}/>
  }

  return (
    <Table
      loading={loading}
      rowKey={'id'}
      columns={projectTableColumn}
      expandable={{ expandedRowRender }}
      dataSource={result}
      pagination={false}
    />
  )
}
