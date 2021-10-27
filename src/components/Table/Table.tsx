import * as React from 'react'

import * as Styled from './Table.styles'
import { TableBody } from './TableBody'
import TableHeader from './TableHeader'

export interface Column<T> {
  header: string;
  key: string;
  renderCallback?: (data: T) => React.ReactNode;
}

interface ITable<T> {
  columns: Column<T>[]
  data: T[]
}

export const Table = <T extends {}>({ columns, data }: ITable<T>) => {
  return (
    <Styled.Table>
      <TableHeader columns={columns} />
      <TableBody columns={columns} data={data} />
    </Styled.Table>
  )
} 