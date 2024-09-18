import About from "./components/mainPage/about";
import BackToTop from "./components/mainPage/backToTop";
import ContactForm from "./components/mainPage/contact";
import Footer from "./components/mainPage/footer";
import Hero from "./components/mainPage/hero";
import Navbar from "./components/mainPage/nav";
import Projects from "./components/mainPage/project";
import Skills from "./components/mainPage/skills";

export default function Home() {
  return (
    <div className="w-full relative">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <ContactForm />
      <Footer />
      <BackToTop />
    </div>
  );
}
