'use client'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null); // Chỉ định kiểu dữ liệu cho state

    // Hàm toggleAnswer với kiểu dữ liệu của index
    const toggleAnswer = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const questions = [
        'Question 1 ?',
        'Question 2 ?',
        'Question 3 ?',
        'Question 4 ?',
        'Question 5 ?',
    ];

    const answers = [
        'This is the answer for Question 1',
        'This is the answer for Question 2',
        'This is the answer for Question 3',
        'This is the answer for Question 4',
        'This is the answer for Question 5',
    ];

    return (
        <div className='w-1/2'>
            {questions.map((question, index) => (
                <div key={index} className="border-b border-gray-500 pb-3 mb-3">
                    <button
                        className="w-full flex items-center justify-between"
                        onClick={() => toggleAnswer(index)} // Đảm bảo index là kiểu số
                    >
                        <p>{question}</p>
                        <FontAwesomeIcon icon={openIndex === index ? faAngleUp : faAngleDown} />
                    </button>
                    <div className={openIndex === index ? 'block mt-2' : 'hidden'}>
                        <p>{answers[index]}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;