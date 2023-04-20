import React from "react";

const LayoutSix = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3  w-full mx-auto space-y-8 md:space-y-0 md:space-x-8 bg-gray-100 p-6 justify-center">
            <div className="grid w-full md:w-10/12 h-24 border-2  border-dashed rounded-sm border-gray-300"></div>
            <div className="grid w-full md:w-10/12 h-24  border-2 border-dashed rounded-sm border-gray-300">
            </div>
            <div className="grid w-full md:w-10/12 h-24 border-2  border-dashed rounded-sm border-gray-300"></div>
            <div className="grid w-full md:w-10/12 h-24 border-2  border-dashed rounded-sm border-gray-300"></div>
        </div>
    )
}
export default LayoutSix;