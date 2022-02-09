import React from "react";
import './About.css';

function About(props) {
  console.log(props);
  return (
    <div className="about__container">
      <span>
        클론코딩 영화평점 웹서비스
      </span>
      <span>updated.2022/02/09</span>
    </div>
  );
}

export default About;