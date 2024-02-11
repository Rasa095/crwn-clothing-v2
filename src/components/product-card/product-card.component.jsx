
import Button from "../button/button.component";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./product-card.styles.scss"

const ProductCard=({product})=>{
    const {addItemToCart}=useContext(CartContext);

            const addProductToCard=()=>addItemToCart(product);
            const {name,price,imageUrl,}=product;
           return (<div className="product-card-container">
                <img src={imageUrl} alt="wgatever"/>
               <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
               </div>
                <Button buttonType="inverted" onClick={addProductToCard} >Add to card</Button>
            </div>)
   
    


    
}
export default ProductCard;