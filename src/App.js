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
        <Carousel slides={slides}>
          <div>123</div>

          <img className="w-20 h-20" src="./logo.svg" alt="logo"></img>
          <div>
            <h1 className="font-semibold">The third slide</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis
            </p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default App;
