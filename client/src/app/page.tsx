import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import BentoGrid from "../components/landing/BentoGrid";
import Work from "../components/landing/Work";
import About from "../components/landing/About";
import Testimonial from "../components/landing/Testimonial";
import Price from "../components/landing/Price";
import FAQ from "../components/landing/FAQ";
import Footer from "../components/landing/Footer";


const page = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Work />
      <BentoGrid />
      <Price />
      <FAQ />
      <Testimonial />
      <About />
      <Footer />
    </>
  );
};

export default Page;