// components/SigninModal.tsx

import React, { useState } from 'react';
import './modal.css';
import PasswordInput from '../ControlPass/PasswordInput';
import SecondaryButton from '../Button/SecondaryButton';
import { useRouter } from 'next/router';
interface SigninModalProps {
  className?: string;
  toggleSigninup: () => void;
  onForgotPasswordClick: () => void;
}

const SigninModal: React.FC<SigninModalProps> = ({ className, toggleSigninup, onForgotPasswordClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const response = await fetch('/example_data/userdata.json');
      const data = await response.json();

      const user = data.users.find(
        (user: { username: string; password: string }) =>
          user.username === username && user.password === password
      );

      if (user) {
        alert(`Welcome back, ${user.account_name}!`);
        setError(false);
        router.replace("/"); // Chuyển hướng về trang chủ
      } else {
        setError(true);
      }
    } catch (err) {
      console.error('Error fetching user data:', err);
    }
  };

  return (
    <div className={`max-w-2xl w-full bg-white shadow-only-left rounded-xl p-5 ${className}`}>
      <h2 className='text-4xl font-extrabold text-center'>Sign in</h2>
      {error && <p className='mt-3 text-red-600'>The Username or Password isn't correct!</p>}
      <div className='mt-3'>
        <label className='text-base'>Username</label>
        <input 
          className='w-full border border-black rounded focus:outline-color-1 p-1 mt-1' 
          type="text" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className='mt-3'>
        <label className='text-base'>Password</label>
        <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className='mt-3'>
        <label className="custom-checkbox block relative pl-5 cursor-pointer w-fit select-none">Remember me
          <input className='checkbox absolute opacity-0 cursor-pointer h-0 w-0 peer' type="checkbox" />
          <span className="checkmark absolute top-[5px] left-0 h-4 w-4 border border-black rounded-sm"></span>
        </label>
      </div>
      <div className='mt-3'>
        <button className='text-color-2' onClick={onForgotPasswordClick}>Forgot Password?</button>
      </div>
      <SecondaryButton onClick={handleSignIn} type='submit' className='hover:bg-color-1 w-full mt-3'>Sign in</SecondaryButton>
      <p className='mt-3 text-center'>Don't have account? <button className='text-color-2' onClick={toggleSigninup}>Sign up now</button></p>
    </div>
  );
}

export default SigninModal;
