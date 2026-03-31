import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className="bg-gray-900">
            <div className="pt-10 md:pt-20 pb-10 px-2 md:px-0 w-10/12 mx-auto text-white grid grid-cols-12 gap-8 lg:gap-5 border-b-2 border-gray-600">
                <div className="col-span-12 lg:col-span-4">
                    <h1 className="text-3xl font-bold cursor-pointer">DigiTools</h1>
                    <p className="mt-2 text-gray-300 text-sm">Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.</p>
                </div>

                <div className="col-span-6 lg:col-span-2">
                    <h1 className="font-bold">Product</h1>
                    <ul className="mt-2 text-gray-300 text-sm space-y-1">
                        <li className="cursor-pointer hover:text-white">Features</li>
                        <li className="cursor-pointer hover:text-white">Pricing</li>
                        <li className="cursor-pointer hover:text-white">Templates</li>
                        <li className="cursor-pointer hover:text-white">Integrations</li>
                    </ul>
                </div>

                <div className="col-span-6 lg:col-span-2">
                    <h1 className="font-bold">Company</h1>
                    <ul className="mt-2 text-gray-300 text-sm space-y-1">
                        <li className="cursor-pointer hover:text-white">About</li>
                        <li className="cursor-pointer hover:text-white">Blog</li>
                        <li className="cursor-pointer hover:text-white">Careers</li>
                        <li className="cursor-pointer hover:text-white">Press</li>
                    </ul>
                </div>

                <div className="col-span-6 lg:col-span-2">
                    <h1 className="font-bold">Resources</h1>
                    <ul className="mt-2 text-gray-300 text-sm space-y-1">
                        <li className="cursor-pointer hover:text-white">Documentation</li>
                        <li className="cursor-pointer hover:text-white">Help Center</li>
                        <li className="cursor-pointer hover:text-white">Community</li>
                        <li className="cursor-pointer hover:text-white">Contact</li>
                    </ul>
                </div>

                <div className="col-span-6 lg:col-span-2">
                    <h1 className="font-bold">Social Links</h1>
                    <div className="flex gap-2 mt-2">
                        <div className="bg-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-100">
                            <FaInstagram className="text-black" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-100">
                            <FaFacebookF className="text-black" />
                        </div>
                        <div className="bg-gray-300 p-2 rounded-full cursor-pointer hover:bg-gray-100">
                            <FaXTwitter className="text-black" />
                        </div>

                    </div>
                </div>
            </div>

            <div className="py-5 text-gray-500 text-xs px-2 md:px-0 w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-2 md:gap-5">
                <div>
                    <h1>© 2026 Digitools. All rights reserved.</h1>
                </div>

                <div className="flex flex-row gap-5">
                    <p className="cursor-pointer hover:text-white">Privacy Policy</p>
                    <p className="cursor-pointer hover:text-white">Terms of Service</p>
                    <p className="cursor-pointer hover:text-white">Cookies</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;