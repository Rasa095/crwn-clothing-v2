import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import { useContext } from 'react'
import { CardContext } from '../../contexts/carOpen'
import "./cart-icon.styles.scss"
const CartIcon =()=>{
    const {isCardOpen,setIsCardOpen}=useContext(CardContext);
    const toogleIsCartOpen=()=>setIsCardOpen(!isCardOpen);
    return(
        <div className='cart-icon-container' onClick={toogleIsCartOpen}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>0</span>
    </div>
    )

}
export default CartIcon;