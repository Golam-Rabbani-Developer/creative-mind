import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebaseinit';
import Loading from './Loading';


const Header = () => {
    const [user, loading] = useAuthState(auth)
    if (loading) {
        return <Loading type="spokes" color="black"></Loading>
    }
    console.log(user?.displayName)
    const links = <>
        <li><Link className='text-xl ' to='/'>Courses</Link></li>
        <li><Link className='text-xl ' to='/'>FAQ</Link></li>
        <li><Link className='text-xl ' to='/'>Blogs</Link></li>
    </>
    return (
        <div className='w-[95%] mx-auto md:w-[85%] absolute top-0 md:left-24 z-40 bg-none text-white'>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost normal-case text-xl">
                        <img className='h-[60px]' src="https://iili.io/DrGSEB.png" alt="logo" />
                        <span className='hidden lg:block pl-4'>Creative <br /> Mind</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user
                            ?
                            <div className="avatar online tooltip_image cursor-pointer">
                                <div className={`w-[50px] rounded-full `}>
                                    <img src="https://placeimg.com/192/192/people" alt='user-pic' />

                                </div>
                                <span className='font-bold absolute right-16 tooltip'>{user?.displayName}</span>
                            </div>
                            :
                            <Link to='/login' className="btn">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;