import React from 'react';
import PropTypes from 'prop-types';
import styles from './transactionHistory.module.css';

const TransactionHistory = ({items}) => (
    <table className={styles.transaction_history}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
        <tbody>
            {items.map(transaction => (
                <tr key={transaction.id}>
                    <td>{transaction.type}</td>
                    <td>{transaction.amount}</td>
                    <td>{transaction.currency}</td>
                </tr>              
    ))}
  </tbody>
</table>
)

TransactionHistory.propTypes = {
    items:PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount:PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,            
        })
    )
}


export default TransactionHistory;