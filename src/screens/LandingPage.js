import React from 'react';

import bgprofile from '../assets/images/nandi-hills.jpg'

import id from '../assets/images/mainpage.jpeg'

const LandingPage = () => {
    return (
        <div className="flex felx-col">
            <div className="mx-auto flex w-1/3 bg-gray-400 h-auto items-center mt-6">
                <div className="flex flex-col mx-auto w-auto bg-gray-100 shadow rounded-sm mt-8 mb-8 mr-8 ml-8">
                    <div className="w-auto px-6 pt-6">
                        <div className="bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        </div>
                        <div className="container flex-row bg-white mb-20 pb-8">
                            <div className="w-full  px-12 flex flex-col items-center py-10">
                                <img class="flex h-40 bg-gray-200 p-1 text-center bg-cover bg-center -mt-10" src={bgprofile} alt="nandihills" />
                                <img class="flex h-20 w-20  border-gray-100 bg-gray-200 p-1 text-center -mt-10" src={id} alt="man" />
                            </div>
                            <div className="flex items-center justify-center -mt-6 mr-1">
                                <svg className="cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                                    xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor"
                                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                                <svg className="cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                                    xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor"
                                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                                <svg className="cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                                    xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor"
                                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                                <svg className="cursor-pointer w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star"
                                    xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor"
                                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                                <svg className="cursor-pointer w-4 text-gray-200 dark:text-gray-400 icon icon-tabler icon-tabler-star"
                                    xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24"
                                    strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor"
                                        d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                            </div>
                            <h2 class="text-gray-800 dark:text-gray-100 text-lg tracking-normal text-center font-semibold mb-1 mt-2">Marshall Mathers</h2>
                            <div className='mx-auto rounded-xl w-16 h-6 text-white flex items-baseline justify-center bg-blue-800 mt-3'>
                                <button className="btn items-center justify-center text-sm">Pro</button>
                            </div>


                            <p
                                class="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center pl-4 w-11/12 pt-3">
                                Hi,I am a direct response copywriter from the US,when you work with me,we have the same goal.Maximizing your ROI.</p>
                            <div className="flex items-center pl-20">
                                <div className>
                                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl  mb-2 text-center">82</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm ">Reviews</p>
                                </div>
                                <div className="mx-6 ">
                                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">28</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Projects</p>
                                </div>
                                <div className>
                                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">42</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Approved</p>
                                </div>
                            </div>
                            <div className='flex space-x mt-4'>
                                <div className='mx-auto rounded-2xl w-24 h-8 bg-gray-200 flex items-center justify-center mt-2 ml-20'>
                                    <button className="btn items-center justify-center text-sm">Remote</button>
                                </div>
                                <div className='mx-auto rounded-2xl w-24 h-8 text-green-700 bg-green-200 flex items-center justify-center mt-2 -ml-20'>
                                    <button className="btn items-center justify-center text-sm">Available</button>
                                </div>
                            </div>

                            <div className='mx-auto rounded-sm w-96 h-8 flex items-center text-white justify-center bg-blue-800 mt-6'>
                                <button className="btn items-center justify-center text-sm">Message</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div >

    )
}
export default LandingPage;