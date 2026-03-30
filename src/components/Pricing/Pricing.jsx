import { CgCheck } from "react-icons/cg";
import SectionHeading from "../../UI/SectionHeading";

const Pricing = () => {
    return (
        <div className="w-full py-10 md:py-20 px-5 md:w-10/12 md:px-0 mx-auto">
            <SectionHeading
                title="Simple, Transparent Pricing"
                subtitle="Choose the plan that fits your needs. Upgrade or downgrade anytime."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">

                <div className="border border-gray-200 rounded-xl p-5 flex flex-col">
                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">Started</h1>
                        <p>Perfect for getting started</p>

                        <h1 className="my-5 font-bold text-2xl">
                            $0 <span className="text-base text-gray-500 font-normal">/Month</span>
                        </h1>

                        <div>
                            <div className="flex items-center">
                                <CgCheck className="text-green-700 text-4xl" />
                                <p className="text-gray-500">Access to 10 free tools</p>
                            </div>
                            <div className="flex items-center">
                                <CgCheck className="text-green-700 text-4xl" />
                                <p className="text-gray-500">Basic templates</p>
                            </div>
                            <div className="flex items-center">
                                <CgCheck className="text-green-700 text-4xl" />
                                <p className="text-gray-500">Community support</p>
                            </div>
                            <div className="flex items-center">
                                <CgCheck className="text-green-700 text-4xl" />
                                <p className="text-gray-500">1 project per month</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="btn rounded-full w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold mt-5">
                            Get Started Free
                        </button>
                    </div> 

                </div>

                <div className="relative border border-gray-200 rounded-xl p-5 flex flex-col bg-linear-to-r from-[#4f39f6] to-[#9514fa]">
                    <div className="flex-1">
                        <p className="absolute bg-amber-300 px-4 py-1 rounded-full -top-4 left-1/2 -translate-x-1/2 font-bold text-sm">Most Popular</p>
                        <h1 className="text-2xl font-bold text-white">Pro</h1>
                        <p className="text-gray-200">Best for professionals</p>

                        <h1 className="my-5 font-bold text-2xl text-white">
                            $29 <span className="text-base text-gray-200 font-normal">/Month</span>
                        </h1>

                        <div className="text-gray-200">
                            <div className="flex items-center">
                                <CgCheck className="text-4xl" />
                                <p>Access to all premium tools</p>
                            </div>
                            <div className="flex items-center">
                                <CgCheck className="text-4xl" />
                                <p>Unlimited templates</p>
                            </div>
                            <div className="flex items-center">
                                <CgCheck className="text-4xl" />
                                <p>Priority support</p>
                            </div>
                            <div className="flex items-center">
                                <CgCheck className="text-4xl" />
                                <p>Unlimited projects</p>
                            </div>
                            <div className="flex items-center">
                                <CgCheck className="text-4xl" />
                                <p>Cloud sync</p>
                            </div>
                            <div className="flex items-center">
                                <CgCheck className="text-4xl" />
                                <p>Advanced analytics</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="btn rounded-full w-full bg-white text-[#9514fa] font-bold mt-5">
                            Get Started Free
                        </button>
                    </div>

                </div>

                <div className="border border-gray-200 rounded-xl p-5 flex flex-col">

                    <div className="flex-1">
                        <h1 className="text-2xl font-bold">Enterprise</h1>
                        <p>For teams and businesses</p>

                        <h1 className="my-5 font-bold text-2xl">
                            $99 <span className="text-base text-gray-500 font-normal">/Month</span>
                        </h1>

                        <div>
                            <div className="flex items-center">
                                <CgCheck className="text-green-700 text-4xl" />
                                <p className="text-gray-500">Everything in Pro</p>
                            </div>
                            <div className="flex items-center">
                                <CgCheck className="text-green-700 text-4xl" />
                                <p className="text-gray-500">Team collaboration</p>
                            </div>
                            <div className="flex items-center">
                                <CgCheck className="text-green-700 text-4xl" />
                                <p className="text-gray-500">Custom integrations</p>
                            </div>
                            <div className="flex items-center">
                                <CgCheck className="text-green-700 text-4xl" />
                                <p className="text-gray-500">Dedicated support</p>
                            </div>
                            <div className="flex items-center">
                                <CgCheck className="text-green-700 text-4xl" />
                                <p className="text-gray-500">SLA guarantee</p>
                            </div>
                            <div className="flex items-center">
                                <CgCheck className="text-green-700 text-4xl" />
                                <p className="text-gray-500">Custom branding</p>
                            </div>
                        </div>
                    </div>

                    <div>
                        <button className="btn rounded-full w-full bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white font-bold mt-5">
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Pricing;