import clsx from 'clsx';
import css from './FriendList.module.css';

const FriendList = ({friends}) => (

   <ul className={css.friendList}>
      {friends.map((item, index) => (
          <li key={index} className={css.item}>
            <span className={clsx(css.status, item.isOnline ? css.onLine : css.offLine)}></span>
            <img className={css.avatar} src={item.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{item.name}</p>
          </li>
      ))}
  </ul>
)


export default FriendList
