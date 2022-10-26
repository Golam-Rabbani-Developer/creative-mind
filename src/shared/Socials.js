import React from 'react';
import { FcGoogle } from "react-icons/fc"
import { BsGithub } from 'react-icons/bs'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../firebaseinit';
const Socials = () => {
    const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
    const [signInWithGithub, gituser, gitloading, giterror] = useSignInWithGithub(auth);

    if (googleloading || gitloading) {
        return <p>Loading ...</p>
    }

    if (gituser || googleuser) {
        console.log(gituser || googleuser)
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