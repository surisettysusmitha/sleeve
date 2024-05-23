// ViewTransactions.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    
    axios.get('/api/transactions')
      .then(response => {
        setTransactions(response.data);
      })
      .catch(error => {
        console.error('Error fetching transactions:', error);
      });
  }, []);

  return (
    <div>
      <h2>View Transactions</h2>
      <div>
        {transactions.map(transaction => (
          <div key={transaction._id}>
            <p>Name: {transaction.name}</p>
            <p>Amount: {transaction.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewTransactions;
