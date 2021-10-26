import * as Styled from './Table.styles'
import { Column } from './Table'

export interface ITableBody<T> {
  data: T[]
  columns: Column<T>[]
}

function checkIsKeyOf<T extends {}>(row: T, key: string): key is keyof T & string {
  return typeof key === 'string' && Object.keys(row).includes(key)
}

export const TableBody = <T extends {}>({ data, columns }: ITableBody<T>) => {
  return (
    <Styled.ListTbody>
      {data.map((row, index) => {
        return (
          <Styled.ListTrRows>
            {columns.map(column => {
              return (
                <Styled.ListTd>
                  {column.renderCallback 
                    ? column.renderCallback(row) : (checkIsKeyOf(row, column.key) 
                    ? row[column.key] : null)}
                </Styled.ListTd>
              )
            })}
          </Styled.ListTrRows>
        );
      })}
    </Styled.ListTbody>
  )
}