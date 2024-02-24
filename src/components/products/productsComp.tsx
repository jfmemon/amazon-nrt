import React from "react";
import { ProductProps } from "../../../type";
import Image from "next/image";

const ProductsComp = ({ productData }: any) => {
  console.log("🚀 ~ ProductsComp ~ productData:", productData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 px-4">
      {productData.map((product: ProductProps, i: number) => (
        <div
          key={i}
          className="bg-white w-full text-black p-4 rounded group overflow-hidden"
        >
          <div className="w-full h-[260px] relative">
            <Image
              className="h-full w-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
              src={product.image}
              alt="productImage"
              height={300}
              width={250}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsComp;
