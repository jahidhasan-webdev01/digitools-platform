import { useState } from "react";
import SectionHeading from "../../UI/SectionHeading";
import cardImage from "../../assets/products/design-tool.png"
import { CgCheck } from "react-icons/cg";

const Tools = () => {
    const [isCartSelected, setIsCartSelected] = useState(false);
    return (
        <div className="w-full py-10 md:py-20 px-5 md:w-10/12 md:px-0 mx-auto">
            <SectionHeading
                title="Premium Digital Tools"
                subtitle="Choose from our curated collection of premium digital products designed to boost your productivity and creativity."
            />

            <div className="flex justify-center mt-2">
                <div className="inline-flex border-2 border-gray-200 rounded-full gap-2 p-1">
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
                    px-3 py-1 rounded-full cursor-pointer`}>Cart (8)</button>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">

                <div className="border-2 border-gray-200 rounded-2xl p-5">
                    <p className="float-right bg-amber-200 text-amber-900 px-3 py-1 text-xs font-semibold rounded-full">Best Seller</p>
                    <div className="mt-2 w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 p-2">
                        <img
                            src={cardImage}
                            alt="cardImage"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="space-y-2 mt-5">
                        <h1 className="font-bold text-2xl">AI Writing Pro</h1>
                        <p className="text-gray-500">Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.</p>
                        <h1 className="font-bold text-2xl">
                            $29<span className="text-base font-normal">/mo</span>
                        </h1>

                        <div>
                            <div className="flex items-center">
                                <CgCheck  className="text-green-700 text-4xl"/>
                                <p className="text-gray-500">Unlimited AI generations</p>
                            </div>
                            <div className="flex items-center">
                                <CgCheck  className="text-green-700 text-4xl"/>
                                <p className="text-gray-500">50+ Writing templates</p>
                            </div>
                            <div className="flex items-center">
                                <CgCheck  className="text-green-700 text-4xl"/>
                                <p className="text-gray-500">Grammer Checker</p>
                            </div>
                        </div>

                        <button className="mt-5 btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold rounded-full w-full">Buy Now</button>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default Tools;