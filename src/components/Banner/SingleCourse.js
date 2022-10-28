
import React, { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { useNavigate, useParams } from 'react-router-dom';
import { useSingleData } from '../../utilitis/getData';
import { CgSidebarRight } from 'react-icons/cg'
import { TiArrowRightThick } from 'react-icons/ti'
import { FaDownload } from 'react-icons/fa'
import DocumentPdf from './DocumentPdf';

const serchItems = [
    { id: 1, name: "All Courses" },
    { id: 2, name: "Academic Courses" },
    { id: 3, name: "General Courses" },
    { id: 4, name: "English Courses" },
    { id: 5, name: "Language Courses" },
]

const SingleCourse = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const [course, setCourse] = useState({})
    const { data } = useSingleData(id, course, setCourse)


    return (
        <div className='mx-auto w-[95%] md:w-[85%] mt-24 grid grid-cols-12'>
            <div className="text-start col-span-12 md:col-span-9">
                <figure><img src={data[0]?.picture} alt="course_img" /></figure>
                <div className="text-start space-y-5">
                    <h2 className="card-title">{data[0]?.name}</h2>
                    <p className='text-gray-500 pr-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam labore at, enim provident voluptatibus delectus, perferendis blanditiis hic iure laudantium voluptas mollitia maiores ab assumenda, tenetur magni soluta omnis ipsum obcaecati esse illo harum?</p>
                    <p><span className='font-bold'>Instructor</span> : {data[0]?.instructor}</p>
                    <p> <span className='font-bold'>Price</span> : {data[0]?.price} $</p>
                    <div className='flex gap-2'>
                        <button className="btn btn-primary rounded-none">Buy Now</button>
                        <div>
                            <PDFDownloadLink document={<DocumentPdf pdfItem={data[0]?.name} />} fileName={data[0]?.name}>
                                {({ blob, url, loading, error }) =>
                                    loading ? 'Loading document...' : <button className="btn btn-primay rounded-none">Download PDF <FaDownload className='ml-3 ' /></button>
                                }
                            </PDFDownloadLink>
                        </div>
                        <button onClick={()=> navigate(`/checkout/${id}`)} className="btn btn-primary rounded-none "><span>GO For Premium </span><TiArrowRightThick className='inline-block ml-3' /></button>
                    </div>

                </div>
            </div>
            <div className='mx-auto space-y-3 md:col-span-3 mt-12 text-start w-full col-span-12'>
                <h2 className='text-3xl font-bold text-start font-roboto'>Category of Courses</h2>
                {
                    serchItems.map(item =>
                        <li className='list-none text-start border p-4 hover:bg-primary hover:text-white transition-all duration-200 ease-linear cursor-pointer' key={item.id}><CgSidebarRight className='inline text-xl' /> {item.name}</li>
                    )
                }
            </div>
        </div>
    );
};

export default SingleCourse;