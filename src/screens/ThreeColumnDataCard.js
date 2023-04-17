import React from 'react';
import profile from '../assets/images/avatar-richard.png'

import layer from '../assets/images/layer-regular-24.png'

const ThreeColumnDataCard = () => {
    return (
        <div className="h-full w-full flex-col justify-center bg-gray-200 space-y-1 p-6">
            <div className="w-full bg-gray-200 dark:bg-gray-100 py-10">
                <div className="container mx-auto px-6 flex items-start justify-center">
                    <div className="flex flex-col md:flex-row mx-auto bg-white dark:bg-gray-300">
                        <div className="w-full lg:w-1/3 px-12 flex flex-col items-center py-10">
                            <img className="flex h-16 w-16 rounded-full border border-gray-100 bg-gray-200 p-1 text-center"
                                src={profile} alt="Profile" />
                            <h1 className="mt-4 flex text-lg font-semibold">Abhilash Mandula</h1>
                            <div className="mt-1 flex text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    style={{
                                        fill: "rgba(0, 0, 0, 1)",
                                        transform: "",
                                        msFilter: "",
                                    }}
                                >
                                    <path
                                        d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.029-5.56 8-12 0-4.411-3.589-8-8-8zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z">
                                    </path>
                                </svg>
                                <p className="ml-2">Bangalore</p>
                            </div>
                            <p className="mt-4 flex text-center text-xs">The more I deal with the work as something that is my own, as
                                something
                                that is personal, the more succesfull it is.</p>
                            <div className="mt-8 flex space-x-8 font-medium">
                                <div className="flex w-full flex-col items-center">
                                    <p>82</p>
                                    <p>Reviews</p>
                                </div>
                                <div className="w-2 bg-gray-300"></div>
                                <div className="flex flex-col items-center">
                                    <p>28</p>
                                    <p>Projects</p>
                                </div>
                                <div className="w-2 bg-gray-300"></div>
                                <div className="flex flex-col items-center">
                                    <p>42</p>
                                    <p>Approved</p>
                                </div>
                            </div>
                        </div>


                        <div className="mx-auto flex w-full  md:w-1/3 flex-col justify-center items-center bg-white pt-4">
                            <img className="flex h-16 w-16 rounded-full border border-gray-100 bg-gray-200 p-1 text-center"
                                src={layer} alt="" />
                            <h1 className="mt-4 text-lg font-bold">Senior Product Designer</h1>
                            <div className="mt-1 flex justify-center text-sm">
                                <p className="ml-8">Freelance</p>
                            </div>
                            <p className="mt-1 flex text-center text-xs">John is a true asset to us, providing advanced designing skills
                                from
                                years of
                                experience as UX designer.
                            </p>
                            <div className="mt-8 flex flex-row space-x-8 font-medium">
                                <div className="flex w-full flex-row justify-center items-center gap-x-4">
                                    <p className="bg-gray-200 text-center w-24 h-8 rounded-sm"> Interface </p>
                                    <p className="bg-gray-200 text-center w-24 h-8 rounded-sm">Interface</p>
                                    <p className="bg-gray-200 text-center w-24 h-8 rounded-sm">Interface</p>
                                </div>
                            </div>
                            <div className="mt-2 flex space-x-2 font-medium pb-8">
                                <div className="flex w-full flex-row items-center gap-x-4">
                                    <p className="bg-gray-200 text-center w-24 h-8 rounded-sm"> Interface </p>
                                    <p className="bg-gray-200 text-center w-24 h-8 rounded-sm">Interface</p>
                                    <p className="bg-gray-200 text-center w-24 h-8 rounded-sm">Interface</p>
                                </div>
                            </div>
                        </div>


                        <div className="mx-auto flex w-full  md:w-1/3 flex-col justify-center items-center bg-white p-6">
                            <h1 className="mt-8 text-lg font-bold">$90</h1>
                            <div className="mt-1 flex justify-center text-sm">
                                <p>Hourly Rate</p>
                            </div>
                            <h1 className="mt-4 text-lg font-bold">$32,000</h1>
                            <div className="mt-1 flex justify-center text-sm">
                                <p>Total Earned</p>
                            </div>
                            <h1 className="mt-4 text-lg font-bold">95%</h1>
                            <div className="mt-1 flex justify-center text-sm">
                                <p>Success Rate</p>
                            </div>
                            <div className="mt-4 flex text-sm ">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    style={{
                                        fill: "hwb(56, 27%, 3%)",
                                        msFilter: "",
                                    }}
                                >
                                    <path
                                        d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                    </path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    style={{
                                        fill: "hwb(56, 27%, 3%)",
                                        msFilter: "",
                                    }}
                                >
                                    <path
                                        d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                    </path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    style={{
                                        fill: "hwb(56, 27%, 3%)",
                                        msFilter: "",
                                    }}
                                >
                                    <path
                                        d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                    </path>
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    style={{
                                        fill: "hwb(56, 27%, 3%)",
                                        msFilter: "",
                                    }}
                                >
                                    <path
                                        d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z">
                                    </path>
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                    style={{
                                        fill: "rgb(228, 228, 226)",
                                        transform: "",
                                        msFilter: "",
                                    }}
                                >
                                    <path
                                        d="m6.516 14.323-1.49 6.452a.998.998 0 0 0 1.529 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082a1 1 0 0 0-.59-1.74l-5.701-.454-2.467-5.461a.998.998 0 0 0-1.822 0L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.214 4.107zm2.853-4.326a.998.998 0 0 0 .832-.586L12 5.43l1.799 3.981a.998.998 0 0 0 .832.586l3.972.315-3.271 2.944c-.284.256-.397.65-.293 1.018l1.253 4.385-3.736-2.491a.995.995 0 0 0-1.109 0l-3.904 2.603 1.05-4.546a1 1 0 0 0-.276-.94l-3.038-2.962 4.09-.326z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ThreeColumnDataCard;