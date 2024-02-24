import Image from "next/image";
import React, { Fragment } from "react";
import logo from "@/images/logo.png";

const Footer = () => {
  return (
    <Fragment>
      <div className="w-full h-20 flex justify-center items-center bg-amazon_light text-gray-300 gap-4">
        <Image className="w-24" src={logo} alt="logoImage" />
        <p className="text-sm -mt-4">
          All rights reserved{" "}
          <a
            className="text-amazon_yellow hover:underline decoration-[1px]"
            href="https://www.linkedin.com/in/md-jannatul-ferdous-emon-108100180/"
            target="_blank"
          >
            @emon
          </a>
        </p>
      </div>
    </Fragment>
  );
};

export default Footer;
