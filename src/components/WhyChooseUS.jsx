import React from "react";
import Category1 from "../assets/images/category-1.svg";
import Category2 from "../assets/images/category-2.svg";
import Category3 from "../assets/images/category-3.svg";
import Category4 from "../assets/images/category-4.svg";
import "../App.css";

const WhyChooseUS = () => {
  return (
    <section className="section category" aria-label="category" id="about">
      <div className="container">
        <p className="section-subtitle">Why Choose US</p>

        <h2 className="h2 section-title">
          Top <span className="span">Notch</span> Classes For Best Learning.
        </h2>

        <p className="section-text">
          Delve with practicle classes to excellence learning
        </p>

        <ul className="grid-list">
          <li>
            <div
              className="category-card"
              style={{ backgroundColor: "#e8f7f5" }}
            >
              <div className="card-icon">
                <img
                  src={Category1}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Online Degree Programs"
                  className="img"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Ample Study Area
                </a>
              </h3>

              <p className="card-text">
                Spacious Study Zones: Roomy Areas for Concentration Leanring.
              </p>
            </div>
          </li>

          <li>
            <div
              className="category-card"
              style={{ backgroundColor: "#fdecef" }}
            >
              <div className="card-icon">
                <img
                  src={Category2}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Non-Degree Programs"
                  className="img"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  100% Placement
                </a>
              </h3>

              <p className="card-text">
                Empowering futures: Ensuring every graduate secures success.
              </p>
            </div>
          </li>

          <li>
            <div
              className="category-card"
              style={{ backgroundColor: "#eceffc" }}
            >
              <div className="card-icon">
                <img
                  src={Category3}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Off-Campus Programs"
                  className="img"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Live Projects
                </a>
              </h3>

              <p className="card-text">
                Hands-On Learning: Real-world Experience through Live Projects
              </p>
            </div>
          </li>

          <li>
            <div
              className="category-card"
              style={{ backgroundColor: "#fef7e8" }}
            >
              <div className="card-icon">
                <img
                  src={Category4}
                  width="40"
                  height="40"
                  loading="lazy"
                  alt="Hybrid Distance Programs"
                  className="img"
                />
              </div>

              <h3 className="h3">
                <a href="#" className="card-title">
                  Experience Faculties
                </a>
              </h3>

              <p className="card-text">
                Seasoned Experts: Our Faculty Brings Years of Industry
                Experience.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChooseUS;
