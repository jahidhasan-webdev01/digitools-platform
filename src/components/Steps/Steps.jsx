import SectionHeading from "../../UI/SectionHeading";
import userImage from "../../assets/user.png";
import productImage from "../../assets/package.png";
import rocketImage from "../../assets/rocket.png";

const Steps = () => {
    return (
        <div className="w-full py-10 md:py-20 px-5 md:w-10/12 md:px-0 mx-auto">
            <SectionHeading
                title="Get Started In 3 Steps"
                subtitle="Start using premium digital tools in minutes, not hours."
            />

            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                <div className="bg-white hover:bg-purple-50 rounded-2xl border border-gray-200 px-10 py-5 shadow-2xl">
                    <div className="flex justify-end">
                        <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full p-2 font-bold text-sm text-white">01</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2 py-10">
                        <div className="bg-purple-100 rounded-full p-5 border border-purple-200">
                            <img src={userImage} alt="User" />
                        </div>
                        <h1 className="font-bold text-xl">Create Account</h1>
                        <p className="text-sm text-gray-500">Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>

                <div className="bg-white hover:bg-purple-50 rounded-2xl border border-gray-200 px-10 py-5 shadow-2xl">
                    <div className="flex justify-end">
                        <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full p-2 font-bold text-sm text-white">01</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2 py-10">
                        <div className="bg-purple-100 rounded-full p-5 border border-purple-200">
                            <img src={productImage} alt="User" />
                        </div>
                        <h1 className="font-bold text-xl">Choose Products</h1>
                        <p className="text-sm text-gray-500">Sign up for free in seconds. No credit card required to get started.</p>
                    </div>
                </div>

                <div className="bg-white hover:bg-purple-50 rounded-2xl border border-gray-200 px-10 py-5 shadow-2xl">
                    <div className="flex justify-end">
                        <span className="bg-linear-to-r from-[#4f39f6] to-[#9514fa] rounded-full p-2 font-bold text-sm text-white">01</span>
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-2 py-10">
                        <div className="bg-purple-100 rounded-full p-5 border border-purple-200">
                            <img src={rocketImage} alt="User" />
                        </div>
                        <h1 className="font-bold text-xl">Start Creating</h1>
                        <p className="text-sm text-gray-500">Download and start using your premium
                            tools immediately.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Steps;