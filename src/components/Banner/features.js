import React from 'react';
import { MdLibraryBooks } from 'react-icons/md'
import { SiApplearcade } from 'react-icons/si'
const data = [
    { id: 1, name: "Best Industry Leaders" },
    { id: 2, name: "LEARN COURSES ONLINE" },
    { id: 1, name: "BOOK LIBRARY & STORE" },
]


const features = () => {

    return (
        <div className='flex items-center flex-col justify-center'>
            {
                data.map(feature =>
                    <div>
                        <h2>{feature.name}</h2>
                        <div className="btn btn-link">View More</div>
                    </div>
                )
            }
        </div>
    );
};

export default features;