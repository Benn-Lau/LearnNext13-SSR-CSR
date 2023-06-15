import HeroSection from "@/components/Mainpage/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>      
      <div className=" overflow-hidden flex flex-col items-center text-center"> Main page </div>
      <HeroSection />
    </main>
  );
}
