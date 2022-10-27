import React from 'react';
import { MdLibraryBooks } from 'react-icons/md'
import { SiApplearcade } from 'react-icons/si'
import { BsArrowRightCircleFill } from 'react-icons/bs'
const data = [
    { id: 1, name: "Best Industry Leaders" },
    { id: 2, name: "LEARN COURSES ONLINE" },
    { id: 1, name: "BOOK LIBRARY & STORE" },
]


const Features = () => {

    return (
        <div className='flex items-center flex-col md:flex-row justify-center gap-4 lg:relative bottom-12 lg:w-[85%] mx-auto'>
            {
                data.map((feature, index) =>
                    <div className='mt-4 md:mt-0 bg-slate-600 px-4 py-8 w-[80%] mx-auto text-white flex items-center flex-col space-y-3 hover:bg-black transition-all duration-200 ease-in-out'>
                        {index === 0 && <span className=' text-accent'><MdLibraryBooks className='text-5xl' /></span>}
                        {index === 1 && <span className=' text-accent'> <SiApplearcade className='text-5xl' /></span>}
                        {index === 2 && <span className=' text-accent'><MdLibraryBooks className='text-5xl' /></span>}
                        <h2 className='uppercase font-bold text-2xl'>{feature.name}</h2>
                        <p className="flex items-center justify-center gap-2 text-accent cursor-pointer hover:translate-x-2 transition duration-300 ease-in-out">View More <BsArrowRightCircleFill className='text-xl' /></p>
                    </div>
                )
            }
        </div>
    );
};

export default Features;