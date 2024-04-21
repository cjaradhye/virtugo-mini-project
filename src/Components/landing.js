import React from "react";
import Navbar from "./Header";
function Landing() {
  return (
    <div className="back">
      <Navbar />
      <div className="ml-48 mt-20 font-bold text-white text-6xl">
        <div className="px-5 py-2 ">No matter where</div>
        <div className="px-5 py-2 "> your're going to, we'll</div>
        <div className="px-5 py-2 ">take you there</div>
      </div>
      <div className="ml-48 p-5 mb-12">
        <button className=" px-7 py-5 rounded font-semibold text-[#23C6BB] border-[#23C6BB] border-2 backdrop-blur-lg hover:bg-[#23C6BB] hover:border-[#23C6BB] hover:text-[#F3F3F3] ">
          Explore now!
        </button>
      </div>
    </div>
  );
}

export default Landing;
