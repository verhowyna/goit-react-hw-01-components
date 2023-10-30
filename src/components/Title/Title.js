import css from './Title.module.css'

export const Title = ({ title }) => {
    return (
        <h2 className={title ? css.title : css.hide}>Upload stats</h2>
    )
}