import { useDispatch } from 'react-redux';
import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { loginActions } from '../store/login-slice';

const MainHeader = (props) => {
  const dispatch =useDispatch()
  const logouthandler=()=>{
    dispatch(loginActions.logOut())
  }
  return (
    <header className={classes.header}>
      <h1>Events Shop</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
          <li>
            <button onClick={logouthandler}>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
