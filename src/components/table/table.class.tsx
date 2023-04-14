import { Progress, TableColumnsType, Tag } from 'antd'
import React from 'react'
import { CheckOutlined, ExclamationCircleOutlined, ExclamationOutlined, SmileOutlined } from '@ant-design/icons'

export interface TableDataType {
  name?: string;
  status?: string;
  project?: string;
  begin?: string;
  end?: string;
  role?: string
  realname?: string
  doneTaskNum?: string
  taskNum?: string
  process?: string
}

export interface TableSubDataType {
  id: string;
  name: string;
  begin: string;
  end: string;
  wait: any,
  done: any,
  process: string,
  pname: string,
  exe_name: string,
  tname: string,
  assignedDate: string,
  finishedDate: string,
  deadline: string,
  status: string,
}

export const projectTableColumn: TableColumnsType<TableDataType> = [
  { title: '项目名称', dataIndex: 'name', key: 'name' },
  { title: '状态', dataIndex: 'status', key: 'status' },
  { title: '任务数量', dataIndex: 'project', key: 'project' },
  { title: '开始时间', dataIndex: 'begin', key: 'begin' },
  { title: '结束时间', dataIndex: 'end', key: 'end' }
]

export const projectTableSubColumn: TableColumnsType<TableSubDataType> = [
  { title: '任务编号', dataIndex: 'id', key: 'id' },
  { title: '任务名称', dataIndex: 'name', key: 'name' },
  {
    title: '开始时间', dataIndex: 'begin', key: 'begin'
  },
  {
    title: '结束时间', dataIndex: 'end', key: 'end'
  },
  {
    title: '未开始', dataIndex: 'wait', key: 'wait', render: (value: any) => <p>{value.num}</p>
  },
  {
    title: '已完成', dataIndex: 'done', key: 'done', render: (value: any) => <p>{value.num}</p>
  },
  {
    title: '任务完成进度',
    dataIndex: 'process',
    key: 'process',
    render: (value: any) => <Progress strokeLinecap={'square'} strokeColor={'#87d068'} percent={value * 100}
                                      size={[ 600, 20 ]}/>
  }, {
    title: '状态', dataIndex: 'status', key: 'status', render: (value: any) => {
      if (value === '已逾期') return <Tag icon={<ExclamationCircleOutlined/>} color="#f50">已逾期</Tag>
      if (value === '已完成') return <Tag icon={<CheckOutlined/>} color="#87d068">已完成</Tag>
      if (value === '进行中') return <Tag icon={<SmileOutlined/>} color="#2db7f5">进行中</Tag>
      if (value === '未开始') return <Tag icon={<ExclamationOutlined/>} color="#108ee9">未开始</Tag>
    }
  } ]

export const staffColumn: TableColumnsType<TableDataType> = [
  { title: '工号', dataIndex: 'account', key: 'account' },
  { title: '角色', dataIndex: 'role', key: 'role', render: (value: any) => <p>{value || '-'}</p> },
  { title: '姓名', dataIndex: 'realname', key: 'realname' },
  { title: '完成任务数量', dataIndex: 'doneTaskNum', key: 'doneTaskNum' },
  { title: '任务总数量', dataIndex: 'taskNum', key: 'taskNum' },
  {
    title: '资源情况',
    dataIndex: 'process',
    key: 'process',
    render: (value: any) => <Progress strokeLinecap={'square'} strokeColor={'#87d068'} percent={value * 100}
                                      size={[ 600, 20 ]}/>
  }
]

export const staffSubColumn: TableColumnsType<TableSubDataType> = [
  { title: '任务编号', dataIndex: 'id', key: 'id' },
  { title: '项目', dataIndex: 'pname', key: 'pname' },
  { title: '版本', dataIndex: 'exe_name', key: 'exe_name' },
  { title: '任务', dataIndex: 'tname', key: 'tname' },
  { title: '指定时间', dataIndex: 'assignedDate', key: 'assignedDate' },
  { title: '完成时间', dataIndex: 'finishedDate', key: 'finishedDate' },
  { title: '预计完成时间', dataIndex: 'deadline', key: 'deadline' },
  {
    title: '状态', dataIndex: 'status', key: 'status', render: (value: any) => {
      if (value === '已逾期') return <Tag icon={<ExclamationCircleOutlined/>} color="#f50">已逾期</Tag>
      if (value === '已完成') return <Tag icon={<CheckOutlined/>} color="#87d068">已完成</Tag>
      if (value === '进行中') return <Tag icon={<SmileOutlined/>} color="#2db7f5">进行中</Tag>
      if (value === '未开始') return <Tag icon={<ExclamationOutlined/>} color="#108ee9">未开始</Tag>
    }
  }
]
