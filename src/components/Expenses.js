import React from 'react'
import ExpenseItem from './ExpenseItem'
import "./Expenses.css"
const Expenses = (props) => {
    const {expenses}=props
  return (
    <div className='expenses'>
        <ExpenseItem title={expenses[0].title} price={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} price={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} price={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
    </div>
  )
}

export default Expenses