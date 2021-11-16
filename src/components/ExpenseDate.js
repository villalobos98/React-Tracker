import React from "react";
import "./styles/ExpenseDate.css";

function ExpenseDate(props) {
    const current_month = props.date.toLocaleString('en-US', { month: 'long' });
    const day_number = props.date.toLocaleString('en-US', { day: '2-digit' });
    const current_year = props.date.getFullYear();
    const day_full_name = props.date.toLocaleString('en-us', { weekday: 'long' });

    return (
        <div className="expense-date">
            <div className="expense-date__month">{current_month}</div>
            <div className="expense-date__year">{current_year}</div>
            <div className="expense-date__year">{day_full_name}</div>
            <div className="expense-date__day">{day_number}</div>
        </div>
    );
}

export default ExpenseDate;