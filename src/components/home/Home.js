import React, { useRef, useState, useEffect, useLayoutEffect } from "react";
import "./home.scss";

import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

function typeOccupation(target, text, duration) {
  return gsap.to(target, {
    color: "purple",
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
        "<1"
      )
      .to(cursor.current, {
        opacity: 0,
        ease: "power0",
        repeat: -1,
        yoyo: true,
        repeatDelay: 0.5,
      });

    occupationTimeline.current
      .add(typeOccupation(occupation.current, "an CS Major @ NYU", 2))
      .add(typeOccupation(occupation.current, "a NLP Researcher", 1))
      .add(typeOccupation(occupation.current, "a Software Developer", 1))
      .add(typeOccupation(occupation.current, "a CS Teaching Assistant", 1))
      .repeat();

    masterTimeline.current
      .add(introTimeline.current)
      .add(occupationTimeline.current, "+= 1");
    //.paused(false);
  }, []); // The empty array [] has this run only on the first render

  // runs after first render and every time `someProp` changes
  // useEffect(() => {
  //   gsap.to(q(".box-2"), { rotation: "+=360" });
  // }, [someProp]); // I could use this to have the text change when a certain page is selected

  return (
    <div className="home" id="home">
      <div className="landingText">
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
