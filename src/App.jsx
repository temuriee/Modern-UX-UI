import Testimotials from "./components/Testimotials";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimotials />
      <Footer />
    </div>
  );
}

export default App;
