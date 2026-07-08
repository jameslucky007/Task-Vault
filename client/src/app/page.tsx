import Work from "../components/landing/Work";
import FAQ from "../components/landing/FAQ";
import About from "../components/landing/About";
import Testimonial from "../components/landing/Testimonial";
import Hero from "../components/landing/Hero";
import BentoGrid from "../components/landing/BentoGrid";
import Footer from "../components/landing/Footer";


const page = () => {
  return (
    <>
      <Hero />
      <Work />
      <BentoGrid />
      <Testimonial/>
      <FAQ />
      <About/>
      <Footer/>
    </>
  );
};

export default page;
