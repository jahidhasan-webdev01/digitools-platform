import { use, useState } from "react";
import SectionHeading from "../../UI/SectionHeading";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";

const Tools = ({ toolsPromise, cart, addToCart, removeFromCart, handleProceedToCheckout }) => {
    const toolsData = use(toolsPromise);
    const [isCartSelected, setIsCartSelected] = useState(false);

    return (
        <div className="w-full py-10 md:py-20 px-5 md:w-10/12 md:px-0 mx-auto">
            <SectionHeading
                title="Premium Digital Tools"
                subtitle="Choose from our curated collection of premium digital products designed to boost your productivity and creativity."
            />

            <div className="flex justify-center mt-5">
                <div className="inline-flex border-2 border-gray-200 rounded-full gap-2 p-1 bg-white shadow-2xl">
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
                <Products
                    toolsData={toolsData}
                    cart={cart}
                    addToCart={addToCart}
                />
            }

            {
                isCartSelected &&
                <Cart
                    cart={cart}
                    removeFromCart={removeFromCart}
                    handleProceedToCheckout={handleProceedToCheckout}
                />
            }
        </div >
    );
};

export default Tools;