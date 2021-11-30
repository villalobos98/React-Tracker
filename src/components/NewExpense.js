import React from "react";
import ExpenseForm from "../components/ExpenseForm";
import axios from 'axios';

function NewExpense() {
  const onSaveExpenseDataHandler = (expenseValues) => {
    const expenseObjectValues = {
      ...expenseValues,
      id: Math.floor(Math.random() * 9999999)
    };
    
    console.log(expenseObjectValues);
    axios.post(`http://localhost:8080/expense/create`, expenseObjectValues)

  };

  return (
    <div>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}/>
    </div>
  );
}

export default NewExpense;
