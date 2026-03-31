import { CgCheck } from "react-icons/cg";

const ToolCard = ({ tool, cart, addToCart }) => {
    const defineColorOfTag = (tag) => {
        console.log(tag);
        if (tag === "Popular") {
            return "bg-purple-200 text-purple-900"
        }
        if (tag === "Best Seller") {
            return "bg-amber-200 text-amber-900"
        }
        if (tag === "New") {
            return "bg-green-200 text-green-900"
        }

        return 'bg-gray-200 text-gray-900';
    }

    const handleBuyNow = () => {
        addToCart(tool);
    }

    const isAlreadyInCart = (toolId) => {
        const result = cart.find((tool) => tool.id === toolId);
        return !!result;
    }

    return (
        <div className="border-2 border-gray-200 rounded-2xl p-5 bg-white hover:bg-purple-50 transform transition-transform duration-200 hover:-translate-y-1 shadow-2xl">
            <p className={`float-right ${defineColorOfTag(tool.tagType)} px-3 py-1 text-xs font-semibold rounded-full`}>{tool.tagType}</p>
            <div className="mt-2 w-12 h-12 rounded-full overflow-hidden border border-gray-200 p-2">
                <img
                    src={tool.icon}
                    alt="cardImage"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="space-y-2 mt-5">
                <h1 className="font-bold text-2xl">{tool.name}</h1>
                <p className="text-gray-500">{tool.description}</p>
                <h1 className="font-bold text-2xl">
                    ${tool.price}<span className="text-base font-normal">/{tool.period}</span>
                </h1>

                <div>
                    {
                        tool.features.map((feature, index) =>
                            <div key={index} className="flex items-center">
                                <CgCheck className="text-green-700 text-4xl" />
                                <p className="text-gray-500">{feature}</p>
                            </div>
                        )
                    }
                </div>

                {
                    isAlreadyInCart(tool.id) ?
                        <button
                            className="mt-5 btn bg-linear-to-r from-green-500 to-green-700 text-white font-bold rounded-full w-full"
                        >
                            <CgCheck className="text-white-700 text-4xl" /> Added to cart
                        </button>
                        :
                        <button
                            onClick={() => handleBuyNow()}
                            className="mt-5 btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold rounded-full w-full">
                            Buy Now
                        </button>
                }
            </div>
        </div>
    );
};

export default ToolCard;