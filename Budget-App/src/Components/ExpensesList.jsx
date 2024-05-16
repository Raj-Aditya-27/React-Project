import React from 'react'
import ExpenseItem from './ExpenseItem'

const expenses = [
    {id:1,product:"Shopping",cost:50},
    {id:2,product:"Holiday",cost:300},
    {id:3,product:"Transportation",cost:70},
    {id:4,product:"Fuel",cost:40},
    {id:5,product:"Child Care",cost:500},
]

function ExpensesList() {
  return (
    <div className='list-group'>
      {
        expenses.map((expense)=>{
          return <ExpenseItem id={expense.id} product={expense.product} cost={expense.cost}/>
        })
      }
    </div>
  )
}

export default ExpensesList