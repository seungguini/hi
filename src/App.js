import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import WorkExperience from "./components/workexperience/WorkExperience";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

import "./app.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="sections">
        <Home />
        <WorkExperience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
