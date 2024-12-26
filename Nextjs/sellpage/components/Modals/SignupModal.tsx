import React from 'react'
import './modal.css'
import PasswordInput from '../ControlPass/PasswordInput'
import SecondaryButton from '../Button/SecondaryButton'

interface SignupModalProps{
  className?: string;
  toggleSigninup: () => void;
}

const SignupModal: React.FC<SignupModalProps> = ({ className, toggleSigninup }) => {
  return (
    <div className={`max-w-2xl w-full bg-white shadow-only-left rounded-xl p-5 ${className}`}>
      <h2 className='text-4xl font-extrabold text-center'>Sign up</h2>
      <p className='mt-3 text-red-600 hidden'>The Cofirm Password is not match Password !</p>
      <p className='mt-3 text-red-600 hidden'>This username is already in used !</p>
      <p className='mt-3 text-red-600 hidden'>The birthday is not valid !</p>
      <p className='mt-3 text-red-600 hidden'>Please check your phone number again !</p>
      <p className='mt-3 text-red-600 hidden'>The email is already in used !</p>
      <p className='mt-3 text-red-600 hidden'>The email is not valid; it must contain '@' or '.gmail' !</p>
      <p className='mt-3 text-red-600 hidden'>Can not find email adress !</p>
      <p className='mt-3 text-red-600 hidden'>Your password must be more than 8 characters long and should contain lowercase letters, uppercase letters, numbers, and special characters !</p>
      <p className='mt-3 text-red-600 hidden'>Please check the policies !</p>
      <div className='mt-3'>
        <label className='text-base'>Your account name</label>
        <input className='w-full border border-black rounded focus:outline-color-1 p-1 mt-1' type="text" />
      </div>
      <div className='mt-3 flex items-end gap-x-3'>
        <div className='w-1/2'>
            <label className='text-base'>Birthday</label>
            <input className='w-full border border-black rounded focus:outline-color-1 p-1 mt-1' type="date" />
        </div>
        <div className='w-1/2'>
            <label className='text-base'>Gender</label>
            <select className='w-full min-h-10 border border-black rounded focus:outline-color-1'>
                <option value='male'>Male</option>
                <option value='female'>Female</option>
                <option value='other'>Other</option>
            </select>
        </div>
      </div>
      <div className='mt-3'>
        <label className='text-base'>Email</label>
        <input className='w-full border border-black rounded focus:outline-color-1 p-1 mt-1' type="text" />
      </div>
      <div className='mt-3'>
        <label className='text-base'>Phone number</label>
        <input className='w-full border border-black rounded focus:outline-color-1 p-1 mt-1' type="text" />
      </div>
      <div className='mt-3'>
        <label className='text-base'>Username</label>
        <input className='w-full border border-black rounded focus:outline-color-1 p-1 mt-1' type="text" />
      </div>
      <div className='mt-3'>
        <label className='text-base'>Password</label>
        <PasswordInput />
      </div>
      <div className='mt-3'>
        <label className='text-base'>Confirm Password</label>
        <PasswordInput />
      </div>
      <div className='mt-3'>
        <label className="custom-checkbox block relative pl-5 cursor-pointer w-fit select-none">I agree with the privacy policies!
          <input className='checkbox absolute opacity-0 cursor-pointer h-0 w-0 peer' type="checkbox" />
          <span className="checkmark absolute top-[5px] left-0 h-4 w-4 border border-black rounded-sm"></span>
        </label>
      </div>
      <SecondaryButton type='submit' className='hover:bg-color-1 w-full mt-3'>Sign up</SecondaryButton>
      <p className='mt-3 text-center'>I already have acount ! <button className='text-color-2' onClick={toggleSigninup}>Sign in</button></p>
    </div>
  )
}

export default SignupModal