import Profile from './profile/Profile';
import user from './profile/User.json';
import data from './statistics/Data.json';
import Statistics from './statistics/Statistics';
import FriendList from './friendList/FriendList';
import friends from './friendList/Friends.json';
import transactions from './transactions/Transactions.json';
import TransactionHistory from './transactions/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
