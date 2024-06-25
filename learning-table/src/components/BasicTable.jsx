import {useReactTable, getCoreRowModel, flexRender} from '@tanstack/react-table'
import mData from '../MOCK_DATA.JSON'
import {useMemo} from 'react' 

export default function BasicTable() {


  const data = useMemo(() => mData, [])
  const columns = [
    {
      head: "ID",
      accessorKey: "id",
      footer: "ID"
    }
  ]
  const table = useReactTable({data, columns})

  return (
    <div>
      BasicTable
    </div>
  )
}
