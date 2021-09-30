import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import "./home.scss";

import moon from "./../../images/moon.png";
import stars from "./../../images/stars.png";
import mountains_behind from "./../../images/mountains_behind.png";
import mountains_front from "./../../images/mountains_front.png";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function typeOccupation(target, text, duration) {
  return gsap.to(target, {
    text: text,
    duration: duration,
    delay: 1,
    ease: "power1.easeInOut",
    yoyo: true,
    repeatDelay: 1,
    repeat: 1,
  });
}

export default function Home() {
  // Ref for GSAP animations
  const hiText = useRef();
  const iAmAText = useRef();
  const cursor = useRef();
  const occupation = useRef();

  const masterTimeline = useRef(gsap.timeline());
  const introTimeline = useRef(gsap.timeline());
  const occupationTimeline = useRef(gsap.timeline());

  //masterTimeline.current.add(introTimeline.current.paused(false));

  // Wait until DOM has been rendered
  useEffect(() => {
    introTimeline.current
      .from(hiText.current, {
        y: "+=10",
        opacity: 0,
        duration: 1.5,
        ease: "power4.easeInOut",
      })
      .from(
        iAmAText.current,
        {
          y: "+=10",
          opacity: 0,
          duration: 1.5,
          ease: "power4.easeInOut",
        },
        "<2"
      )
      .to(cursor.current, {
        opacity: 0,
        ease: "power0",
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.5,
      });

    occupationTimeline.current
      .add(typeOccupation(occupation.current, "a Software Engineer", 2))
      .add(typeOccupation(occupation.current, "a ML Researcher", 1.5))
      .add(typeOccupation(occupation.current, "a CS Major @ NYU", 1.5))
      .add(typeOccupation(occupation.current, "a CS Teaching Assistant", 2))
      .repeat(-1);

    masterTimeline.current
      .add(introTimeline.current)
      .add(occupationTimeline.current, "<3");
    //.paused(false);
  }, []); // The empty array [] has this run only on the first render

  // runs after first render and every time `someProp` changes
  // useEffect(() => {
  //   gsap.to(q(".box-2"), { rotation: "+=360" });
  // }, [someProp]); // I could use this to have the text change when a certain page is selected

  return (
    <div className="home" id="home">
      <section>
        <img src={stars} id="stars"></img>
        <img src={moon} id="moon"></img>
        <img src={mountains_behind} id="mountains_behind"></img>
        <img src={mountains_front} id="mountains_front"></img>
      </section>
      <div className="landingText">
        <div className="dimmer"></div>
        <h1 ref={hiText}>Hi, I'm Seunggun</h1>
        <div ref={iAmAText} id="wrapper">
          <span>I am&nbsp;</span>
          <span ref={occupation}></span>
          <span ref={cursor}>|</span>
        </div>
      </div>
    </div>
  );
}
