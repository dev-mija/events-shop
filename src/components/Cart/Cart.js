import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import Modal from '../UI/Modal';
import { uiActions } from '../store/ui-Slice';
import { useState } from 'react';

import CheckoutForm from './CheckoutForm';

const Cart = (props) => {
  const[showOrder,setShowOrder]=useState(false);
  const dispatch=useDispatch()
  const cartItems=useSelector(state=>state.cart.items)
  console.log(cartItems)
  const hideCartHandler = () => {
    dispatch(uiActions.toggle())
    
  };
  const orderHandler=()=>{
    setShowOrder(val=>!val)

  }
  const cancelHandler=()=>{
    setShowOrder(val=>!val)

  }
  const orderActions=(
    <div className={classes.actions}>
        
        {cartItems.length>0 && <button onClick={orderHandler}>Order</button>}
      </div>
  )
  const chekoutActions=(
    <div >
        <CheckoutForm/>
       <button onClick={cancelHandler}>Cancel</button>
      </div>
  )
  
  return (
    <Modal onModalClick={hideCartHandler}> 
    {!showOrder&&<Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>{cartItems.map(item=><CartItem key={item.id}
          item={{ id:item.id,title: item.title, quantity: item.quantity, total: item.totalPrice, price: item.price }}
        />)
        }
      </ul>
    </Card>}
   {showOrder&& chekoutActions}
    {!showOrder && orderActions}
    </Modal>
  );
};

export default Cart;
