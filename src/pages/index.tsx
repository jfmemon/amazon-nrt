import Banner from "@/components/banner/banner";
import ProductsComp from "@/components/products/productsComp";
import { Inter } from "next/font/google";
import { ProductProps } from "../../type";

const inter = Inter({ subsets: ["latin"] });

interface props {
  productData: ProductProps;
}

export default function Home({ productData }: props) {
  console.log("🚀 ~ Home ~ productData:", productData);

  return (
    <main>
      <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt-20 lg:-mt-32 xl:-mt-60 z-20 mb-10">
          <ProductsComp productData={productData} />
        </div>
      </div>
    </main>
  );
}

export const getServerSideProps = async () => {
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } };
};
