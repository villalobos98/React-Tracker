import React from "react";
import ExpenseForm from "../components/ExpenseForm";

function NewExpense() {
  const onSaveExpenseDataHandler = (expenseValues) => {
    const expenseObjectValues = {
      ...expenseValues,
      ID: Math.random().toString(),
    };
    console.log(expenseObjectValues);
  };

  return (
    <div>
      <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler}></ExpenseForm>
    </div>
  );
}

export default NewExpense;
