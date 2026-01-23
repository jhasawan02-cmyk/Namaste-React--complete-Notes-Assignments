import { useSelector } from "react-redux";
import RestaurantMenu from "./RestaurantMenu";

const Cart = () =>{

    const cartItems = useSelector((store) => store.cart.items); 
    return(
        <div className="m-4 p-4 text-center ">
            <h1 className="text-2xl font-bold">Cart here !</h1>
        
        </div>
    )
}

export default Cart;