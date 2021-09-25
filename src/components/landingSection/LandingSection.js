import Home from "../home/Home";
import WorkExperience from "../workexperience/WorkExperience";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./landingSection.scss";

function LandingSection() {
  return (
    <div className="sections">
      <Home />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  );
}

export default LandingSection;
