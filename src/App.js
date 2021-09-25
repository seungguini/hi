import Topbar from "./components/topbar/Topbar";
import LandingSection from "./components/landingSection/LandingSection";
import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <LandingSection />
    </div>
  );
}

export default App;
