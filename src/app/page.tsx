
import Navbar from "./components/navbar";
import Product from "./components/product";
import About from "./components/about";
import Hero from "./components/hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Product />
      <About />
    </div>
  );
}
