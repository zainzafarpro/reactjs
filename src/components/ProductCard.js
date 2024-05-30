const ProductCard = ({ image, title, description, price }) => {
  return (
    <div className="border border-slate-600 p-4 h-[100%]">
      <img src={image} className="w-40 mx-auto h-40 object-contain" />
      <strong className="font-bold text-2xl">{title}</strong>
      <p className="text-sm text-slate-400">{description}</p>
      <div className="font-bold">${price}</div>
    </div>
  );
};

export const highQuality = (ProductCard) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="text-2xl absolute">⭐️</div>
        <ProductCard {...props} />
      </div>
    );
  };
};

export default ProductCard;
