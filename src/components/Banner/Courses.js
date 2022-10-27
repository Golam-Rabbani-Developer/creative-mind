

import React, { useState } from 'react';
import { FaUserFriends } from 'react-icons/fa'
import { GrNotes } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom';
import useData from '../../utilitis/getData';
import { CgSidebarRight } from 'react-icons/cg'
import Loading from '../../shared/Loading';

const serchItems = [
    { id: 1, name: "All Courses" },
    { id: 2, name: "Academic Courses" },
    { id: 3, name: "General Courses" },
    { id: 4, name: "English Courses" },
    { id: 5, name: "Language Courses" },
]

const Courses = () => {
    const [courses, setCourses] = useState([])
    const { data } = useData(courses, setCourses)
    const navigate = useNavigate()
    return (
        <div>
            <div className='mt-8'>
                <input type="text" placeholder="Serch By the Name" className="input input-bordered min-w-[85%] mx-auto max-w-xs focus:outline-none" />
            </div>
            {data.length > 0 ? <div className='grid grid-cols-12 gap-0'>
                <div className='col-span-12 md:col-span-9'>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-[85%] mx-auto mt-14 mb-24'>
                        {
                            data.map(course =>
                                <div onClick={() => navigate(`/courses/${course._id}`)} className="card bg-base-100 border pt-4 hover:border-gray-400 transition-all duration-300 ease-linear cursor-pointer">
                                    <img className='w-[200px] h-[240px] rounded-sm mx-auto' src={course.picture} alt="" />
                                    <h2 className='mt-3 font-bold'>{course.name}</h2>
                                    <div className='flex items-center justify-between px-8 py-3 mt-3 border-t'>
                                        <div className='flex items-center gap-4'>
                                            <span><GrNotes className='text-primary' /> {Math.round(Math.random() + 10)}</span>
                                            <span><FaUserFriends className='text-primary' /> {Math.round(Math.random() + 100)}</span>

                                        </div>
                                        <p>Price : {course.price < 24 ? <span className='text-green-500 font-bold'>Free</span> : `${course.price} $`}</p>
                                    </div>

                                </div>
                            )
                        }
                    </div>
                </div>
                <div className='w-[85%] mx-auto space-y-3 col-span-12 md:col-span-3 md:mt-12 text-start'>
                    <h2 className='text-3xl font-bold text-start font-roboto'>Category of Courses</h2>
                    {
                        serchItems.map(item =>
                            <li className='list-none text-start border p-4 hover:bg-primary hover:text-white transition-all duration-200 ease-linear cursor-pointer' key={item.id}><CgSidebarRight className='inline text-xl' /> {item.name}</li>
                        )
                    }
                </div>
            </div> : <div className='flex items-center justify-center min-h-[600px]'>
                <div className="radial-progress bg-primary text-primary-content border-4 border-primary" style={{ "--value": 70 }}>70%</div>
            </div>}
        </div>
    );
};

export default Courses;