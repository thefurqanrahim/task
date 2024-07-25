import Navbar from "@/components/Navbar";
import Image from "next/image";
import Banner from "../components/Banner"
import ThirdSection from "@/components/ThirdSection";
import Footer from "@/components/Footer";
import SecondSection from "@/components/SecondSection";

export default function Home() {
  return (
    <>
      <div className="container mx-auto lg:px-16 md:px-0">
        <Navbar />
        <Banner />
        <SecondSection />
        <ThirdSection />
      </div>
      <Footer />
    </>
  );
}
