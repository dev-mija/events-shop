import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Login from "./components/UI/Login";

function App() {
  const isLoggedIn = useSelector((state) => state.login.isLoggedIn);
  console.log(isLoggedIn);
  const visible = useSelector((state) => state.ui.cartIsVisible);
  const cartdata = useSelector((state) => state.cart);
  // console.log(cartdata);

  const Content = (
    <Layout>
      {visible && <Cart />}
      <Products />
    </Layout>
  );

  return <Fragment>{isLoggedIn ? Content : <Login />}</Fragment>;
}

export default App;
