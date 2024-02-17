import Features from "@/components/Features";
import HeaderContent from "@/components/HeaderContent";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Application from "@/components/Application";
import Testimonial from "@/components/Testimonial";
import Contact from "@/components/Contact";

export default function Main() {
  return (
    <main>
      <HeaderContent />
      <Features />
      <About />
      <Menu />
      <Application />
      <Testimonial />
      <Contact />
    </main>
  );
}
