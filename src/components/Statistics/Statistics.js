
import { Title } from '../Title/Title';
import { Stats } from '../Stats/Stats';
import css from './Statistics.module.css'

export const Statistics = () => {
    return (
        <>
            <section className={css.statistics}>
                <Title />
                <ul className={css.statList}>
                    <Stats />
                </ul>
            </section>
        </>
    )
}