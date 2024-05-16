import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Budget from "./Components/Budget";
import Remaining from "./Components/Remaining";
import Expenses from "./Components/Expenses";
import ExpensesList from "./Components/ExpensesList";
import AddExpenseForm from "./Components/AddExpenseForm";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="mt-3">My Budget Planner</h1>
        <div className="row mt-3">
          <div className="col-sm">
            <Budget />
          </div>
          <div className="col-sm">
            <Remaining />
          </div>
          <div className="col-sm">
            <Expenses />
          </div>

          <h1 className="mt-3">Expenses</h1>
          <div className="row mt-3">
            <div className="col-sm">
              <ExpensesList />
            </div>
          </div>
          <h1 className="mt-3">Add Expense</h1>
          <div className="row mt-3 mb-3">
            <div className="col-sm">
              <AddExpenseForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
