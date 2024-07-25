import Navbar from "@/components/Navbar";
import Image from "next/image";
import Banner from "../components/Banner"
import ThirdSection from "@/components/ThirdSection";
import Footer from "@/components/Footer";
import SecondSection from "@/components/SecondSection";
import Union from "../assets/Union.png"

export default function Home() {
  return (
    <div className="relative" >
      <div className="w-full h-auto absolute z-[-1] mt-[-28px]">
        <Image
          src={Union}
          alt="background"
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="container mx-auto lg:px-16 md:px-0">
        <Navbar />
        <Banner />
        <SecondSection />
        <ThirdSection />
      </div>
      <Footer />
    </div>
  );
}
