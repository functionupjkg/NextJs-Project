import {
  FaFacebookF,
  FaLinkedin,
  FaGithub,
  FaGoogle,
  FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";

import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 w-full px-20 text-center">
        <div className="flex w-2/3 max-w-4xl bg-white shadow-2xl rounded-2xl">
          {/* ----------------------------------Login -- Section------------------------------- */}

          <div className="w-3/5 p-5">
            <div className="font-bold text-left">
              <span className="text-blue-800">Login-Sinup</span>Demo Page
            </div>

            <div className="py-10">
              <h2 className="text-3xl font-bold text-blue-800 ">
                Sign in to Account
              </h2>
              <div className="inline-block w-10 mb-2 border-2 border-blue-800 "></div>

              {/* -----------------End Login Section----------- */}

              {/* ---------------------------Social Link Section-------------------- */}
              <div className="flex justify-center my-2 ">
                <a
                  href="#"
                  className="p-3 mx-1 border-2 border-gray-200 rounded-full  hover:bg-blue-800 hover:text-white"
                >
                  <FaFacebookF className="text-sm " />
                </a>
                <a
                  href="https://www.linkedin.com/in/jkgupta273/" target="_blank"
                  className="p-3 mx-1 border-2 border-gray-200 rounded-full  hover:bg-blue-800 hover:text-white"
                >
                  <FaLinkedin className="text-sm " />
                </a>
                <a
                  href="https://github.com/functionupjkg" target="_blank"
                  className="p-3 mx-1 border-2 border-gray-200 rounded-full  hover:bg-blue-800 hover:text-white"
                >
                  <FaGithub className="text-sm " />
                </a>
                <a
                  href="https://www.google.com/" target="_blank"
                  className="p-3 mx-1 border-2 border-gray-200 rounded-full  hover:bg-blue-800 hover:text-white"
                >
                  <FaGoogle className="text-sm " />
                </a>
              </div>
              {/* -----------------End Social Section----------- */}

              <p className="my-3 text-gray-400">or use your email account </p>
              <div className="flex flex-col items-center">
                <div className="bg-gray-200 w-64 p-2 mb-3 flex items-center ">
                  <FaRegEnvelope className="text-gray-400 m-2" />
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="bg-gray-200 outline-none text-sm flex-1"
                  />
                </div>

                <div className="bg-gray-200 w-64 p-2 mb-3 flex items-center ">
                  <MdLockOutline className="text-gray-400 m-2" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="bg-gray-200 outline-none text-sm flex-1"
                  />
                </div>

                <div className="flex justify-between w-64 mb-5">
                  <label className="flex items-center  text-xs font-semibold ">
                    <input type="checkbox" name="remember" className="mr-1"/>
                      Remember me
                  </label>
                  <a href="#" className="text-xs font-semibold">Forgot Password</a>
                </div>
                <a
              href="#"
              className="inline-block px-12 py-2 font-semibold border-2 border-blue-800 rounded-full hover:bg-blue-800 hover:text-white"
            >
             
              Login
            </a>
              </div>
            </div>
          </div>

          {/* ----------------------------------Sinup -- Section------------------------------- */}

          <div className="w-2/5 px-12 text-white bg-blue-800 rounded-br-2xl rounded-tr-2xl py-36">
            <h2 className="mb-2 text-3xl font-bold">Hello Friends!</h2>
            <div className=" w-10 border-2 border-white inline-block"></div>
            <p className="mb-2">
              Fill up personal information and start journey with us.
            </p>
            <a
              href="#"
              className="px-12 py-2 font-semibold border-2 border-white rounded-full inline-block m-5 hover:bg-white hover:text-blue-800"
            >

              {" "}
              Sign Up
            </a>
          </div>
          {/* ---------------End  Sign Up Section--------- */}
        </div>
      </main>
    </div>
  );
};

export default Home;
