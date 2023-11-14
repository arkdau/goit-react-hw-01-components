import clsx from 'clsx';
import css from './TransactionHistory.module.css';

const TransactionHistory = ({items}) => (
<table className={css.transactionHistory}>
  <thead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
    <tbody>
      {items.map((item, index) => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
      ))}
    </tbody>
  </table>
)


export default TransactionHistory
