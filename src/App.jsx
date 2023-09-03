import logo from "./logo.svg";
import "./App.css";
// import { Nav } from "./components/Nav";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <div className="text-center">
        <Navbar />
        <Home />
        <Timeline />
      </div>
    </>
  );
}

export default App;
