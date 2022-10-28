import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate, useParams } from 'react-router-dom';
import auth from '../firebaseinit';
import { useSingleData } from '../utilitis/getData';

const Checkout = () => {
    const { id } = useParams()
    const [course, setCourse] = useState({})
    const {data} = useSingleData(id,course,setCourse)
    const [user] = useAuthState(auth)
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [name, setName] = useState('')
    const navigate = useNavigate()

    const hanldeCheckout = (e) => {
 e.preventDefault()

}

    return (
        <div className='flex items-center flex-col justify-center w-[430px] mx-auto p-10 border rounded-md mt-32'>
        <h2 className='text-3xl font-bold mb-2'>Checkout Here</h2>
        <p className='mb-8'>Please Provide Necessary Data</p>
        <form onSubmit={hanldeCheckout} className=' space-y-3'>
            <input onBlur={(e) => setName(e.target.value)} type="text" placeholder={user?.displayName} className="input min-w-full input-bordered w-full max-w-xs" />
          
            <input onBlur={(e) => setEmail(e.target.value)} type="email" placeholder={user?.email} className="input min-w-full input-bordered w-full max-w-xs" />

            <input onBlur={(e) => setName(e.target.value)} type="text" placeholder={data[0]?.name} className="input min-w-full input-bordered w-full font-bold  max-w-xs" />

            <input onBlur={(e) => setAddress(e.target.value)} type="text" placeholder="Your Address" className="input min-w-full input-bordered w-full max-w-xs" />


            <button className="btn btn-primary w-full">Checkout</button>
        </form>
    </div>
    );
};

export default Checkout;