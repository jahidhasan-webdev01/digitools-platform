const Join = () => {
    return (
        <div className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] py-20 px-5">
            <div className="space-y-1 text-center">
                <h1 className="font-extrabold text-3xl text-white">Ready To Transform Your Workflow?</h1>
                <p className="text-sm text-gray-300">
                    Join thousands of professionals who are already using Digitools to work smarter.
                    <br />
                    Start your free trial today.</p>
            </div>

            <div className="mt-5 flex flex-row items-center justify-center gap-5">
                <button className="btn text-[#4f39f6] rounded-full font-semibold hover:bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:text-white">Explore Products</button>
                <button className="btn text-white border border-white rounded-full bg-transparent">View Pricing</button>
            </div>

            <div className="text-gray-300 flex flex-col md:flex-row justify-center items-center text-sm mt-5 gap-2">
                <p>14-day free trial</p>
                <p className="w-1.5 h-1.5 rounded-full bg-gray-300"></p>
                <p>No credit card required</p>
                <p className="w-1.5 h-1.5 rounded-full bg-gray-300"></p>
                <p>Cancel anytime</p>
            </div>
        </div>
    );
};

export default Join;