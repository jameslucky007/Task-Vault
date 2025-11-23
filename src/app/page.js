import BentoGrid from "@/components/BentoGrid";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import Slider from "@/components/Slider";
import Testamonial from "@/components/Testamonial";
import Work from "@/components/Work";
import React from "react";


const page = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Slider />
      <Work />
      <Features />
      <BentoGrid />
      <Testamonial />
      <Footer />
    </>
  );
};

export default page;
