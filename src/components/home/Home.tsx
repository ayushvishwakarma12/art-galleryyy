import React from "react";
import Navbar from "../navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="h-screen w-full bg-cyan-500 flex justify-start items-center "
        style={{
          background: `url('/art.png') center/cover`,
          backgroundPosition: "center 30%",
        }}
      >
        <div className="bg-white rounded-2xl mx-2 md:ml-10 px-12 py-12 shadow-2xl h-[400px] flex flex-col justify-center bg-gradient-to-br from-emerald-50 to-yellow-500">
          <h1 className="text-4xl font-briemhand text-center">
            A Journey Through Arts
          </h1>
          <button
            className=" bg-rose-300 px-5 py-4 font-semibold rounded-full mt-10 hover:bg-rose-500 duration-500"
            onClick={() => navigate("/gallery")}
          >
            Explore Arts
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;