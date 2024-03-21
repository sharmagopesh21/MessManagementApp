import React from "react";
import Sidebar from "./sidebar";
import Navbar from "./Navbar";
import Eating1 from "../images/eatingImg1.svg";
import Eating2 from "../images/eatingImg2.svg";

export default function Home() {
  return (
    <div className="flex">  
      <Sidebar />
      <div className="flex flex-col w-full">
        <div className="row-span-1">
          <Navbar />
        </div>
      <div className="col-span-8 h-screen flex justify-center items-center bg-aliceblue">
        <div className="bg-white h-[95%] w-[90%] rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
          <div className="flex justify-center bg-darkPeach rounded-3xl">
            <img
              className="object-fill h-48 w-96"
              src={Eating1}
              alt="not found"
            />
            <img
              className="object-fill h-48 w-96"
              src={Eating2}
              alt="not found"
            />
            <img
              className="object-fill h-48 w-96"
              src={Eating1}
              alt="not found"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
