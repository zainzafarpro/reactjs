const Hotel = (props) => {
    const {data} = props;
    const {
        type,
        name,
        description,
        location
    } = data;

    return (
        <div className="hotel">
            <strong className="name">{name}</strong>
            <p className="description">{description}</p>
            <span className="location">{location}</span>
        </div>
    )
}

export default Hotel;