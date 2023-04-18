import React from "react";

import userprofile from "../assets/images/userimage.jpeg";

import participants from "../assets/images/avatar-anisha.png";

const UserExperienceDesign = () => {
  return (
    <div className="w-full bg-gray-200 py-4 px-8 ml-auto mr-auto space-y-2">
      <div className="container mx-auto flex justify-center items-start w-full">
        <div className="w-full">
          <div className="flex flex-col md:flex-row bg-white dark:bg-gray-300 shadow rounded">
            <div className="flex flex-col space-y-12 rounded-sm p-6">
              <div className="flex w-full max-w-sm flex-col items-center justify-center p-6 md:-mt-6 ">
                <div className="flex w-full flex-col space-y-6 p-5">
                  <img
                    className="flex h-12 w-14 rounded-md items-center justify-center -mt-6 -ml-4"
                    src={userprofile}
                    alt="Design"
                  />
                </div>
                <div className="-ml-14">
                  <p className="text-sm font-medium -mt-16">
                    Fitbit Incoporation
                  </p>
                  <p className="text-xs text-gray-600">San Diego, California</p>
                </div>
              </div>
              <div className="flex flex-col items-start justify-start md:w-1/3 ml-8 ">
                <h1 className="text-base font-bold -mt-16">
                  User Experience Revamp
                </h1>
                <p className="text-xs mt-8">
                  To many naive users of the platform,a reddesign may look just
                  like a facelift.No more, no less.However, for a User
                  Experience designer,the entire redesign process means much
                  more than a lot of research,meticulous planning,iterating and
                  gallons of coffee.
                </p>
              </div>
              <div className="w-9 h-6 mb-3 -mt-16 ml-24 rounded-full flex items-center justify-center">
                <img
                  className="w-8 h-6 rounded-full"
                  src={participants}
                  alt=""
                />
                <img
                  className="w-8 h-6 rounded-full -ml-1"
                  src={participants}
                  alt=""
                />
                <img
                  className="w-8 h-6 rounded-full -ml-1"
                  src={participants}
                  alt=""
                />
                <img
                  className="w-8 h-6 rounded-full -ml-1"
                  src={participants}
                  alt=""
                />
                <img
                  className="w-8 h-6 rounded-full -ml-1"
                  src={participants}
                  alt=""
                />
                <h2 className=" text-xs ml-2"> +2 more participants</h2>
              </div>
            </div>
            <hr className="mt-6 "></hr>
            <div className="flex w-full max-w-sm flex-col items-center justify-center p-6 md:-mt-32 ">
              <div className="flex w-full flex-col space-y-6 p-5">
                <div className="flex flex-col space-y-6 text-center md:flex-row md:space-x-4 md:space-y-0">
                  <div className="flex justify-center rounded-sm bg-blue-100 p-2 font-semibold text-blue-800">
                    Start Date: 22 Jun, 2020
                  </div>
                  <div className="flex justify-center rounded-sm bg-red-100 p-2 font-semibold text-red-800">
                    End Date: 03 Dec, 2020
                  </div>
                </div>
                <div className="flex rounded-sm bg-gray-100 p-4 text-xs font-medium text-gray-500">
                  <ul className="space-y-4">
                    <li>- Visual QA for all design componennts</li>
                    <li>- UX overview of new product launch</li>
                    <li>- Visual QA for all design componennts</li>
                  </ul>
                </div>
              </div>

              <div className="flex mx-auto items-start p-2 space-x-8">
                <div className>
                  <h2 className=" text-lg text-center font-semibold">24</h2>
                  <p className="text-xs font-semibold">Milestones</p>
                </div>
                <div className="mx-4">
                  <h2 className=" text-lg leading-6 text-center font-semibold">
                    03
                  </h2>
                  <p className="text-xs font-semibold">Teams Assigned</p>
                </div>
                <div className>
                  <h2 className=" text-lg leading-6 text-center font-semibold">
                    14
                  </h2>
                  <p className="text-xs font-semibold ">Tasks Pending</p>
                </div>
              </div>
            </div>
            <hr className="mt-6"></hr>

            <div className="flex flex-col space-y-12 p-6 shadow-md">
              <div className="flex flex-col space-y-6">
                <div className="flex justify-between">
                  <div className="flex font-normal">
                    User Experience Research
                  </div>
                  <div className="font-normal text-blue-700">7/12</div>
                </div>
                <div className="h-1 w-full rounded-md bg-gray-300">
                  <div className="h-1 w-5/12 rounded-md bg-blue-700"></div>
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between">
                  <div className="flex font-normal">Component Wireframing</div>
                  <div className="font-normal text-blue-700">3/12</div>
                </div>
                <div className="h-1 w-full rounded-md bg-gray-300">
                  <div className="h-1 w-2/12 rounded-md bg-blue-700"></div>
                </div>
              </div>
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between">
                  <div className="flex font-normal">Quality Assurance</div>
                  <div className="font-normal text-blue-700">9/12</div>
                </div>
                <div className="h-1 w-full rounded-md bg-gray-300">
                  <div className="h-1 w-9/12 rounded-md bg-blue-700"></div>
                </div>
              </div>

              <div className="-mt-6 flex justify-between md:space-x-8 px-8 py-8 font-semibold">
                <div className="flex flex-col">
                  <div className="">
                    <p>Earnings</p>
                    <p>$357,655</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="">
                    <p>Expenses</p>
                    <p>$189,955</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="">
                    <p>Net Cash</p>
                    <p>$888,546</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserExperienceDesign;
