import React, { useState } from "react";
import "./styles/ExpenseForm.css";

const ExpenseForm = (props) => {
  // const [expenseData, setExpenseData] = useState({});
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: amount,
      date: new Date(date),
    };
    props.onSaveExpenseData(expenseData);
    
    // Clear out form fields when the data has been submitted
    setTitle("");
    setAmount("");
    setDate("");
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  return (
    <form className="new_expense_form" onSubmit={handleSubmit}>
      <h1>Expense Form</h1>
      <div className="new_expense_attribute">
        <label> Title: </label>
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          placeholder="Title"
        />
      </div>
      <div className="new_expense_attribute">
        <label> Amount: </label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          value={amount}
          placeholder={"Price"}
          onChange={handleAmountChange}
        />
      </div>
      <div className="new_expense_attribute">
        <label> Date: </label>
        <input
          type="date"
          min="2019-01-01"
          max="2050-01-01"
          value={date}
          placeholder={new Date().toLocaleDateString()}
          onChange={handleDateChange}
        />
      </div>
      <button type="submit" className="new_expense_action">
        Add Expense
      </button>
    </form>
  );
};

export default ExpenseForm;
