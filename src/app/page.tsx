import Header from "./components/Header";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Plans from "./components/Plans";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="mt-16">
        <Carousel />
        <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row gap-6">
          <Plans />
          <About />
        </div>
      </main>
    </div>
  );
}