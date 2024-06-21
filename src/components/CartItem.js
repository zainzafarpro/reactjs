import { removeItem } from "../redux/cartSlice";
import { useDispatch } from "react-redux";

const CartItem = ({ id, category, image, price, title }) => {
  const dispatch = useDispatch();
  const handleRemoveItem = () => {
    dispatch(removeItem(id));
  };
  return (
    <div className="flex p-3 border-black border-2 mx-2 mb-4">
      <div className="w-1/12">
        <img src={image} />
      </div>
      <div className="w-auto grow pl-5">
        <span className="text-sm">{category}</span>
        <div className="tex-2xl font-bold">{title}</div>
        <span className="tex-xl">{price}</span>
      </div>
      <button onClick={handleRemoveItem}>Remove</button>
    </div>
  );
};
export default CartItem;
