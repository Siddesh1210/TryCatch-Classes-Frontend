import React, { useEffect, useState } from "react";
import "../App.css";
import blogShape from "../assets/images/blog-shape.png";

const OurCourses = () => {
  const [allcourse, setAllCourse] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("http://localhost:8000/courses/top-courses", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    console.log(result);
    if (result.isOk) {
      setAllCourse(result.courses);
    }
  }

  return (
    <section className="section blog has-bg-image" id="courses" aria-label="blog">
      <div className="container">
        <p className="section-subtitle">Our Courses</p>
        <h2 className="h2 section-title">Top currated courses</h2>

        <ul className="grid-list">
          {allcourse !== null &&
            allcourse.map((course, index) => (
              <li key={index}>
                <div className="blog-card">
                  <figure className="card-banner img-holder has-after">
                    <img
                      src={course.imgUrl}
                      width="370"
                      height="370"
                      loading="lazy"
                      alt={course.title}
                      className="img-cover"
                    />
                  </figure>

                  <div className="card-content">
                    <a href="#" className="card-btn" aria-label="read more">
                      <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </a>

                    <a href="#" className="card-subtitle">
                      {course.title}
                    </a>

                    <h3 className="h3">
                      <a href="#" className="card-title">
                        {course.title}
                      </a>
                    </h3>

                    <ul className="card-meta-list">
                      <li className="card-meta-item">
                        <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
                        <span className="span">April 9th, 2024</span>
                      </li>
                      <li className="card-meta-item">
                        <ion-icon name="chatbubbles-outline" aria-hidden="true"></ion-icon>
                        <span className="span">Com. 10th</span>
                      </li>
                    </ul>

                    <p className="card-text">
                      Topics Covered: {course.topicCovered ? course.topicCovered.join(', ') : ''}
                    </p>
                  </div>
                </div>
              </li>
            ))}
        </ul>

        <img
          src={blogShape}
          width="186"
          height="186"
          loading="lazy"
          alt=""
          className="shape blog-shape"
        />
      </div>
      <div style={{display:"flex",justifyContent:"center",marginTop:"20px"}}>
      <button className="btn text-center">View More Courses</button>
      </div>
      
    </section>
  );
};

export default OurCourses;
