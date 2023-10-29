import data from '../../data.json';

export const Stats = () => {
   return data.map(({ id, label, percentage }) => {
    return (
      <li key={id} className="item">
         <span className="label">{label}</span>
         <span className="percentage">{percentage}</span>
      </li>
    )
  }
  )
}

