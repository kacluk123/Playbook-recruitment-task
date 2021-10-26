import React from 'react';
import { observer, useLocalObservable } from 'mobx-react-lite';
import { Table } from './components/Table';
import { Column } from './components/Table/Table';

type X = {
  title: string
  id: string
  amountPln: string
}

const data = [
  {
    title: 'elo',
    id: '123',
    amountPln: '123'
  },
  {
    title: 'elo',
    id: '124',
    amountPln: '123'
  },
]

function App() {
  // const localObservable = useLocalObservable<{

  // }>(() => ({

  // }))
  const columns = [
    {
      key: 'title',
      header: 'Title',
    },
    {
      key: 'amountPln',
      header: 'Title',
    },
    {
      key: 'id',
      header: 'Title',
    },
    {
      key: 'elo',
      header: 'test',
    },
  ]
  
  return (
    <div className="App">
      <Table data={data} columns={columns} />
    </div>
  );
}

export default observer(App);
