
import BentoGrid from "@/components/LandingPage/BentoGrid";
import Home from "@/components/LandingPage/Home";
import Slider from "@/components/LandingPage/Slider";
import Testimonial from "@/components/LandingPage/Testimonial";
import Work from "@/components/LandingPage/Work";
import React from "react";


const page = () => {
  return (
    <>
      <Home />
      <Slider />
      <Work />
      <BentoGrid />
      <Testimonial/>
    </>
  );
};

export default page;
