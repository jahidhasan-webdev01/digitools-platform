import { BsCartX } from "react-icons/bs";
import CartItem from "../CartItem/CartItem";

const Cart = ({ cart, removeFromCart, handleProceedToCheckout }) => {
    const total = cart.reduce((sum, item) => sum + item.price, 0)

    return (
        <div className="mt-5">
            <h1 className="font-bold text-xl">Your Cart</h1>
            <div className="mt-5 min-h-[30vh] bg-white border-2 border-gray-200 rounded-2xl p-3 md:p-5 shadow-2xl">
                {
                    cart.length > 0 ?
                        <>
                            {
                                cart.map((item, index) =>
                                    <CartItem
                                        key={index}
                                        item={item}
                                        removeFromCart={removeFromCart}
                                    />)
                            }

                            <div className="w-full flex justify-between my-5">
                                <h1 className="text-gray-500">Total:</h1>
                                <h1 className="font-bold text-xl">${total}</h1>
                            </div>

                            <button
                                onClick={() => handleProceedToCheckout()}
                                className="btn text-white rounded-full w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
                                Proceed to Checkout
                            </button>
                        </>
                        :
                        <div className="text-gray-500 h-[30vh] flex flex-col space-y-2 justify-center items-center">
                            <BsCartX className="text-7xl" />
                            <p>Your cart is empty!</p>
                        </div>
                }
            </div>
        </div>
    );
};

export default Cart;