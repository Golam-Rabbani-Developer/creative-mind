import React from 'react';
import { FcGoogle } from "react-icons/fc"
import { BsGithub } from 'react-icons/bs'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebaseinit';
import { useLocation, useNavigate } from 'react-router-dom';
import Loading from './Loading';
const Socials = () => {
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);

    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const navigate = useNavigate()

    if (googleloading || gitloading) {
        return <Loading type="spokes" color="black"></Loading>
    }

    if (gituser || googleuser) {
        navigate(from, { replace: true })
    }

    return (
        <div>
            <p className='text-red-500 font-bold mt-4'>{googleerror || giterror ? giterror?.message || googleerror?.message : ""}</p>
            <div className="divider">OR</div>
            <div className='flex items-center justify-center gap-4'>
                <span onClick={() => signInWithGoogle()} className='border border-gray-300 cursor-pointer p-3 text-xl hover:border-slate-900 transition-all duration-300 delay-150 ease-in-out'><FcGoogle /></span>
                <span onClick={() => signInWithGithub()} className='border border-gray-300 cursor-pointer p-3 text-xl hover:border-slate-900 transition-all duration-300 delay-150 ease-in-out'><BsGithub /></span>
            </div>
        </div>
    );
};

export default Socials;