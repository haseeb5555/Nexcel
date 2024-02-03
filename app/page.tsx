import AboutUs from "@/components/AboutUs";
import Hero from "@/components/Hero";
import OurClients from "@/components/OurClients";
import Services from "@/components/Services";
import Testonimals from "@/components/Testonimals";
import Example from "@/components/WhyUs";
import Flex from "@/components/flex";

export default function Home() {
  return (
    <div  className="flex flex-col justify-center items-center gap-4 ">

      <Hero />
      <div className="w-full h-[1px] bg-pink-950 -mt-20 "></div>
      <AboutUs/>
      <div className="w-full h-[1px] bg-pink-950  "></div>
       <Flex/>
       <div className="w-full h-[1px] bg-pink-950  "></div>
       <OurClients/>
       <div className="w-full h-[1px] bg-pink-950  "></div>
      <Services/>
      <div className="w-full h-[1px] bg-pink-950  "></div>
      <Testonimals/>
      <div className="w-full h-[1px] bg-pink-950  mt-10"></div>
      <Example/>
    </div>
  );
}
