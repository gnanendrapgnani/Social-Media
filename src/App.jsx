import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBars from "./components/SideBars";

function App() {
  return (
    <>
      <div className="conatiner">
        <SideBars />
        <div className="content">
          <Header />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
