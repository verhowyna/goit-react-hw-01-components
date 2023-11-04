import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <div className={css.tableWraper}>
      <table className={css.transactionHistory}>
        <thead className={css.head}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(item => (
            <tr className={css.row} key={item.id}>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
