import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Components/Footer";
import Navbarcontent from "./Components/Nav";
import "bootstrap-icons/font/bootstrap-icons.css";
import Homepage from "./Components/Homepage/Homepage";

function App() {
  return (
    <section>
      <Navbarcontent />
      <Homepage />

      <Footer />
    </section>
  );
}

export default App;
