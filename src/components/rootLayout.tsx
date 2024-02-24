import React, { FC, ReactElement } from "react";
import Header from "./header/header";
import BottomHeader from "./header/bottomHeader";
import Footer from "./footer/footer";

interface ChildrenProps {
  children: ReactElement;
}

const RootLayout: FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <Header />
      <BottomHeader />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
