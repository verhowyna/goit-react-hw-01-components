import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      <div className={css.wrap}>
        <h2 className={css.title}>{title}</h2>
      </div>
      <ul className={css.statList}>
        {stats.map(item => (
          <li key={item.id} className={css.item}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
