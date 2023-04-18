import React from "react";

const LayoutTwo = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 p-6 justify-center">
            <div className="w-full h-24 border-2 border-dashed border-gray-300"></div>
            <div className="h-24 w-28 border-2 border-dashed border-gray-300">
            </div>
        </div>
    )
}
export default LayoutTwo;