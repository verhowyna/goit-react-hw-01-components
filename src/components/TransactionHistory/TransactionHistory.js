import { SetRow } from "../SetRow/SetRow"
import css from './TransactionHistory.module.css'

export const TransactionHistory = () => {
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
    <SetRow />
  </tbody>
</table>
</div >
    )
}