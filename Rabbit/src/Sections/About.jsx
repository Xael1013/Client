// About.jsx
import React from "react";


export default function About() {
  return (
    <section className="about" id="about">
      {/* Decorative top green wave */}
      <div className="about-top" aria-hidden="true" />

      <div className="about-inner">
        <h2 className="about-title">ABOUT US!</h2>

        <div className="about-grid">
          {/* LEFT: Photo collage */}
          <div className="about-collage">
            <div className="about-mainPhoto">
              <img src="/assets/rabbit1.jpg" />
            </div>

            <div className="about-polaroid about-polaroid-left">
              <img src="/assets/rabbit2.jpg"  />
            </div>

            <div className="about-polaroid about-polaroid-right">
              <img src="/assets/rabbit3.jpg" />
            </div>
          </div>

          {/* RIGHT: Text card */}
          <div className="about-card">
            <p>
              Our rabbit farm is committed to raising healthy, happy rabbits in a
              clean and caring environment. We focus on responsible breeding and
              proper nutrition to ensure strong, high-quality rabbits with good
              temperament. Every rabbit is handled with care to promote wellness
              and humane farming practices.
            </p>

            <p>
              We also aim to support local families and farmers by providing
              trusted farm products and reliable service. With passion and
              dedication, we continue to grow while keeping animal welfare and
              quality as our top priorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}