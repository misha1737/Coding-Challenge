import Header from "./Components/Header";
import Carousel from "./Components/Carousel";
function App() {
  const slides = [
    {
      image: null,
      title: "First Slide",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ",
    },
    {
      image: "./logo.svg",
      title: null,
      text: null,
    },
    {
      image: "./tailwindcss.svg",
      title: "The third slide",
      text: null,
    },
  ];
  return (
    <div>
      <Header />
      <div className="flex  items-center justify-center">
        <Carousel slides={slides} />
      </div>
    </div>
  );
}

export default App;
