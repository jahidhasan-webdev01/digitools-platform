import cartIcon from "../../assets/products/shopping-cart.png";

const Navbar = () => {
    return (
        <div className="shadow-sm border-b border-purple-100">
            <div className="navbar w-full md:w-10/12 mx-auto">
                <div className="navbar-start font-semibold text-sm">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li><a>Products</a></li>
                            <li><a>Features</a></li>
                            <li><a>Pricing</a></li>
                            <li><a>Testimonials</a></li>
                            <li><a>FAQ</a></li>
                        </ul>
                    </div>
                    <a className="text-2xl font-extrabold bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent cursor-pointer">
                        DigiTools
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex font-semibold text-sm">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Products</a></li>
                        <li><a>Features</a></li>
                        <li><a>Pricing</a></li>
                        <li><a>Testimonials</a></li>
                        <li><a>FAQ</a></li>
                    </ul>
                </div>
                <div className="navbar-end space-x-4 font-semibold text-sm">
                    <div className="relative">
                        <img className="cursor-pointer" src={cartIcon} alt="Cart" />
                        <span className="absolute -top-4 -right-3 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                            8
                        </span>
                    </div>
                    <a className="cursor-pointer pl-2">Login</a>
                    <a className="btn text-sm bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full">Get Started</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;