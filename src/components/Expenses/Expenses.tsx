import { observer, useLocalObservable } from 'mobx-react-lite'

import * as Styled from './Expenses.styles'
import { ExpenseModel, ExpensesService } from './ExpensesService'
import { ExpensesForm } from './ExpensesForm'
import { Table } from '../Table'

const EUR = 4.382

const formatFullPrice = (price: number, currency: string) => new Intl.NumberFormat('en-GB', { style: 'currency', currency }).format(price)

const Expenses = () => {
  const expensesService = useLocalObservable(() => new ExpensesService())

  const columns = [
    {
      key: 'title',
      header: 'Title',
    },
    {
      key: 'amount',
      header: 'Amount',
    },
    {
      key: 'amountEur',
      header: 'Amount (EUR)',
      renderCallback: (data: ExpenseModel) => (data.amount / EUR).toFixed(2)
    },
    {
      key: 'options',
      header: 'Options',
      renderCallback: (data: ExpenseModel) => (
        <Styled.ExpensesDeleteButton onClick={() => { expensesService.removeExpense(data.id)}}>Delete</Styled.ExpensesDeleteButton >
      )
    },
  ]

  return (
    <Styled.Expenses>
      <Styled.ExpensesContainer>
        <Styled.ExpensesHeaderContainer>
          <Styled.ExpensesHeader>
            List of expenses
          </Styled.ExpensesHeader>
          <Styled.ExpensesHeaderCurrency>
            1 EUR = {EUR}
          </Styled.ExpensesHeaderCurrency>
        </Styled.ExpensesHeaderContainer>
        <ExpensesForm addExpense={expensesService.addExpense} />
        {expensesService.expensesList.length > 0 ? (
          <Styled.ExpensesTableContainer>
            <Table columns={columns} data={expensesService.expensesList} />
          </Styled.ExpensesTableContainer>
        ) : null}
      {expensesService.fullPrice > 0 ? (
        <Styled.ExpensesSum>
          Sum: {formatFullPrice(expensesService.fullPrice, 'PLN')} ({formatFullPrice(expensesService.fullPrice / EUR, 'EUR')})
        </Styled.ExpensesSum>
      ) : null}
      </Styled.ExpensesContainer>
    </Styled.Expenses>
  )
} 

export default observer(Expenses)