import React from 'react';

const ProfileCard = () => {
    return (
        <div className="flex felx-col">
            <div className="mx-auto flex w-1/3 bg-blue-50 h-auto items-center mt-6">
                <div className="flex flex-col w-auto mx-auto bg-white h-auto shadow rounded-lg mt-8 mb-8">
                    <div className="w-auto px-6 pt-6 ">
                        <div className="bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                        </div>
                        <div>
                            <h1 className="text-gray-400 text-sm font-medium mb-1">Event</h1>
                            <p>New Year Costume Party</p>

                            <h1 className="text-gray-400 text-sm font-medium mt-4">Day</h1>
                            <p>Tuesday 9:00PM-11:00PM</p>

                            <h1 className="text-gray-400 text-sm font-medium mt-4">Date</h1>
                            <p>14th April 2023</p>
                        </div>
                        <div className="mt-4 flex flex-row flex-col space-x-8 font-medium">
                            <div className="flex w-full flex-row items-start gap-x-20">
                                <div className="text-gray-400">
                                    <p>Ticket sold</p>
                                    <p className="text-gray-600">524</p>
                                </div>
                                <div className="text-gray-400">
                                    <p>Revenue Earned</p>
                                    <p className="text-gray-600">$7654</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center text-gray-200 text-lg">
                            <div className="mt-8 flex text-sm">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{
                                        fill: "rgba(0, 0, 0, 1)",
                                        transform: "",
                                        msFilter: "",
                                    }}
                                >
                                    <path
                                        d="M8.465 11.293c1.133-1.133 3.109-1.133 4.242 0l.707.707 1.414-1.414-.707-.707c-.943-.944-2.199-1.465-3.535-1.465s-2.592.521-3.535 1.465L4.929 12a5.008 5.008 0 0 0 0 7.071 4.983 4.983 0 0 0 3.535 1.462A4.982 4.982 0 0 0 12 19.071l.707-.707-1.414-1.414-.707.707a3.007 3.007 0 0 1-4.243 0 3.005 3.005 0 0 1 0-4.243l2.122-2.121z">
                                    </path>
                                    <path
                                        d="m12 4.929-.707.707 1.414 1.414.707-.707a3.007 3.007 0 0 1 4.243 0 3.005 3.005 0 0 1 0 4.243l-2.122 2.121c-1.133 1.133-3.109 1.133-4.242 0L10.586 12l-1.414 1.414.707.707c.943.944 2.199 1.465 3.535 1.465s2.592-.521 3.535-1.465L19.071 12a5.008 5.008 0 0 0 0-7.071 5.006 5.006 0 0 0-7.071 0z">
                                    </path>
                                </svg>
                                <p className="text-gray-600 mr-5 ml-4">Veevents.com/costumeparty</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    style={{
                                        fill: "rgba(0, 0, 0, 1)",
                                        transform: "rotate(270deg)",
                                        msFilter: "", progid: "DXImageTransform.Microsoft.BasicImage(rotation=3)",
                                    }}>
                                    <path
                                        d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z">
                                    </path>
                                </svg>
                            </div>
                        </div>
                        <div className="border-dashed border-t-2 border-gray-200 mt-12"></div>
                        <div className="mx-auto  flex items-center justify-center mt-8 mb-8">
                            <a href="https://www.freeiconspng.com/img/49233" title="Image from freeiconspng.com"><img
                                className="flex h-24 p-1 text-center"
                                src="https://www.freeiconspng.com/uploads/barcode-background-png-6.png" width="300"
                                alt="barcode background png" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div >

    )
}

export default ProfileCard;