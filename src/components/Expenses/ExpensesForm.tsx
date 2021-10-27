import { observer, useLocalObservable } from 'mobx-react-lite'

import * as Styled from './Expenses.styles'
import { ExpenseData } from './ExpensesService'

interface IExpenses {
  addExpense: (data: ExpenseData) => void
}

const countDecimals = (value: number) => ((value % 1) != 0) ? value.toString().split(".")[1].length : 0

export const ExpensesForm = observer(({  addExpense }: IExpenses) => {
  const form = useLocalObservable(() => ({
    amount: "",
    title: "" 
  }))

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    addExpense({
      title: form.title,
      amount: Number(form.amount)
    })
    form.title = ""
    form.amount = ""
  }

  const isButtonDisabled = (form.title.length < 5) || (countDecimals(Number(form.amount)) > 2)

  return (
      <Styled.ExpensesForm onSubmit={handleSubmit}>
        <Styled.ExpensesFormInputsContainer>
          <Styled.ExpensesInputContainer>
            <Styled.ExpensesInputLabel>
              Title of transaction
            </Styled.ExpensesInputLabel>
            <Styled.ExpensesInput 
              onChange={(e) => { form.title = e.currentTarget.value}} 
              value={form.title} 
            /> 
          </Styled.ExpensesInputContainer>
          <Styled.ExpensesInputContainer>
            <Styled.ExpensesInputLabel>
              Amount (in PLN)
            </Styled.ExpensesInputLabel>
            <Styled.ExpensesInput 
              type='number' 
              onChange={(e) => { form.amount = e.currentTarget.value}} 
              value={form.amount} 
            />
          </Styled.ExpensesInputContainer>
        </Styled.ExpensesFormInputsContainer>
        <Styled.ExpensesFormButtonContainer>
          <Styled.ExpensesFormButton disabled={isButtonDisabled}>
            Add
          </Styled.ExpensesFormButton>
        </Styled.ExpensesFormButtonContainer>
      </Styled.ExpensesForm>
  )
} )