import { Button } from 'antd'
import Link from 'next/link'

interface HeaderTypes {
  link: string,
  linkName: string,
  title: string
}

export const Header = ({ link, linkName, title }: HeaderTypes) => {
  return <div className={'flex justify-between items-center h-25'}>
    <h1 className="text-center text-3xl font-bold p-5">{title}</h1>
    <Button type="text">
      <Link href={link}>{linkName}</Link>
    </Button>
  </div>
}
