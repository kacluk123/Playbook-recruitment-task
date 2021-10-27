import { v4 } from 'uuid'
import { makeAutoObservable } from 'mobx'

export interface ExpenseModel {
  title: string
  amount: number
  id: string
}

export interface ExpenseData {
  title: string
  amount: number
}

export class ExpensesService {
  expensesList: ExpenseModel[] = []

  constructor() {
    makeAutoObservable(this)
  }

  get fullPrice() {
    return this.expensesList.reduce((prev, curr) => (prev + curr.amount), 0)
  }

  addExpense = (expense: ExpenseData) => {
    this.expensesList.push({
      title: expense.title,
      amount: expense.amount,
      id: v4()
    })
  }
  
  removeExpense = (id: string) => {
    this.expensesList = this.expensesList.filter(expense => expense.id !== id)
  }
}