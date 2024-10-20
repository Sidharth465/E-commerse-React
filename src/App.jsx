import React from "react";
import Navbar from "./components/navbar/Navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import Hero from "./components/Hero/Hero";
import Products from "./components/products/Products";
import TopProducts from "./components/topProducts/TopProducts";
import Banner from "./components/banner/Banner";
import Subscribe from "./components/subscribe/Subscribe";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";
import Popup from "./components/Popup/Popup";



const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(()=>{
    Aos.init({
      duration: 800,
      offset:100,
      easing: 'ease-in-sine',
      delay:100
    });
    Aos.refresh();

  },[])
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 ">
      <Navbar handleOrdeerPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup}/>
      <Banner />
      <Subscribe />
      <Testimonials />
      <Footer />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup}/>
    </div>
  );
};

export default App;
