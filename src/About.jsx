import React from "react";
import "./About.css";
import abhi from "../src/image/Abhi.JPEG";
import sumit from "../src/image/sumit.jpg";
import darshan from "../src/image/photo.jpg";
export default function About() {
  return (
    <div>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>Some text about who we are and what we do.</p>
        <p>
          Resize the browser window to see that this page is responsive by the
          way.
        </p>
      </div>

      <div className="row">
        <div className="column">
          <div className="card">
            <img src={abhi} alt="Abhi" height="500px" />
            <div className="container">
              <h2>Abhi Mavani</h2>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={sumit} alt="Sumit" height="500px" />
            <div className="container">
              <h2>sumit Bharodiya</h2>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img src={darshan} alt="Bapu" height="500px" />
            <div className="container">
              <h2>Darshan </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
