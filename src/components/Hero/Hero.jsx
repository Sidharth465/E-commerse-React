import React, { useCallback } from "react";
import { fetchAllProducts } from "../../services/products";
import Slider from "react-slick";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";

const ImageList = [
    {
      id: 1,
      img: Image1,
      title: "Upto 50% off on all Men's Wear",
      description:
        "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Image2,
      title: "30% off on all Women's Wear",
      description:
        "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Image3,
      title: "70% off on all Products Sale",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

const setting = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 800,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  cssEase: "ease-in-out",
  pauseOnHover: false,
  pauseOnFocus: true,
};

const Hero = ({ handleOrderPopup }) => {
  const [allProducts, setAllProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const getAllProducts = useCallback(async () => {
    try {
      setLoading(true);
      let res = await fetchAllProducts();
      console.log("res",res);
      
      if (res) {
        setAllProducts(res);
      }
    } catch (error) {
      console.log("Error getting Products", error);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[500px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white">
      {/* background patter */}
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-xl rotate-45 -z[8] "></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0 ">
        <Slider {...setting}>
          {ImageList?.map((item) => (
            <div key={item?.id}>
              <div className=" grid grid-cols-1 sm:grid-cols-2">
                <div className="flex flex-col justify-center gap-4 pt-10 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-4xl sm:text-6xl lg:text-7xl font-bold pl-2"
                  >
                    {item?.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm text-opacity-10 pl-2"
                    
                  >
                    {item?.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delaye="300"
                    className="ml-1"
                  >
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full" onClick={() => handleOrderPopup()}>
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                    <div data-aos="zoom-in"  data-aos-once="true" className="relative z-10 overflow-hidden">
                        <img src={item?.img} className="object-contain w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] lg:scal-120 sm:scale-105 px-5  " alt="" />
                    </div>
                   
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
