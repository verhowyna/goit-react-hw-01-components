import data from '../../data.json';
import css from './Stats.module.css'


export const Stats = () => {
   return data.map(({ id, label, percentage }) => {
    return (
      <li key={id} className={css.item}>
         <span className={css.label}>{label}</span>
         <span className={css.percentage}>{percentage}%</span>
      </li>
    )
  }
  )
}

