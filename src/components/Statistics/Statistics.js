
import { Title } from '../Title/Title';
import { Stats } from '../Stats/Stats';
import css from './Statistics.module.css'

export const Statistics = () => {
    return (
        <>
            <section className={css.statistics}>
                <div className={css.wrap}>
                    <Title title />
                </div>
                <ul className={css.statList}>
                    <Stats />
                </ul>
            </section>
        </>
    )
}