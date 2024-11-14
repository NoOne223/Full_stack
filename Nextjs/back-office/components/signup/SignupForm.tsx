"use client";
import React from 'react'
import SubmitButton from '../button/SubmitButton'
import CancelButton from '../button/CancelButton'

interface SignupFormProps {
    setIsSignup: React.Dispatch<React.SetStateAction<boolean>>; // Định nghĩa kiểu cho prop này
}

const SignupForm:React.FC<SignupFormProps> = ({setIsSignup}) => {
    const handleLoginClick = () => {
        setIsSignup(false); // Set to login form
    };
    return (
        <div>
            <div className='absolute top-0 bottom-0 left-0 right-0 m-auto bg-gradient-to-br from-darkcyan text-lightblue p-6 rounded h-fit max-w-[550px]'>
                <h2 className='text-center uppercase text-5xl my-4'>Sign up</h2>
                <form>
                    <div className='my-3 block'>
                        <label className='text-base' htmlFor='username'>Name</label>
                        <input className='w-full px-2 pb-1 my-1 bg-transparent border-b border-lightblue focus:outline-none' type='text' name='username' />
                    </div>
                    <div className='my-3 block'>
                        <label className='text-base' htmlFor='username'>Username</label>
                        <input className='w-full px-2 pb-1 my-1 bg-transparent border-b border-lightblue focus:outline-none' type='text' name='username' placeholder='You can use your email or phone number'/>
                    </div>
                    <div className='my-3 block'>
                        <label className='text-base' htmlFor='email'>Email</label>
                        <input className='w-full px-2 pb-1 my-1 bg-transparent border-b border-lightblue focus:outline-none' type='text' name='email' />
                    </div>
                    <div className='my-3 block'>
                        <label className='text-base' htmlFor='phone'>Phone number</label>
                        <input className='w-full px-2 pb-1 my-1 bg-transparent border-b border-lightblue focus:outline-none' type='text' name='phone' />
                    </div>
                    <div className='my-3 block'>
                        <label className='text-base' htmlFor='password'>Password</label>
                        <input className='w-full px-2 pb-1 my-1 bg-transparent border-b border-lightblue focus:outline-none' type='password' name='password' />
                    </div>
                    <div className='my-3 block'>
                        <label className='text-base' htmlFor='password'>Repeat password</label>
                        <input className='w-full px-2 pb-1 my-1 bg-transparent border-b border-lightblue focus:outline-none' type='password' name='password' />
                    </div>
                    <div className='flex justify-center gap-x-3'>
                        <CancelButton onClick={handleLoginClick} label='Cancel' />
                        <SubmitButton label="Sign up" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupForm
function setIsSignup(arg0: boolean) {
    throw new Error('Function not implemented.');
}

