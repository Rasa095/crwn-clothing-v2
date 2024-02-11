import { createContext,useEffect,useState } from "react";

 export const CartContext=createContext({
    isCardOpen:false,
    setIsCardOpen:()=>{},
    cartItems:[],
    removeItemToCart:()=>{},
    addItemToCart:()=>{},
    removeItem:()=>{},
    total:0,
})
const addCartItem=(cartItems,productToAdd)=>{

    const exist=cartItems.find(item=>item.id===productToAdd.id);

    if(exist){
      return cartItems.map(item=>item.id===productToAdd.id?
             {...item,quantity:item.quantity+1}
            : item
        )
    };
    return [...cartItems,{...productToAdd,quantity:1}];
}
const removeCartItem=(cartItems,carItemToRemove)=>{

    const exist=cartItems.find(carItem=>carItem.id===carItemToRemove.id);
    console.log(exist)

    if(exist.quantity===1){
        return cartItems.filter(cartItem=>cartItem.id!==exist.id);
    }
   
    return cartItems.map(carItem=>carItem.id===carItemToRemove.id
           ?{...carItem,quantity:carItem.quantity-1}
           :carItem);



   
}
const removeItem=(cartItems,item)=>{
  const newItems= cartItems.filter(ite=>ite.id!==item.id)
  return newItems;

}

export const CartProvider=({children})=>{

    const [isCardOpen,setIsCardOpen]=useState(false);
    const [cartItems,setCartItems]=useState([]);
    const [cartCount,setCartCount]=useState(0);
    const [cartTotal,setcartTotal]=useState(0);

    useEffect(()=>{
       const newCarCount= cartItems.reduce((akuma,item)=>akuma+=item.quantity,0);
       setCartCount(newCarCount);
    },[cartItems]);
    useEffect(()=>{
        const newCartTotal= cartItems.reduce((total,cartItem)=>total+cartItem.price*cartItem.quantity,0);
        setcartTotal(newCartTotal);
     },[cartItems]);
    const addItemToCart=(productToAdd=>{
        setCartItems(addCartItem(cartItems,productToAdd));

    })
    const removeItemToCart=(cartItemToRemove=>{
        setCartItems(removeCartItem(cartItems,cartItemToRemove));
    })
    const clearItemFromCart=(itemForRemove=>{
        setCartItems(removeItem(cartItems,itemForRemove));
    });
   
   

    
    const value={isCardOpen,setIsCardOpen,addItemToCart,cartItems,cartCount,removeItemToCart,clearItemFromCart,cartTotal};
    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}








