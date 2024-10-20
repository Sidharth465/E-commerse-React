import React from "react";
import Banner from "../../assets/website/orange-pattern.jpg";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className=" mb-20 bg-gray-200 dark:bg-gray-800 text-white"
      style={BannerImg}
    >
      <div className="container backdrop:blur-md  py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center !items-center  sm:text-left sm:text-4xl font-semibold">
            {" "}
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className ="text-gray-700 font-semibold w-full p-3 rounded-xl focus:outline-none focus:border-2 focus:border-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
