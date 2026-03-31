import { CiPlay1 } from 'react-icons/ci';
import bannerImage from '../../assets/banner.png';
import highlightsImage from '../../assets/highlights.png';

const Banner = () => {
    return (
        <div className='w-full lg:w-10/12 mx-auto py-5 lg:py-20 px-5 flex gap-10 flex-col-reverse lg:flex-row items-center'>

            <div className='space-y-5 w-full lg:w-1/2'>
                <div className='inline-flex items-center gap-2 bg-purple-100 rounded-full px-3 py-1 font-medium text-purple-500 w-max border border-purple-200'>
                    <img className='w-5 h-5 animate-pulse' src={highlightsImage} alt="highlights" />
                    <span className='bg-linear-to-r from-[#4f39f6] to-[#9514fa] bg-clip-text text-transparent'>
                        New: AI-Powered Tools Available
                    </span>
                </div>

                <h1 className='text-4xl lg:text-5xl xl:text-7xl font-extrabold'>
                    Supercharge Your <br /> Digital Workflow
                </h1>

                <p className='text-gray-500'>
                    Access premium AI tools, design assets, templates, and productivity <br />
                    software—all in one place. Start creating faster today. <br /> Explore Products
                </p>

                <div className='flex flex-row gap-2 mb-10 lg:mb-0'>
                    <button className="btn bg-linear-to-r from-[#4f39f6] to-[#9514fa] text-white rounded-full">
                        Explore Products
                    </button>
                    <button className="btn border border-[#9514fa] text-[#4f39f6] rounded-full font-semibold hover:bg-linear-to-r from-[#4f39f6] to-[#9514fa] hover:text-white">
                        <CiPlay1 /> Watch Demo
                    </button>
                </div>
            </div>

            <div className="flex justify-center items-center w-full lg:w-1/2">
                <img
                    src={bannerImage}
                    alt="Banner"
                    className="w-full max-w-125 h-auto object-contain"
                />
            </div>
        </div>
    );
};

export default Banner;