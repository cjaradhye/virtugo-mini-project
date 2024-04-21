import React from "react";

function Login() {
  return (
    <div>
      <div className="bg-black text-white pb-12">
        <div className="p-5 flex">
          <img src="images/virtugo.png" alt="logo of website" className="p-5" />
        </div>
        <div className="flex justify-center">
          <h1 className="text-7xl ">Good to see you again!</h1>
        </div>
      </div>
      <div className="myimg">
        <div className="flex justify-center items-center ">
          <form className="flex flex-col items-start">
            <input
              className="p-5 my-3 border-b border-[#0C356A] text-[#0C356A] text-xl  focus:outline-0 placeholder:text-[#0C356A]"
              type="email"
              placeholder="Email Address"
            />
            <input
              className="p-5 my-3 border-b border-[#0C356A] text-[#0C356A] text-xl  focus:outline-0 placeholder:text-[#0C356A] "
              type="password"
              placeholder="Password"
            />
            <div className="flex justify-center ml-12 my-4">
              <button className=" text-lg py-2 px-12 border-2 text-black border-[#0C356A]  hover:bg-[#0C356A] hover:text-white">
                Sign In
              </button>
            </div>
            <h6 className="p-2 ml-16 ">Or sign in using </h6>
            <div className="ml-12 my-4">
              <button className="text-lg px-12 py-2 border-2 border-red-500 text-white bg-red-500 hover:bg-white hover:text-red-500">
                GOOGLE
              </button>
            </div>
          </form>
        </div>
        <div className="flex justify-center">
          <h2>
            <a href="forgot" className="text-[#0C356A]">
              Forgot password?
            </a>
            | New to US!{" "}
            <a href="register" className="text-[#0C356A]">
              Register Now !
            </a>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Login;
