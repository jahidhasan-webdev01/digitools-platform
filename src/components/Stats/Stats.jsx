const Stats = () => {
    return (
        <div className="w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white py-8">
            <div className="w-full md:w-2/3 mx-auto flex justify-between items-center text-center divide-x divide-white/30">

                <div className="flex-1 py-4">
                    <p className="text-3xl font-extrabold">50K+</p>
                    <p className="text-sm mt-1">Active Users</p>
                </div>

                <div className="flex-1 py-4">
                    <p className="text-3xl font-extrabold">200+</p>
                    <p className="text-sm mt-1">Premium Tools</p>
                </div>

                <div className="flex-1 py-4">
                    <p className="text-3xl font-extrabold">4.9</p>
                    <p className="text-sm mt-1">Rating</p>
                </div>

            </div>
        </div>
    );
};

export default Stats;