import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-Slice";
import classes from "./CartButton.module.css";
import CartIcon from "./CartIcon";

const CartButton = (props) => {
  const totalQuant = useSelector((state) => state.cart.totalQuantity);
  // console.log(totalQuant)
  const dispatch = useDispatch();
  const cartButtonHandler = () => {
    dispatch(uiActions.toggle());
  };
  return (

      <button className={classes.button} onClick={cartButtonHandler}>
        <span>My Cart</span>
        <span className={classes.icon}>
          <CartIcon />
        </span>
        <span className={classes.badge}>{totalQuant}</span>
      </button>
   
  );
};

export default CartButton;
