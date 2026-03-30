import { use, useState } from "react";
import SectionHeading from "../../UI/SectionHeading";
import { BsCartX } from "react-icons/bs";
import ToolCard from "../ToolCard/ToolCard";

const Tools = ({ toolsPromise, cart, addToCart }) => {
    const toolsData = use(toolsPromise);
    const [isCartSelected, setIsCartSelected] = useState(false);

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
                        toolsData.map((tool, index) => <ToolCard key={index} tool={tool} addToCart={addToCart}/>)
                    }

                </div>
            }

            {
                isCartSelected &&
                <div className="mt-5">
                    <h1 className="font-bold text-xl">Your Cart</h1>
                    <div className="mt-5 min-h-[30vh] flex flex-col justify-center items-center space-y-2 bg-white text-gray-500">
                        <BsCartX className="text-7xl" />
                        <p>Your cart is empty!</p>
                    </div>
                </div>
            }
        </div >
    );
};

export default Tools;