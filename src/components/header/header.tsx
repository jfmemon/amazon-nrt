import React, { Fragment } from "react";
import logo from "@/images/logo.png";
import Image from "next/image";
import { SlLocationPin } from "react-icons/sl";
import { HiOutlineSearch } from "react-icons/hi";
import { BiCaretDown } from "react-icons/bi";
import cartIcon from "@/images/cartIcon.png";
import Link from "next/link";

const Header = () => {
  return (
    <Fragment>
      <div className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50">
        <div className="w-full h-full mx-auto bg-amazon_blue inline-flex items-center justify-between gap-1 mdl:gap-3 px-4">
          {/* logo */}
          <Link href={'/'} className="px-2 border border-transparent hover:border-white cursor-pointer duration-300 flex items-center justify-center h-[70%]">
            <Image
              className="w-28 object-cover mt-2"
              src={logo}
              alt="Amazon Logo"
            />
          </Link>
          {/* delivery */}
          <div className="px-2 border border-transparent hover:border-white cursor-pointer items-center justify-center h-[70%] hidden xl:inline-flex gap-1 duration-300">
            <SlLocationPin />
            <div className="text-sm">
              <p>Delivery to</p>
              <p className="text-white font-bold uppercase">USA</p>
            </div>
          </div>
          {/* search */}
          <div className="flex-1 h-10 hidden md:inline-flex items-center justify-between relative">
            <input
              className="w-full h-full rounded-md placeholder:text-sm text-base text-black px-2 border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow"
              type="text"
              placeholder="Search what you want..."
            />
            <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow text-black text-2xl cursor-pointer absolute right-0 rounded-e-md">
              <HiOutlineSearch />
            </span>
          </div>
          {/* signin */}
          <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer h-[70%] duration-300">
            <p>Hello, Sign in</p>
            <p className="font-bold text-white flex items-center">
              Account & Lists{" "}
              <span>
                <BiCaretDown />
              </span>
            </p>
          </div>
          {/* favorite */}
          <div className="text-xs text-gray-100 flex flex-col justify-center px-2 border border-transparent hover:border-white cursor-pointer h-[70%] duration-300">
            <p>Marked</p>
            <p className="font-bold text-white flex items-center">& Favorite</p>
          </div>
          {/* cart */}
          <Link href={'/cart'} className="border border-transparent hover:border-white cursor-pointer h-[70%] flex justify-center items-center px-2 relative duration-300">
            <Image
              src={cartIcon}
              alt="cartIcon"
              className="w-auto object-cover h-8"
            />
            <p className="text-xs text-white font-bold mt-3">Cart</p>
            <span className="text-amazon_yellow font-semibold text-sm absolute top-2 left-[29px]">0</span>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default Header;
