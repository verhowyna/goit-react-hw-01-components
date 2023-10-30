import friend from '../../friends.json';
import css from './FriendListItem.module.css';


export const FriendListItem = () => {
   return friend.map(({ id, name, avatar, isOnline }) => {
    return (
        <li key={id} className={css.item}>
           <span className={isOnline? css.statusOn : css.statusOff}></span>
           <img className={css.avatar} src={avatar} alt={name} width="48" />
           <p className={css.name}>{name}</p>
        </li>
    )
  }
  )
}