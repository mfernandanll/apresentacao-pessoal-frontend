import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Hero } from "./pages/Hero";
import { Projects } from "./pages/Projects";
import { Skills } from "./pages/Skills";


function App() {
  return (
    <div className="min-h-screen bg-bg-white">
      <Header />
      <main className="container mx-auto p-6 text-bg-primary">
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
