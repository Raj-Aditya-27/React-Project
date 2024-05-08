import { useState } from 'react'
import './App.css'
import Grid from './assets/components/Grid'

function App() {

  return (
    <>
      <h1>SELECTABLE GRID</h1>
      <Grid row={10} column={10}/>
    </>
  )
}

export default App
