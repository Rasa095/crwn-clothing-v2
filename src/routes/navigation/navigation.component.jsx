import { Link, Outlet } from "react-router-dom";
import { Fragment } from "react";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg"
import { useContext } from "react";
import {UserContext} from '../../contexts/user.context'
import { signOutUser } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component"
import { CartContext } from "../../contexts/cart.context";
import './navigation.style.scss';
const  Navigation =()=>{
   const {currentUser}=useContext(UserContext);
   const {isCardOpen}=useContext(CartContext);

   const singOutHandler= async()=>{
      await signOutUser();
      

   }
   
    return(
      <Fragment>
         <div className="navigation">
         <Link className="logo-container" to="/">
            <CrwnLogo className="logo"/>
         </Link>
            <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                Shop
            </Link>
            {
               currentUser?(
                  <span onClick={singOutHandler}>Sign Out</span>
               ):
               (
                  <Link className="nav-link" to='/auth'>
                   SIGN IN
                  </Link>
               )
            } 
            <CartIcon/>  
            </div>
            {isCardOpen && <CartDropDown/>}
          </div>
         
         <Outlet/>
      </Fragment>

    );

};
export default Navigation;