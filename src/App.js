import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Services from "./components/Services";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Services />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
