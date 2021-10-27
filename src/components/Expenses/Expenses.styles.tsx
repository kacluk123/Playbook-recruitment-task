import styled from 'styled-components'

export const Expenses = styled.div.attrs({
  className: 'Expenses'
})`
  justify-content: center;
  display: flex;
  width: 100%;
  align-items: center;
  padding: 16px;
  @media (min-width: 640px) {
    padding: 0;
  }
`

export const ExpensesContainer = styled.div.attrs({
  className: 'ExpensesContainer'
})`
  width: 100%;
  @media (min-width: 640px) {
    min-width: 600px;
    width: auto;
  }
`

export const ExpensesHeaderContainer = styled.div.attrs({
  className: 'ExpensesHeaderContainer'
})`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ExpensesHeader = styled.h1.attrs({
  className: 'ExpensesHeader'
})`

`

export const ExpensesHeaderCurrency = styled.div.attrs({
  className: 'ExpensesHeaderCurrency'
})`
  font-size: 18px;
`

export const ExpensesInputContainer = styled.div.attrs({
  className: 'ExpensesInputContainer'
})`
  
  @media (min-width: 640px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const ExpensesTableContainer = styled.div.attrs({
  className: 'ExpensesTableContainer'
})`
  margin-top: 40px;
`

export const ExpensesInputLabel = styled.div.attrs({
  className: 'ExpensesInputLabel'
})`
  
`

export const ExpensesInput = styled.input.attrs({
  className: 'ExpensesInput'
})`
  height: 23px;
`

export const ExpensesForm = styled.form.attrs({
  className: 'ExpensesForm'
})`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-column-gap: 15px;
`

export const ExpensesSum = styled.div.attrs({
  className: 'ExpensesSum'
})`
  margin-top: 30px;
  font-size: 17px;
  font-weight: bold;
`

export const ExpensesDeleteButton = styled.div.attrs({
  className: 'ExpensesDeleteButton'
})`
  outline: none;
  border: none;
  cursor: pointer;
`

export const ExpensesFormInputsContainer = styled.form.attrs({
  className: 'ExpensesFormInputsContainer'
})`
  display: grid;
  gap: 30px;
`

export const ExpensesFormButton = styled.button.attrs({
  className: 'ExpensesFormButton'
})`
  
  padding: 5px 40px;
`

export const ExpensesFormButtonContainer = styled.div.attrs({
  className: 'ExpensesFormButtonContainer'
})`
  display: flex;
  align-items: flex-end;
`
