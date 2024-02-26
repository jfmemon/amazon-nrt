import React from "react";
import { ProductProps } from "../../../type";
import Image from "next/image";
import { HiShoppingCart } from "react-icons/hi";
import { FaHeart } from "react-icons/fa";

const ProductsComp = ({ productData }: any) => {
  console.log("🚀 ~ ProductsComp ~ productData:", productData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-4">
      {productData.map((product: ProductProps, i: number) => (
        <div
          key={i}
          className="bg-white w-full text-black p-4 rounded-lg group overflow-hidden"
        >
          <div className="w-full h-[260px] relative">
            <Image
              className="h-full w-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
              src={product.image}
              alt="productImage"
              height={300}
              width={300}
            />
            <div className="h-20 w-12 absolute right-0 bottom-10 border-[1px] border-gray-400 rounded-md bg-white flex flex-col translate-x-20 group-hover:translate-x-0 duration-300">
              <span className="h-full w-full text-xl border-b-[1px] border-b-gray-400 flex items-center justify-center bg-transparent hover:bg-amazon_yellow cursor-pointer">
                <HiShoppingCart />
              </span>
              <span className="h-full w-full text-xl flex items-center justify-center bg-transparent hover:bg-amazon_yellow cursor-pointer">
                <FaHeart />
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsComp;
