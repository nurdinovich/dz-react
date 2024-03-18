const Cart = ({img,title,price, oldPrice, despreition}) =>{
    return(
        <div className="card">
            <img src={img} alt=""/>
            <h1>{title}</h1>
            <p> {despreition}</p>
            <div className="col">
            <b>{price}</b>
                <span>{oldPrice}</span>
            </div>
            <button className="button" type="button">Add to cart</button>
        </div>
    )
}
export default Cart