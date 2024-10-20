import React from "react";
import BannerImg from "../../assets/women/women2.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood, IoShirt } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import { MdPayment } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSolidOffer } from "react-icons/bi";

const Banner = () => {
  return (
    <div className="min-h-[600px] flex justify-center items-center py-12 sm:py-0">
      <div className="container ">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center ">
          {/* image secction */}
          <div data-aos="zoom-in">
            <img
              src={BannerImg}
              alt="banner"
              className="rounded-xl max-w-[400px] h-[300px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
            />
          </div>
          {/* text details section */}
          <div className="flex  flex-col justify-center gap-6 pt-6 ">
            <h1 data-aos="fade-up" className="text-3xl sm:text-4xl  font-bold">
              Winter Sale upto 50% Off
            </h1>
            <p
              data-aos="fade-up"
              className="text-sm text-gray-500 tracking-wide leading-5"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              odio repellat, cum consequatur deserunt ipsam quo nihil voluptatem
              quaerat vero?
            </p>
            <div className="flex flex-col gap-4 pb-5">
                <div data-aos="fade-up" className="flex items-center gap-4">
                        <GrSecure className="text-4xl h-12 w-12  shadow-sm p-2 rounded-full bg-violet-100 dark:bg-violet-400" />
                        <p>Quality Products</p>
                </div>
                <div data-aos="fade-up" className="flex items-center gap-4">
                        <TbTruckDelivery className="text-4xl h-12 w-12  shadow-sm p-2 rounded-full bg-violet-100 dark:bg-violet-400" />
                        <p>Fast Delivery</p>
                </div> <div data-aos="fade-up" className="flex items-center gap-4">
                        <MdPayment className="text-4xl h-12 w-12  shadow-sm p-2 rounded-full bg-violet-100 dark:bg-violet-400" />
                        <p>Easy Payment Method</p>
                </div> <div data-aos="fade-up" className="flex items-center gap-4">
                        <BiSolidOffer className="text-4xl h-12 w-12  shadow-sm p-2 rounded-full bg-violet-100 dark:bg-violet-400" />
                        <p>Get Offers</p>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
