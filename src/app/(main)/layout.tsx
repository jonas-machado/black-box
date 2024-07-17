import React from "react";
import Sidebar from "@/components/sidebar";
import InfoBar from "@/components/infobar";
import Navbar from "@/components/global/Navbar";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className=" h-full">
      <Navbar />

      {props.children}
    </div>
  );
};

export default Layout;
