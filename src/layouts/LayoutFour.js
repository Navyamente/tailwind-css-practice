import React from "react";

const LayoutFour = () => {
    return (
        <div className="flex flex-col md:flex-row w-full mx-auto space-y-8 md:space-y-0 md:space-x-8  bg-gray-100 p-6 justify-center">
            <div className="flex w-full md:w-6/12 h-24 border-2  border-dashed rounded-sm border-gray-300"></div>
            <div className="flex w-full md:w-6/12 h-24  border-2 border-dashed rounded-sm border-gray-300">
            </div>
        </div>
    )
}
export default LayoutFour;