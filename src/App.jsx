import { Element } from "react-scroll";
import { Header } from "./components/Header";
import { ScrollTopButton } from "./components/ScrollTopButton";
import { SocialLinks } from "./components/SocialLinks";
import { About } from "./sections/About";
import { Contact } from "./sections/Contact";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { usePageScroll } from "./utils/usePageScroll";


function App() {
  const isPageScrolled = usePageScroll(400); 

  return (
    <div className="min-h-screen bg-custom-gradient">
      <Header isPageScrolled={isPageScrolled}/>
      <main className="container mx-auto p-6 text-bg-primary">
        <SocialLinks />
        <ScrollTopButton isPageScrolled={isPageScrolled}/>
        
        <Element name='hero'>
          <Hero />
        </Element>
        
        <Element name='about'>
          <About />
        </Element>

        <Element name='skills'>
          <Skills />
        </Element>

        <Element name='projects'>
          <Projects />
        </Element>

        <Element name='contact'>
          <Contact />
        </Element>
      </main>
    </div>
  );
}

export default App;
