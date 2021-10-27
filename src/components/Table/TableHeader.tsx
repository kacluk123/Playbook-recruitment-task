import * as Styled from './Table.styles';
import { Column } from './Table'

interface IDesktopListHeader<T> {
  columns: Column<T>[];
}

export const DesktopListHeader = <T extends {}>({ columns }: IDesktopListHeader<T>) => {
  return (
    <Styled.ListThead>
      <Styled.ListTrHeader>
        {columns.map((column, index) => (
          <Styled.ListTh key={column.key}>{column.header}</Styled.ListTh>
        ))}
      </Styled.ListTrHeader>
    </Styled.ListThead>
  );
};

export default DesktopListHeader;
