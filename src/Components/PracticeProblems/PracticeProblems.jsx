import { TfiMenuAlt } from 'react-icons/tfi';
import { MdQuiz } from 'react-icons/md';
import { NavLink, useParams } from 'react-router-dom';
import './PracticeProblems.css';
import { useEffect, useState } from 'react';

const PracticeProblems = () => {

    return (
        <div className={`w-[17%] text-center`}>
            <div className={`p-6 m-4 max-w-full rounded-md text-lg font-semibold practiceactive:`}>
                <NavLink to={'/practice'} >
                    <span>Practice Problems</span>
                    <div className='flex items-center justify-center'>
                        <TfiMenuAlt className='text-3xl'></TfiMenuAlt>
                    </div>
                </NavLink>

            </div>
            <div className={`p-6  m-4 max-w-full rounded-md text-lg font-semibold practice-inactive`}>
                <NavLink to={'/practice/quiz'} >
                    <span>Quizzes</span>
                    <div className='flex items-center justify-center'>
                        <MdQuiz className='text-3xl'></MdQuiz>
                    </div>
                </NavLink>

            </div>
        </div>
    );
};

export default PracticeProblems;