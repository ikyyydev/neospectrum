import "./global.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ThemeShowcase from "./components/ThemeShowcase";
import ThemePreview from "./components/ThemePreview";

function App() {
  return (
    <>
      <main className="bg-gray-900 text-white font-sans min-h-screen">
        <Hero />
        <ThemePreview />
        <ThemeShowcase />
        <Features />
        <Footer />
      </main>
    </>
  );
}

export default App;
