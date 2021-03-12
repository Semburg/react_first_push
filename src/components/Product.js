const Product = (props) => {
    console.log(props)
    return (
        <figure>
            <img src={props.imgUrl} alt="" />
            <figcaption>
                <h2>{props.productTitle}</h2>
                <h3>{props.productPrice}</h3>
                <a href = {props.productLink} target="_blank">Buy now!</a>
            </figcaption>
        </figure>
    );
}

export default Product;