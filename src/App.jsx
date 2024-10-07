import { Header } from "./components/Header";
import { About } from "./pages/About";
import { Hero } from "./pages/Hero";


function App() {
  return (
    <div className="min-h-screen bg-bg-white">
      <Header />
      <main className="container mx-auto p-6 text-bg-primary">
        <Hero/>
        <About/>
      </main>
    </div>
  );
}

export default App;
