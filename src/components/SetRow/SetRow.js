import transactions from '../../transactions.json';
import css from './SetRow.module.css'

export const SetRow = () => {
   return transactions.map(({ id, type, amount, currency }) => {
    return (
      <tr className={css.row} key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    )
  }
  )
}
