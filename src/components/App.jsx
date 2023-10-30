import { Statistics } from "components/Statistics/Statistics";
import { Profile } from "./Profile/Profile";
import { FriendList } from "./FriendList/FriendList";



export const App = () => {
  return (
    <>
      <Profile />
      <Statistics />
      <FriendList />
    </>
  );
};
