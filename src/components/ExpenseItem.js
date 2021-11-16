import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import './styles/ExpenseItem.css';


function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title);

    const handleOnClick = () => {
        setTitle("Clicked");
    };

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
                <button onClick={handleOnClick}>Clicked !</button>
            </div>
        </div>
    );
}

export default ExpenseItem;