import logo from "./logo.svg";
import "./App.css";
// import { Nav } from "./components/Nav";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Timeline from "./components/Timeline";
import Problems from "./components/Problems";
import Criteria from "./components/Criteria";
import Faq from "./components/Faq";

function App() {
  return (
    <>
      <div className="text-center">
        <Navbar />
        <Home />
        <Timeline />
        <Problems />
        <Criteria />
        <Faq />
      </div>
    </>
  );
}

export default App;
