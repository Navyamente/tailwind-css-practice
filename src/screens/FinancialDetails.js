import React from "react";

const FinancialDetails = () => {
  return (
    <div className="bg-gray-200 w-full h-full p-24">
      <div className="flex flex-col bg-white shadow-md max-w-6xl overflow-x-auto">
        <div className="flex w-full font-bold text-gray-900 uppercase font-sans bg-gray-100">
          <div className="flex justify-between w-3/12 items-center p-8">
            <p className="">Company</p>
            <div className="flex flex-col">
              <i className="bx bxs-chevron-up text-gray-300 -mb-0.5"></i>
              <i className="bx bxs-chevron-down text-gray-300 -mt-0.5"></i>
            </div>
          </div>
          <div className="flex justify-between w-3/12 items-center p-8">
            <p className="">Category</p>
            <div className="flex flex-col">
              <i className="bx bxs-chevron-up text-gray-300 -mb-0.5"></i>
              <i className="bx bxs-chevron-down text-gray-300 -mt-0.5"></i>
            </div>
          </div>
          <div className="flex justify-between w-2/12 items-center p-8">
            <p className="">view</p>
            <div className="flex flex-col">
              <i className="bx bxs-chevron-up text-gray-300 -mb-0.5"></i>
              <i className="bx bxs-chevron-down text-gray-300 -mt-0.5"></i>
            </div>
          </div>
          <div className="flex justify-between w-2/12 items-center p-8">
            <p className="">revenue</p>
            <div className="flex flex-col">
              <i className="bx bxs-chevron-up text-gray-300 -mb-0.5"></i>
              <i className="bx bxs-chevron-down text-gray-300 -mt-0.5"></i>
            </div>
          </div>
          <div className="flex justify-between w-2/12 items-center p-8">
            <p className="">sales</p>
            <div className="flex flex-col">
              <i className="bx bxs-chevron-up text-gray-300 -mb-0.5"></i>
              <i className="bx bxs-chevron-down text-gray-300 -mt-0.5"></i>
            </div>
          </div>
        </div>
        <div className="flex flex-col divide-y-2">
          <div className="flex w-full px-2 py-6">
            <div className="flex w-3/12 justify-start items-center pl-6">
              <i className="bx bxs-briefcase text-red-500 text-4xl bg-gray-100 rounded-md p-1"></i>
              <div className="flex flex-col pl-6">
                <p className="font-bold text-lg">Dixons</p>
                <p className="text-gray-500">meguc@ruj.in</p>
              </div>
            </div>
            <div className="flex w-3/12 items-center pl-6">
              <i className="bx bx-desktop text-blue-500 text-4xl bg-blue-50 p-2 rounded-full"></i>

              <p className="ml-4 text-gray-500 text-lg">Technology</p>
            </div>
            <div className="flex flex-col w-2/12 justify-start pl-8">
              <p className="font-bold ">23.4k</p>
              <p className="text-gray-500">in 24 hours</p>
            </div>
            <div className="flex w-2/12 text-gray-800 pl-8 justify-between">
              $891.2
            </div>
            <div className="flex w-2/12 pl-10">
              <p className="font-bold ">68%</p>
              <i className="bx bx-trending-down text-red-600 text-lg pl-2"></i>
            </div>
          </div>
          <div className="flex w-full px-2 py-6">
            <div className="flex w-3/12 justify-start items-center pl-6">
              <i className="bx bxl-gitlab text-red-500 text-4xl bg-gray-100 rounded-md p-1"></i>
              <div className="flex flex-col pl-6">
                <p className="font-bold text-lg">Motel</p>
                <p className="text-gray-500">meguc@ruj.in</p>
              </div>
            </div>
            <div className="flex w-3/12 items-center pl-6">
              <i className="bx bxl-java text-green-600 text-4xl bg-green-100 rounded-full p-2"></i>
              <p className="ml-4 text-gray-500 text-lg">Grocery</p>
            </div>
            <div className="flex flex-col w-2/12 justify-start pl-8">
              <p className="font-bold ">78k</p>
              <p className="text-gray-500">in 24 hours</p>
            </div>
            <div className="flex w-2/12 text-gray-800 pl-8 justify-between">
              $668
            </div>
            <div className="flex w-2/12 pl-10">
              <p className="font-bold ">97%</p>
              <i className="bx bx-trending-up text-green-600 text-lg pl-2"></i>
            </div>
          </div>
          <div className="flex w-full px-2 py-6">
            <div className="flex w-3/12 justify-start items-center pl-6">
              <i className="bx bxs-brush-alt bx-rotate-180 text-red-500 text-4xl bg-gray-100 p-1 rounded-md"></i>
              <div className="flex flex-col pl-6">
                <p className="font-bold text-lg">Zipcar</p>
                <p className="text-gray-500">meguc@ruj.in</p>
              </div>
            </div>
            <div className="flex w-3/12 items-center pl-6">
              <i className="bx bxs-watch bx-rotate-180 text-pink-500 text-4xl bg-pink-100 p-2 rounded-full"></i>

              <p className="ml-4 text-gray-500 text-lg">Fashion</p>
            </div>
            <div className="flex flex-col w-2/12 justify-start pl-8">
              <p className="font-bold ">162</p>
              <p className="text-gray-500">in 24 hours</p>
            </div>
            <div className="flex w-2/12 text-gray-800 pl-8 justify-between">
              $522.2
            </div>
            <div className="flex w-2/12 pl-10">
              <p className="font-bold ">98%</p>
              <i className="bx bx-trending-down text-red-600 text-lg pl-2"></i>
            </div>
          </div>
          <div className="flex w-full px-2 py-6">
            <div className="flex w-3/12 justify-start items-center pl-6">
              <i className="bx bxs-star text-yellow-500 text-4xl bg-gray-100 rounded-md p-1"></i>
              <div className="flex flex-col pl-6">
                <p className="font-bold text-lg">Owing</p>
                <p className="text-gray-500">meguc@ruj.in</p>
              </div>
            </div>
            <div className="flex w-3/12 items-center pl-6">
              <i className="bx bx-desktop text-blue-500 text-4xl bg-blue-50 p-2 rounded-full"></i>

              <p className="ml-4 text-gray-500 text-lg">Technology</p>
            </div>
            <div className="flex flex-col w-2/12 justify-start pl-8">
              <p className="font-bold ">214</p>
              <p className="text-gray-500">in 24 hours</p>
            </div>
            <div className="flex w-2/12 text-gray-800 pl-8 justify-between">
              $81.2
            </div>
            <div className="flex w-2/12 pl-10">
              <p className="font-bold ">68%</p>
              <i className="bx bx-trending-down text-red-600 text-lg pl-2"></i>
            </div>
          </div>
          <div className="flex w-full px-2 py-6">
            <div className="flex w-3/12 justify-start items-center pl-6">
              <i className="bx bx-credit-card bx-rotate-270 text-violet-700 text-4xl bg-gray-100 rounded-md p-1"></i>
              <div className="flex flex-col pl-6">
                <p className="font-bold text-lg">Cafes</p>
                <p className="text-gray-500">meguc@ruj.in</p>
              </div>
            </div>
            <div className="flex w-3/12 items-center pl-6">
              <i className="bx bxl-java text-green-600 text-4xl bg-green-100 rounded-full p-2"></i>

              <p className="ml-4 text-gray-500 text-lg">Grocery</p>
            </div>
            <div className="flex flex-col w-2/12 justify-start pl-8">
              <p className="font-bold ">78k</p>
              <p className="text-gray-500">in 24 hours</p>
            </div>
            <div className="flex w-2/12 text-gray-800 pl-8 justify-between">
              $668
            </div>
            <div className="flex w-2/12 pl-10">
              <p className="font-bold ">24%</p>
              <i className="bx bx-trending-down text-red-600 text-lg pl-2"></i>
            </div>
          </div>
          <div className="flex w-full px-2 py-6">
            <div className="flex w-3/12 justify-start items-center pl-6">
              <i className="bx bxs-rocket text-red-500 text-4xl bg-gray-100 rounded-md p-1"></i>
              <div className="flex flex-col pl-6">
                <p className="font-bold text-lg">Kmart</p>
                <p className="text-gray-500">meguc@ruj.in</p>
              </div>
            </div>
            <div className="flex w-3/12 items-center pl-6">
              <i className="bx bx-desktop text-blue-500 text-4xl bg-blue-50 p-2 rounded-full"></i>

              <p className="ml-4 text-gray-500 text-lg">Technology</p>
            </div>
            <div className="flex flex-col w-2/12 justify-start pl-8">
              <p className="font-bold ">990</p>
              <p className="text-gray-500">in 24 hours</p>
            </div>
            <div className="flex w-2/12 text-gray-800 pl-8 justify-between">
              $891.2
            </div>
            <div className="flex w-2/12 pl-10">
              <p className="font-bold ">68%</p>
              <i className="bx bx-trending-up text-green-600 text-lg pl-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialDetails;
