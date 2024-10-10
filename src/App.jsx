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
    <div className="min-h-screen bg-bg-white">
      <Header />
      <main className="container mx-auto p-6 text-bg-primary">
        <SocialLinks />
        <ScrollTopButton isPageScrolled={isPageScrolled}/>
        <Hero/>
        <About/>
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
