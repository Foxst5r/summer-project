import './App.css'
import { DateTime } from 'luxon'
import { useMemo } from 'react'
import BasicTable from './components/BasicTable'
import movies from './MOVIE_DATA.json'

function App() {
  const data = useMemo(() => movies, [])
  /** @type import('@tanstack/react-table').ColumnDef<any> */
  const columns = [
    {
      header: 'ID',
      accessorKey: 'id',
      footer: 'ID',
    },
    {
      header: 'Name',
      columns: [
        {
          header: 'First',
          accessorKey: 'first_name',
          footer: 'First_Name',
        },
        {
          header: 'Last',
          accessorKey: 'last_name',
          footer: 'Last_Name',
        },
      ],
    },
    {
      header: 'Email',
      accessorKey: 'email',
      footer: 'Email',
    },
    {
      header: 'Gender',
      accessorKey: 'gender',
      footer: 'Gender',
    },
    {
      header: 'Date of birth',
      accessorKey: 'dob',
      footer: 'Date of birth',
      cell: info =>
        DateTime.fromISO(info.getValue()).toLocaleString(DateTime.DATE_MED),
    },
  ]

  const movieColumns = [
    {
      header: 'ID',
      accessorKey: 'id',
    },
    {
      header: 'Name',
      accessorKey: 'name',
    },
    {
      header: 'Genre',
      accessorKey: 'genre',
    },
    {
      header: 'Rating',
      accessorKey: 'rating',
    },
  ]
  return (
    <>
    <h1>React-table</h1>
    <BasicTable data={data} columns = {movieColumns}/>
    </>
  )
}

export default App