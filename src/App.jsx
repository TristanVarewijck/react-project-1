import "./App.css";
// Components
import Photo from "./components/Photo";
import Info from "./components/Info";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Photo />
        <Info />
        <Footer />
      </div>
    </div>
  );
}

export default App;
