import React from "react";


const CompanyDetails = () => {
    return (
        <div className="flex flex-col h-full w-full justify-center bg-gray-100 space-y-1 p-6">

            <div className="container flex flex-col space-x-16 overflow-x-auto">
                <div className="flex flex-col md:flex-col  px-4 py-6 mx-auto bg-white ">
                    <div className=" flex flex-col place-items-center justify-between w-auto">
                        <div className="flex space-x-8 h-20 lg:w-screen scroll -mt-6 pt-4 -ml-4 -mr-4 bg-gray-50">
                            <h1 className="text-lg font-bold mr-10 ml-4 ">COMPANY</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                            </svg>

                            <h1 className="text-lg font-bold ">CATEGORY</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                            </svg>

                            <h1 className="text-lg font-bold  ">VIEW</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                            </svg>

                            <h1 className="text-lg font-bold ">REVENUE</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                            </svg>

                            <h1 className="text-lg font-bold ">SALES</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9" />
                            </svg>
                        </div>
                    </div>

                    <div className="w-screen h-auto bg-white mt-6 p-4">
                        <div className=" flex items-start justify-between ">
                            <div className="-ml-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" stroke-linejoin="round" stroke="black"
                                    style={{
                                        fill: "red",
                                        transform: "",
                                        msFilter: "",
                                    }}><path d="M5 22h14a2 2 0 0 0 2-2V9a1 1 0 0 0-1-1h-3v-.777c0-2.609-1.903-4.945-4.5-5.198A5.005 5.005 0 0 0 7 7v1H4a1 1 0 0 0-1 1v11a2 2 0 0 0 2 2zm12-12v2h-2v-2h2zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v1H9V7zm-2 3h2v2H7v-2z"></path></svg>
                            </div>

                            <div class="flex flex-col">
                                <div className="">
                                    <h1 className="font-bold text-md -mt-2">Dixons</h1>
                                    <p className="text-gray-400">meguc@ruj.io</p>
                                </div>
                            </div>

                            <div className="flex ml-24">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{
                                        fill: "blue",
                                        transform: "",
                                        msFilter: "",
                                    }}><path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z"></path></svg>
                            </div>
                            <div className="ml-3">
                                <h1 className="font-normal text-gray-500 text-md -mt-1">Technology</h1>
                            </div>
                            <div className="ml-14">
                                <h1 className="font-bold text-md -mt-2">23.4k</h1>
                                <p className="text-gray-400">in24hours</p>
                            </div>
                            <div className="ml-14">
                                <p>$891.2</p>
                            </div>
                            <div className="flex flex-row">
                                <div class="flex justify-between">
                                    <p className="">68%</p>
                                </div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        style={{
                                            fill: "rgba(250, 57, 35, 1)",
                                            transform: "",
                                            msFilter: "",
                                        }}>
                                        <path d="m14 9.586-4 4-6.293-6.293-1.414 1.414L10 16.414l4-4 4.293 4.293L16 19h6v-6l-2.293 2.293z"></path>
                                    </svg>
                                </div>

                            </div>
                        </div>
                    </div>
                    <hr></hr>


                    <div className="w-screen h-auto bg-white mt-6 p-4">
                        <div className=" flex items-start justify-between ">
                            <div className="-ml-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{
                                        fill: "blue",
                                        transform: "",
                                        msFilter: "",
                                    }}>
                                    <path d="M20.892 9.889a.664.664 0 0 0-.025-.087l-2.104-6.479a.84.84 0 0 0-.8-.57.822.822 0 0 0-.789.575l-2.006 6.175H8.834L6.826 3.327a.823.823 0 0 0-.786-.575h-.006a.837.837 0 0 0-.795.575L3.133 9.815c0 .005-.005.01-.007.016l-1.067 3.281a1.195 1.195 0 0 0 .435 1.34l9.227 6.706c.167.121.393.12.558-.003l9.229-6.703a1.2 1.2 0 0 0 .435-1.34l-1.051-3.223zM17.97 3.936l1.809 5.566H16.16l1.81-5.566zm-11.94 0 1.812 5.566H4.228L6.03 3.936zm-2.982 9.752a.253.253 0 0 1-.093-.284l.793-2.437 5.817 7.456-6.517-4.735zm1.499-3.239h3.601l2.573 7.916-6.174-7.916zm7.452 8.794-2.856-8.798h5.718l-1.792 5.515-1.07 3.283zm1.282-.877 2.467-7.588.106-.329h3.604l-5.586 7.156-.591.761zm7.671-4.678-6.519 4.733.022-.029 5.794-7.425.792 2.436a.25.25 0 0 1-.089.285z"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col ">
                                <div className="-ml-1">
                                    <h1 className="font-bold text-md -mt-2">Motels</h1>
                                    <h2 className="text-gray-400">meguc@ruj.io</h2>
                                </div>
                            </div>

                            <div className="flex ml-20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{
                                        fill: "rgba(10, 84, 14, 1)",
                                        transform: "",
                                        msFilter: "",
                                    }}>
                                    <path d="M9.37 17.51c-3.09.86 1.87 2.64 5.8 1a7.18 7.18 0 0 1-1.1-.54 11.59 11.59 0 0 1-4.16.18c-1.31-.15-.54-.64-.54-.64zm5.33-1.68a16.27 16.27 0 0 1-5.36.26c-1.31-.14-.45-.77-.45-.77-3.4 1.12 1.89 2.4 6.64 1a2.25 2.25 0 0 1-.83-.49zm1.82-9.73s-6.87 1.71-3.59 5.49a1.47 1.47 0 0 1-.25 2.12s2.46-1.27 1.33-2.86-1.86-2.22 2.51-4.75z"></path><path d="M18.13 19.14s.56.46-.63.82c-2.27.69-9.43.9-11.42 0-.72-.31.62-.74 1-.83a2.54 2.54 0 0 1 .69-.08c-.8-.56-5.15 1.1-2.21 1.58 8.05 1.37 14.64-.56 12.57-1.49zm-2.76-4.88a7 7 0 0 1 .92-.49s-1.51.27-3 .4a28.11 28.11 0 0 1-4.82.05C6.09 13.91 9.74 13 9.74 13a6.81 6.81 0 0 0-3.16.75c-2.06 1.03 5.09 1.48 8.79.51zm.91 2.44a.39.39 0 0 1-.08.09c5-1.32 3.18-4.65.78-3.81a.71.71 0 0 0-.33.25s.14-.05.43-.12c1.22-.25 2.92 1.63-.8 3.59zM12 13c-.74-1.67-3.26-3.14 0-5.71C16.09 4.08 14 2 14 2c.84 3.31-3 4.31-4.34 6.37-.93 1.41.47 2.92 2.34 4.63z"></path><path d="M16.41 21.32a29.75 29.75 0 0 1-9.14.14s.46.38 2.84.53c3.61.23 9.15-.12 9.29-1.83 0 0-.26.64-2.99 1.16z"></path>
                                </svg>
                            </div>
                            <div className="ml-2">
                                <h1 className="font-normal text-gray-500 text-md -mt-1">Grocery</h1>
                            </div>
                            <div className="ml-14">
                                <h1 className="font-bold text-md -mt-2">78k</h1>
                                <p className="text-gray-400">in24hours</p>
                            </div>
                            <div className="ml-14">
                                <p>$668</p>
                            </div>
                            <div className="flex flex-row">
                                <p>97%</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                </svg>

                            </div>
                        </div>
                    </div>
                    <hr></hr>
                    <div className="w-screen h-auto bg-white mt-6 p-4">
                        <div className=" flex items-start justify-between ">
                            <div className="-ml-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{
                                        fill: "rgba(238, 15, 15, 1)",
                                        transform: "rotate(180deg)",
                                        msFilter: "",
                                        progid: "",
                                    }}>
                                    <path d="M18 8.001h-2V8h-1V4.999a2.92 2.92 0 0 0-.874-2.108 2.943 2.943 0 0 0-2.39-.879C10.202 2.144 9 3.508 9 5.117V8H6c-1.103 0-2 .897-2 2v11a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V10.001c0-1.103-.897-2-2-2zM6 12v-2h5V5.117c0-.57.407-1.07 1.002-1.117.266 0 .512.103.712.307a.956.956 0 0 1 .286.692V10h.995l.005.001h4V12H6z"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col ">
                                <div className="-ml-1">
                                    <h1 className="font-bold text-md -mt-2">Zipkar</h1>
                                    <h2 className="text-gray-400">meguc@ruj.io</h2>
                                </div>
                            </div>

                            <div className="flex ml-20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{
                                        fill: "rgba(133, 26, 157, 1)",
                                        transform: "",
                                        msFilter: "",
                                    }}>
                                    <path d="M13 8h-2v5h5v-2h-3z"></path><path d="M19.999 12c0-2.953-1.612-5.53-3.999-6.916V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2.083C5.613 6.469 4.001 9.047 4.001 12a8.003 8.003 0 0 0 4.136 7H8v2.041a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V19h-.139a8 8 0 0 0 4.138-7zm-8 5.999A6.005 6.005 0 0 1 6.001 12a6.005 6.005 0 0 1 5.998-5.999c3.31 0 6 2.691 6 5.999a6.005 6.005 0 0 1-6 5.999z"></path>
                                </svg>
                            </div>
                            <div className="ml-2">
                                <h1 className="font-normal text-gray-500 text-md -mt-1">Fashion</h1>
                            </div>
                            <div className="ml-14">
                                <h1 className="font-bold text-md -mt-2">162</h1>
                                <p className="text-gray-400">in24hours</p>
                            </div>
                            <div className="ml-14">
                                <p>$522.2</p>
                            </div>
                            <div className="flex flex-row">
                                <p>98%</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{
                                        fill: "rgba(250, 57, 35, 1)",
                                        transform: "",
                                        msFilter: "",
                                    }}>
                                    <path d="m14 9.586-4 4-6.293-6.293-1.414 1.414L10 16.414l4-4 4.293 4.293L16 19h6v-6l-2.293 2.293z"></path>
                                </svg>

                            </div>
                        </div>
                    </div>
                    <hr>
                    </hr>

                    <div className="w-screen h-auto bg-white mt-6 p-4">
                        <div className=" flex items-start justify-between ">
                            <div className="-ml-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{
                                        fill: "rgba(236, 216, 56, 1)",
                                        transform: "",
                                        msFilter: "",
                                    }}>
                                    <path d="M21.947 9.179a1.001 1.001 0 0 0-.868-.676l-5.701-.453-2.467-5.461a.998.998 0 0 0-1.822-.001L8.622 8.05l-5.701.453a1 1 0 0 0-.619 1.713l4.213 4.107-1.49 6.452a1 1 0 0 0 1.53 1.057L12 18.202l5.445 3.63a1.001 1.001 0 0 0 1.517-1.106l-1.829-6.4 4.536-4.082c.297-.268.406-.686.278-1.065z"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col ">
                                <div className="-ml-1">
                                    <h1 className="font-bold text-md -mt-2">Owing</h1>
                                    <h2 className="text-gray-400">meguc@ruj.io</h2>
                                </div>
                            </div>

                            <div className="flex ml-24">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{
                                        fill: "blue",
                                        transform: "",
                                        msFilter: "",
                                    }}><path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z"></path></svg>
                            </div>
                            <div className="ml-3">
                                <h1 className="font-normal text-gray-500 text-md -mt-1">Technology</h1>
                            </div>
                            <div className="ml-14">
                                <h1 className="font-bold text-md -mt-2">214</h1>
                                <p className="text-gray-400">in24hours</p>
                            </div>
                            <div className="ml-14">
                                <p>$81.2</p>
                            </div>
                            <div className="flex flex-row">
                                <p>68%</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{
                                        fill: "rgba(250, 57, 35, 1)",
                                        transform: "",
                                        msFilter: "",
                                    }}>
                                    <path d="m14 9.586-4 4-6.293-6.293-1.414 1.414L10 16.414l4-4 4.293 4.293L16 19h6v-6l-2.293 2.293z"></path>
                                </svg>

                            </div>
                        </div>
                    </div>
                    <hr></hr>

                    <div className="w-screen h-auto bg-white mt-6 p-4">
                        <div className=" flex items-start justify-between ">
                            <div className="-ml-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{
                                        fill: "rgba(73, 73, 58, 1)",
                                        transform: "rotate(90deg)",
                                    }}>
                                    <path d="M20 4H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zM4 6h16v2H4V6zm0 12v-6h16.001l.001 6H4z"></path><path d="M6 14h6v2H6z"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col ">
                                <div className="-ml-1">
                                    <h1 className="font-bold text-md -mt-2">Motels</h1>
                                    <h2 className="text-gray-400">meguc@ruj.io</h2>
                                </div>
                            </div>

                            <div className="flex ml-20">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{
                                        fill: "rgba(10, 84, 14, 1)",
                                        transform: "",
                                        msFilter: "",
                                    }}>
                                    <path d="M9.37 17.51c-3.09.86 1.87 2.64 5.8 1a7.18 7.18 0 0 1-1.1-.54 11.59 11.59 0 0 1-4.16.18c-1.31-.15-.54-.64-.54-.64zm5.33-1.68a16.27 16.27 0 0 1-5.36.26c-1.31-.14-.45-.77-.45-.77-3.4 1.12 1.89 2.4 6.64 1a2.25 2.25 0 0 1-.83-.49zm1.82-9.73s-6.87 1.71-3.59 5.49a1.47 1.47 0 0 1-.25 2.12s2.46-1.27 1.33-2.86-1.86-2.22 2.51-4.75z"></path><path d="M18.13 19.14s.56.46-.63.82c-2.27.69-9.43.9-11.42 0-.72-.31.62-.74 1-.83a2.54 2.54 0 0 1 .69-.08c-.8-.56-5.15 1.1-2.21 1.58 8.05 1.37 14.64-.56 12.57-1.49zm-2.76-4.88a7 7 0 0 1 .92-.49s-1.51.27-3 .4a28.11 28.11 0 0 1-4.82.05C6.09 13.91 9.74 13 9.74 13a6.81 6.81 0 0 0-3.16.75c-2.06 1.03 5.09 1.48 8.79.51zm.91 2.44a.39.39 0 0 1-.08.09c5-1.32 3.18-4.65.78-3.81a.71.71 0 0 0-.33.25s.14-.05.43-.12c1.22-.25 2.92 1.63-.8 3.59zM12 13c-.74-1.67-3.26-3.14 0-5.71C16.09 4.08 14 2 14 2c.84 3.31-3 4.31-4.34 6.37-.93 1.41.47 2.92 2.34 4.63z"></path><path d="M16.41 21.32a29.75 29.75 0 0 1-9.14.14s.46.38 2.84.53c3.61.23 9.15-.12 9.29-1.83 0 0-.26.64-2.99 1.16z"></path>
                                </svg>
                            </div>
                            <div className="ml-2">
                                <h1 className="font-normal text-gray-500 text-md -mt-1">Grocery</h1>
                            </div>
                            <div className="ml-14">
                                <h1 className="font-bold text-md -mt-2">78k</h1>
                                <p className="text-gray-400">in24hours</p>
                            </div>
                            <div className="ml-14">
                                <p>$668</p>
                            </div>
                            <div className="flex flex-row">
                                <p>24%</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{
                                        fill: "rgba(250, 57, 35, 1)",
                                        transform: "",
                                        msFilter: "",
                                    }}>
                                    <path d="m14 9.586-4 4-6.293-6.293-1.414 1.414L10 16.414l4-4 4.293 4.293L16 19h6v-6l-2.293 2.293z"></path>
                                </svg>

                            </div>
                        </div>
                    </div>
                    <hr></hr>

                    <div className="w-screen h-auto bg-white mt-6 p-4">
                        <div className=" flex items-start justify-between ">
                            <div className="-ml-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{
                                        fill: "rgba(168, 133, 208, 1)",
                                        transform: "",
                                        msFilter: "",
                                    }}>
                                    <path d="M15.78 15.84S18.64 13 19.61 12c3.07-3 1.54-9.18 1.54-9.18S15 1.29 12 4.36C9.66 6.64 8.14 8.22 8.14 8.22S4.3 7.42 2 9.72L14.25 22c2.3-2.33 1.53-6.16 1.53-6.16zm-1.5-9a2 2 0 0 1 2.83 0 2 2 0 1 1-2.83 0zM3 21a7.81 7.81 0 0 0 5-2l-3-3c-2 1-2 5-2 5z"></path>
                                </svg>
                            </div>
                            <div className="flex flex-col ">
                                <div className="-ml-1">
                                    <h1 className="font-bold text-md -mt-2">Motels</h1>
                                    <h2 className="text-gray-400">meguc@ruj.io</h2>
                                </div>
                            </div>

                            <div className="flex ml-24">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{
                                        fill: "blue",
                                        transform: "",
                                        msFilter: "",
                                    }}><path d="M20 3H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h7v2H8v2h8v-2h-3v-2h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zM4 14V5h16l.002 9H4z"></path></svg>
                            </div>
                            <div className="ml-3">
                                <h1 className="font-normal text-gray-500 text-md -mt-1">Technology</h1>
                            </div>
                            <div className="ml-14">
                                <h1 className="font-bold text-md -mt-2">990</h1>
                                <p className="text-gray-400">in24hours</p>
                            </div>
                            <div className="ml-14">
                                <p>$891.2</p>
                            </div>
                            <div className="flex flex-row">
                                <p>68%</p>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="green" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                                </svg>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default CompanyDetails;