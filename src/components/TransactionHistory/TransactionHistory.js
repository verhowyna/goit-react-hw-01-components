import { SetRow } from "../SetRow/SetRow"

export const TransactionHistory = () => {
    return (
        <table class="transaction-history">
  <thead>
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
    )
}