import "./App.css";
import { HeroSection } from "./Components/HeroSection";
import { Navbar } from "./Components/Navbar";
import { Range } from "./Components/FurnitureRange";
import { ProductSelection } from "./Components/OurProducts";
import { Inspiration } from "./Components/Inspo";
import { Footer } from "./Components/Footer";
function App() {
  return (
    <>
      <div className="font-roboto">
        <Navbar />
        <HeroSection />
        <Range />
        <ProductSelection />
        <Inspiration />
        <Footer />
      </div>
    </>
  );
}

export default App;
