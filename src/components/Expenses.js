import './styles/Expenses.css';
import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';

const Expenses = (props) => {
    const [year, setYear] = useState(new Date().getFullYear());
    const yearChangeHandler = (value) => {
        setYear(value);
    }
    return (
        <div>
            <ExpenseFilter onChangeFilter={yearChangeHandler} selectedYear={year} />
            <div className="expenses">
                {
                    props.items.map((expense) => (
                        <ExpenseItem
                            key={expense.id}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    ))
                }
            </div>
        </div>
    )
}
export default Expenses;