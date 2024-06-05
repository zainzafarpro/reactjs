const CartItem = ({ id, category, image, price, title }) => {
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
    </div>
  );
};
export default CartItem;
