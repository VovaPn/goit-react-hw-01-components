import Profile from './profile/profile';
import user from './profile/user.json';
import data from './statistics/data.json';
import Statistics from './statistics/statistics';
import FriendList from "./friendList/friendList";
import friends from "./friendList/friends.json";
import transactions from "./transactions/transactions.json";
import TransactionHistory from './transactions/transactionHistory'

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
  )
};
