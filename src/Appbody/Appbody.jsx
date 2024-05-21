import React from 'react';
//styles
import "./Appbody.css";
import Transactions from '../Transactions/Transactions';
import TopExpenses from '../Expenses/Expenses';
//components

const AppBody = () => {
    return (
        <div className='AppBody'>
            <Transactions />
            <TopExpenses />
        </div>
    );
};

export default AppBody;