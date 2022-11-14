import React from 'react';
import PropTypes from 'prop-types';
import styles from './friendList.module.css';

const Friends = ({ friends }) => (
    <ul className={styles.friend_list}>
   {friends.map(friend=>(<li className={styles.item} key={friend.id}>
  <span className={ friend.isOnline ? styles.statusOnline : styles.statusOffline}></span>
  <img className={styles.avatar} src={friend.avatar} alt="User avatar" width="80" />
  <p className={styles.name}>{friend.name}</p>
</li>))}    
</ul>
)

Friends.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar:PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,            
        })
    )
}

export default Friends;



