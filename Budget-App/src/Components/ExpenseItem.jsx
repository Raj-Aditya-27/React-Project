import React from 'react'
import { TiDelete } from 'react-icons/ti'

function ExpenseItem({id,product,cost}) {
  return (
    <li className='list-group-item d-flex justify-content-between align-items-center'>
        {product}
        <div className='d-flex justify-content-between' style={{width:"100px"}}>
            <span className='badge text-bg-primary mr-3 w-50 text-center'>
                Rs.{cost}
            </span>
            <TiDelete size='1.5em'></TiDelete>
        </div>
    </li>
  )
}

export default ExpenseItem