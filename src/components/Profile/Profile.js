import user from '../../user.json';

export const Profile = ({username, avatar, tag, location, stats}) => {
    return ( <div className="profile">
  <div clasNames="description">
    <img
      src={user.avatar}
      alt={user.username}
      className="avatar"
    />
    <p className="name">{user.username}</p>
    <p className="tag">@{user.tag}</p>
    <p className="location">{user.location}</p>
  </div>

  <ul className="stats">
    <li className="stats-item">
      <span className="label">Followers</span>
      <span className="quantity">{[user.stats.followers]}</span>
    </li>
    <li className="stats-item">
      <span class="label">Views</span>
      <span class="quantity">{[user.stats.views]}</span>
    </li>
    <li className="stats-item">
      <span class="label">Likes</span>
      <span class="quantity">{[user.stats.likes]}</span>
    </li>
  </ul>
</div>  )
}