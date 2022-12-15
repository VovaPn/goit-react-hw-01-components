import React from 'react';
import styles from './FriendList.module.css';
import FriendListItem from 'components/FriendListItem/FriendListItem';

const Friends = ({ friends }) => (
  <ul className={styles.friend_list}>
    {friends.map(({ id, isOnline, avatar, name }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isOnline={isOnline}
      />
    ))}
  </ul>
);

export default Friends;
