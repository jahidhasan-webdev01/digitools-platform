import { use, useState } from "react";
import SectionHeading from "../../UI/SectionHeading";
import { BsCartX } from "react-icons/bs";
import ToolCard from "../ToolCard/ToolCard";
import CartItem from "../CartItem/CartItem";

const Tools = ({ toolsPromise, cart, addToCart, removeFromCart, handleProceedToCheckout }) => {
    const toolsData = use(toolsPromise);
    const [isCartSelected, setIsCartSelected] = useState(false);

    const total = cart.reduce((sum, item) => sum + item.price, 0)

    return (
        <div className="w-full py-10 md:py-20 px-5 md:w-10/12 md:px-0 mx-auto">
            <SectionHeading
                title="Premium Digital Tools"
                subtitle="Choose from our curated collection of premium digital products designed to boost your productivity and creativity."
            />

            <div className="flex justify-center mt-2">
                <div className="inline-flex border-2 border-gray-200 rounded-full gap-2 p-1 bg-white">
                    <button
                        onClick={() => setIsCartSelected(false)} className={`
                            ${!isCartSelected &&
                            "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-sm text-white font-bold"
                            } 
                    px-3 py-1 rounded-full cursor-pointer`}>Products</button>

                    <button
                        onClick={() => setIsCartSelected(true)}
                        className={`
                            ${isCartSelected &&
                            "bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-sm text-white font-bold"
                            } 
                    px-3 py-1 rounded-full cursor-pointer`}>Cart ({cart.length})</button>
                </div>
            </div>

            {
                !isCartSelected &&
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">

                    {
                        toolsData.map((tool, index) => <ToolCard key={index} tool={tool} cart={cart} addToCart={addToCart} />)
                    }

                </div>
            }

            {
                isCartSelected &&
                <div className="mt-5">
                    <h1 className="font-bold text-xl">Your Cart</h1>
                    <div className="mt-5 min-h-[30vh] bg-white border-2 border-gray-200 rounded-2xl p-3 md:p-5">
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
            }
        </div >
    );
};

export default Tools;