import { Profile } from "../Profile/Profile";
import css from './App.module.css';

export const App = () => {
  return (
    <div classname={css.container}>
      <Profile />
    </div>
  );
};
