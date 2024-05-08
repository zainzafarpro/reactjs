const User = (props) => {

    const {
        brand,
        name,
        price,

    } = props;
    return (
        <div className="user">
            <strong className="brand">{brand}</strong>
            <div className="name">{name}</div>
            <div className="price">{price}</div>
            <div className="category">{props.category.category}</div>
            <div className="userType">{props.category.usertype.usertype}</div>
        </div>
    )
}

export default User;