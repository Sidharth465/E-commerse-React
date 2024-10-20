import React from "react";
import footerLogo from "../../assets/logo.png";
import Banner from "../../assets/website/footer-pattern.jpg";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const BannerImg = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div style={BannerImg} className="text-white">
      <div className="container ">
        <div
          data-aos="zoom-in"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 pb-44 pt-5"
        >
          {/* COMPANY DETAILS */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
              <img src={footerLogo} alt="" className="max-w-[50px] " />
              StyleNest
            </h1>
            <p className="text-xs ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
              perspiciatis cupiditate ipsa.{" "}
            </p>
          </div>
          {/* footer link */}
          <div className=" grid grid-cols-2 sm:grid-cols-2 col-span-2 md:pl-10">
            <div>
                <div className="py-8 px-4 ">
                    <h1 className="text-xl sm:text-xl font-bold sm:text-left text-justify mb-3">Quick Links</h1>
                    <ul className="flex flex-col gap-3">
                        {FooterLinks?.map((link)=>(
                            <li className="hover:text-primary cursor-pointer hover:translate-x-1 duration-300 transition-all" key={link?.link}><span >{link?.title}</span></li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaLocationArrow />
                  <p>Noida, Uttar Pradesh</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 123456789</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
