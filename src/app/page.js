
import BentoGrid from "@/components/LandingPage/BentoGrid";
import Footer from "@/components/LandingPage/Footer";
import Home from "@/components/LandingPage/Home";
import Navbar from "@/components/LandingPage/Navbar";
import Slider from "@/components/LandingPage/Slider";
import Testimonial from "@/components/LandingPage/Testimonial";
import Work from "@/components/LandingPage/Work";
import React from "react";


const page = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Slider />
      <Work />
      <BentoGrid />
      <Testimonial/>
      <Footer />
    </>
  );
};

export default page;
