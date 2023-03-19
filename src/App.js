import "./App.css";

import Home from "./Comphonent/Home";
import Destination from "./Comphonent/Destination";
import Price from "./Comphonent/Price";
import From from "./Comphonent/From";
import Footer from "./Comphonent/Footer";

function App() {
  return (
    <div className="App appBackground">
      <Home />
      <div>
        <Destination />
      </div>
      <div>
        <Price />
      </div>
      <div>
        <From />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
