import { FriendListItem } from "components/FriendListItem/FriendListItem"
import css from './FriendList.module.css';

export const FriendList = () => {
    return (
        <ul className={css.list}>
            <FriendListItem />
        </ul>
           
    )
}