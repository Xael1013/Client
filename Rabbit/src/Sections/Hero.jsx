// Hero.jsx
import React from "react";


export default function Hero() {
  return (
    <section className="hm-hero" id='hero'>
      <div className="hm-content">
        <p className="hm-kicker">
          Home-grown rabbits, expert care, and trusted farm quality.
        </p>

        <h1 className="hm-title">

          <img
            src="/assets/rabbit.png"
            alt="Rabbit Logo"
            className="hero-rabbit hero-rabbit-mobile"
            />

          <span className="hm-titleLine">HIDDEN</span>
          <span className="hm-titleBottom">MOUNTAIN</span>
        </h1>

        <p className="hm-desc">
          Our rabbit farm raises healthy rabbits with{" "}
          <span className="hm-accent ">LOVE</span>,{" "}
          <span className="hm-accent ">CARE</span>, and{" "}
          <span className="hm-accent ">RESPONSIBLE</span> breeding practices.
          We provide quality rabbits and farm products while promoting{" "}
          <span className="hm-accent ">CLEAN</span>,{" "}
          <span className="hm-accent ">HUMANE</span>, and{" "}
          <span className="hm-accent ">SUSTAINABLE</span> farming.
        </p>
      </div>
    </section>
  );
}