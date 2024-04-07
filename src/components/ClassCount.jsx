import React from 'react';
import '../App.css'

const ClassCount = () => {
  return (
    <section className="section stats" aria-label="stats">
      <div className="container">
        <ul className="grid-list">
          <li>
            <div className="stats-card" style={{ color:"#1ab79d",backgroundColor:"#e8f7f5" }}>
              <h3 className="card-title">25k</h3>
              <p className="card-text">Student Enrolled</p>
            </div>
          </li>
          <li>
            <div className="stats-card" style={{ color:"#ee4962" ,backgroundColor:"#fdecef"}}>
              <h3 className="card-title">No.1 </h3>
              <p className="card-text">Awarded Institute</p>
            </div>
          </li>
          <li>
            <div className="stats-card" style={{  color:"#8f57ff" ,backgroundColor:"#f3eeff" }}>
              <h3 className="card-title">100%</h3>
              <p className="card-text">Placement Record</p>
            </div>
          </li>
          <li>
            <div className="stats-card" style={{  color:"#f8b720" ,backgroundColor:"#fef7e8"}}>
              <h3 className="card-title">50+</h3>
              <p className="card-text">Offline Courses</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ClassCount;
