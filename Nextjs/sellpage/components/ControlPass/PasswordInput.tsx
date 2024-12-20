'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

// Import FontAwesomeIcon chỉ ở phía client
const FontAwesomeIcon = dynamic(() => import('@fortawesome/react-fontawesome').then(mod => mod.FontAwesomeIcon), { ssr: false });
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordInput = () => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowpassword = () => {
        setShowPassword((prevState) => !prevState);
    };

    return (
        <div className="relative">
            <input
                className="w-full py-1 px-2 border border-black rounded focus:outline-color-1"
                type={showPassword ? 'text' : 'password'}
            />
            <button className="absolute top-0 bottom-0 right-2" onClick={toggleShowpassword} type="button">
                <FontAwesomeIcon
                    title={showPassword ? 'Hide password' : 'See password'}
                    className="text-color-2 opacity-50 hover:opacity-100"
                    icon={showPassword ? faEyeSlash : faEye}
                />
            </button>
        </div>
    );
};

export default PasswordInput;
