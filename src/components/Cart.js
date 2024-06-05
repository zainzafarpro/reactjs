import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  return cartItems.length === 0 ? (
    <div className="empty-cart text-center">
      <h1 className="text-3xl font-bold mb-5">Your cart is empty!</h1>
      <p className="text-sm font-thin">Please go back to shopping</p>
      <Link className="text-sm text-blue-600 underline" to="/">
        Shope now!
      </Link>
    </div>
  ) : (
    <div className="cart">
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Cart;
