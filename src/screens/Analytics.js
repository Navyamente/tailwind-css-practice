import React from "react";

const Analytics = () => {
    return (
        <div className="bg-gray-200 flex flex-wrap w-auto h-full items-center justify-center my-4 mx-8">
            <div className="container flex flex-col items-center justify-center px-8 py-6 ">
                <div className="bg-white w-full items-start justify-center">
                    <div className="mt-1 ml-4 flex flex-col text-sm">
                        <div className="mt-6 space-x-2 text-sm relative">
                            <svg xmlns="http://www.w3.org/2000/svg" className="pl-3.5 w-4 h-2" viewBox="0 0 500 500" stroke-width="1.5"
                                style={{
                                    fill: "none",
                                    stroke: "currentColor",
                                }} >
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>


                            <h6 className="text-sm font-semibold px-8 -m-6">Profit Earned</h6>
                            <span className="flex flex-row items-center py-8 px-8absolute -bottom-10 text-xs"><span
                                className="font-bold text-violet-700 ml-8 mr-1 text-lg">2,330</span> from 2,125 </span>

                        </div>
                        <div className="mt-1 flex text-sm -space-x-3">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 500 500" stroke-width="1.5" stroke="green"
                                className="w-14 h-6 pl-10 -mt-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                            </svg>
                            <p className="flex text-green-600 text-xs mb-3 pl-3 -mt-5">7.2%Increase</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col items-center justify-center px-8 py-6 -mt-8">
                <div className="bg-white w-full items-start justify-center">
                    <div className="mt-1 ml-4 flex flex-col  text-sm">
                        <div className="mt-6 space-x-2 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 500 500" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <h1 className="text-sm font-semibold px-8 -m-6">Average Click Rate</h1>
                            <span className="flex flex-row items-center py-8 px-8absolute -bottom-10 text-xs"><span
                                className="font-bold ml-8 text-violet-700 mr-1 text-lg">22.3%</span> from 21.2% </span>
                        </div>
                        <div className="mt-1 flex text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 500 500" stroke-width="1.5" stroke="green"
                                className="w-14 h-6 pl-10 -mt-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                            </svg>
                            <p className="flex text-green-600 text-xs mb-3 pl -mt-5">7.2%Increase</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col items-center justify-center px-8 py-6 -mt-5">
                <div className="bg-white w-full items-start justify-center">
                    <div className="mt-1 ml-4 flex flex-col  text-sm">
                        <div className="mt-6 space-x-2 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 500 500" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" ></path>
                            </svg>

                            <h1 className="text-sm font-semibold px-8 -m-6">Total Sales</h1>
                            <span className="flex flex-row items-center py-8 px-8absolute -bottom-10 text-xs"><span
                                className="font-bold ml-8 text-violet-700 mr-1 text-lg">2,330</span> from 2,850 </span>
                        </div>
                        <div className="mt-1 flex text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 500 500" stroke-width="1.5" stroke="red"
                                className="w-14 h-6 pl-10 -mt-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                            </svg>

                            <p className="flex text-red-500 mb-3 pl text-xs -mt-5">3.5%Decrease</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container flex flex-col items-center justify-center px-8 py-6 -mt-5">
                <div className="bg-white w-full items-start justify-center">
                    <div className="mt-1 ml-4 flex flex-col  text-sm">
                        <div className="mt-6 space-x-2 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 500 500" stroke-width="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>

                            <h1 className="text-sm font-semibold px-8 -m-6">Profit Earned</h1>
                            <span className="flex flex-row items-center py-8 px-8absolute -bottom-10 text-xs"><span
                                className="font-bold ml-8 text-violet-700 mr-1 text-lg">$1200</span> from $800</span>
                        </div>
                        <div className="mt-1 flex text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 500 500" stroke-width="1.5" stroke="green"
                                className="w-14 h-6 pl-10 -mt-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                            </svg>

                            <p className="flex text-green-500 mb-3 pl text-xs -mt-5">7.2% Increase</p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
export default Analytics;
