"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import './login.css'
import SubmitButton from '../button/SubmitButton'
import SignupForm from '../signup/SignupForm'
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [users, setUsers] = useState<any[]>([]);
    const router = useRouter();

    useEffect(() => {
        // Lấy dữ liệu từ file JSON (datalogin.json)
        fetch("/data/datalogin.json")
          .then((response) => response.json())
          .then((data) => setUsers(data.users)) // Giả sử bạn lưu dữ liệu người dùng dưới dạng { users: [...] }
        //   .catch((error) => console.error("Error loading users data:", error));
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // Tìm người dùng từ dữ liệu đã tải
        const user = users.find(
          (user) => user.username === username && user.password === password
        );
        if (user) {
          // Lưu thông tin người dùng vào localStorage
          localStorage.setItem("user", JSON.stringify(user));
          router.replace("/Welcome");
        } else {
          setError("Invalid username or password");
        }
    };

    const handleSignupClick = () => {
        setIsSignup(true); // Set to signup form
    };
    
    return (
        <div className='h-full relative'>
            <Image className='w-full max-h-[100vh]' src='/image/login-banner.jpg' width={500} height={500} alt='' />
            {isSignup ? (
                <SignupForm setIsSignup={setIsSignup} /> // Hiển thị form đăng ký
            ) : (
                <div className='absolute top-0 bottom-0 left-0 right-0 m-auto bg-gradient-to-br from-darkcyan text-lightblue p-6 rounded h-fit max-w-[550px]'>
                <h2 className='text-center uppercase text-5xl my-4'>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className='my-3 block'>
                        <label className='text-base' htmlFor='username'>Username</label>
                        <input 
                        value={username} onChange={(e) => setUsername(e.target.value)}
                        className='w-full px-2 pb-1 my-1 bg-transparent border-b border-lightblue focus:outline-none' type='text' name='username' 
                        />
                    </div>
                    <div className='my-3 block'>
                        <label className='text-base' htmlFor='password'>Password</label>
                        <input value={password} onChange={(e) => setPassword(e.target.value)}
                        className='w-full px-2 pb-1 my-1 bg-transparent border-b border-lightblue focus:outline-none' type='password' name='password' />
                    </div>
                    <div className='my-3'>
                        <label className="customcheckbox text-base">Remember me
                            <input type="checkbox" className="checked" />
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <SubmitButton label="Login" />
                    {error && <p>{error}</p>}
                    <div className='my-3 block'>
                        <button className='text-base inline-block'>Forgot password?</button>
                        <button onClick={handleSignupClick} className='text-base inline-block float-right'>Don't have account? Sign up now!</button>
                    </div>
                </form>
                </div>
            )}
        </div>
    )
}

export default LoginForm
