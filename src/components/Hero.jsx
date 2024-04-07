import React from "react";
import "../App.css";
import bannerImage1 from "../assets/images/hero-banner-1.jpg";
import bannerImage2 from "../assets/images/hero-banner-2.jpg";
import heroShape1 from "../assets/images/hero-shape-1.svg";
import heroShape2 from "../assets/images/hero-shape-2.png";
import backgroundImage from "../assets/images/hero-bg.svg";

const Hero = () => {
  return (
    <section
      className="section hero has-bg-image"
      id="home"
      aria-label="home"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <div className="container">
        <div className="hero-content">
          <h1 className="h1 section-title">
            The Best Courses to <span className="span">Enroll</span> for
            Everyone
          </h1>

          <p className="hero-text">
          Learn to Code, Land Your Dream Job. Get 100% Practical trainings with Placement Guarantee.
          </p>

          <a href="#" className="btn has-before">
            <span className="span">Find courses</span>

            <ion-icon
              name="arrow-forward-outline"
              aria-hidden="true"
            ></ion-icon>
          </a>
        </div>

        <figure className="hero-banner">
          <div className="img-holder one" style={{ '--width': 270, '--height': 300 }}>
            <img
              src={bannerImage1}
              width="270"
              height="300"
              alt="hero banner"
              className="img-cover"
            />
          </div>

          <div className="img-holder two" style={{ '--width': 240, '--height': 370 }}>
            <img
              src={bannerImage2}
              width="240"
              height="370"
              alt="hero banner"
              className="img-cover"
            />
          </div>

          <img
            src={heroShape1}
            width="380"
            height="190"
            alt=""
            className="shape hero-shape-1"
          />

          <img
            src={heroShape2}
            width="622"
            height="551"
            alt=""
            className="shape hero-shape-2"
          />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
