import React, { Fragment } from "react";
import { LuMenu } from "react-icons/lu";

const BottomHeader = () => {
  return (
    <Fragment>
      <div className="h-10 w-full bg-amazon_light flex items-center text-white text-sm px-4">
        <p className="h-8 px-2 flex items-center gap-1 cursor-pointer border border-transparent hover:border-gray-100 duration-300">
          <LuMenu /> All
        </p>
        <p className="hidden h-8 px-2 md:inline-flex items-center gap-1 cursor-pointer border border-transparent hover:border-gray-100 duration-300">
          Today&apos;s Deals
        </p>
        <p className="hidden h-8 px-2 md:inline-flex items-center gap-1 cursor-pointer border border-transparent hover:border-gray-100 duration-300">
          Customer Service
        </p>
        <p className="hidden h-8 px-2 md:inline-flex items-center gap-1 cursor-pointer border border-transparent hover:border-gray-100 duration-300">
          Registry
        </p>
        <p className="hidden h-8 px-2 md:inline-flex items-center gap-1 cursor-pointer border border-transparent hover:border-gray-100 duration-300">
          Gift Cards
        </p>
        <p className="hidden h-8 px-2 md:inline-flex items-center gap-1 cursor-pointer border border-transparent hover:border-gray-100 duration-300">
          Sell
        </p>
        <p className="hidden h-8 px-2 md:inline-flex items-center gap-1 cursor-pointer border border-transparent hover:border-red-500 hover:text-red-500 duration-300">
          Sign out
        </p>
      </div>
    </Fragment>
  );
};

export default BottomHeader;
