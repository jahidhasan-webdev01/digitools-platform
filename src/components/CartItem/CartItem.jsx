const CartItem = ({item}) => {
    return (
        <div className="w-full flex items-center justify-between mt-2 bg-base-200 p-5 rounded-xl border border-gray-200">
            <div className="flex gap-2 md:gap-5">
                <img className="w-10 h-10" src={item.icon} alt="" />
                <div>
                    <h1 className="font-bold text-black">{item.name}</h1>
                    <p className="text-sm">${item.price}</p>
                </div>
            </div>
            <button className="text-sm text-red-600 font-bold cursor-pointer">remove</button>
        </div>
    );
};

export default CartItem;