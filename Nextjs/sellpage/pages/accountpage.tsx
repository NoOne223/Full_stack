import React, { useState } from 'react';
import Head from 'next/head';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import SigninModal from '@/components/Modals/SigninModal';
import SignupModal from '@/components/Modals/SignupModal';
import MediaSigninModal from '@/components/Modals/MediaSigninModal';
import ForgotpassModal from '@/components/Modals/ForgotpassModal';
import ChangepassModal from '@/components/Modals/ChangepassModal';
import RequestCodeModal from '@/components/Modals/RequestCodeModal';
import '../app/globals.css'

export default function AccountPage() {
  const [isSignIn, setIsSignIn] = useState(true); // Quản lý trạng thái modal hiện tại
  const [isForgotPassword, setIsForgotPassword] = useState(false); // Điều khiển việc hiển thị RequestCodeModal

  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  // Hàm để hiển thị RequestCodeModal khi click vào "Forgot Password"
  const handleForgotPasswordClick = () => {
    setIsForgotPassword(true); // Hiển thị RequestCodeModal và ẩn phần khác
  };

  const closeModal = () => setIsForgotPassword(false);

  return (
    <>
      <Head>
        <title>Sign in account</title>
        <meta name="description" content="This is sign in page" />
      </Head>
      <div className="relative min-h-screen">
        <div className="mt-3 ml-5">
          <Link className="hover:text-color-2" href="/">
            <FontAwesomeIcon className="rotate-180 me-2" icon={faRightFromBracket} />
            <span>Back to homepage</span>
          </Link>
        </div>
        <div className="absolute top-1/2 w-full left-1/2 -translate-x-1/2 -translate-y-1/2">
          {/* Ẩn toàn bộ phần này nếu là Forgot Password */}
          {!isForgotPassword && (
            <div className="flex justify-center gap-x-10">
              <AnimatePresence mode="wait">
                {isSignIn ? (
                  <motion.div
                    key="signin"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  >
                    <SigninModal toggleSigninup={() => setIsSignIn(false)} onForgotPasswordClick={handleForgotPasswordClick} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="signup"
                    variants={modalVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                  >
                    <SignupModal toggleSigninup={() => setIsSignIn(true)} />
                  </motion.div>
                )}
              </AnimatePresence>
              <MediaSigninModal />
            </div>
          )}
          {/* Hiển thị RequestCodeModal khi Forgot Password được chọn */}
          {isForgotPassword && (
            <motion.div
              key="requestcode"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <RequestCodeModal onClose={closeModal}/>
            </motion.div>
          )}
          <ForgotpassModal className='hidden' />
          <ChangepassModal className='hidden' />
        </div>
      </div>
    </>
  );
}
