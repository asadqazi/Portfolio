import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            I'm <b>Muhammad Asad Ullah Khan</b>, a results-driven and analytical
            software engineer with <b>10 years</b> of experience in Android
            mobile application architecture, technical analysis, and
            object-oriented design and development. I'm a Mobile Applications
            developer have more than 10 years of development experience.
          </p>
          <br />
          <p>
            With strong technical expertise and effective communication skills,
            I specialize in:
          </p>
          <p>
            ✅ Application Development – Coding, testing, and debugging
            high-performance mobile applications.
          </p>
          <p>
            ✅ Architecture & Design – Extensive experience with MVC, MVP, MVVM,
            and Clean Architecture.
          </p>
          <p>
            ✅ Problem Solving & Technical Support – Skilled in diagnosing and
            resolving complex technical challenges.
          </p>
          <p>
            ✅ Cross-Platform Development – Proficient in iOS and React Native.
          </p>
          <p>
            ✅ Application Configuration & Maintenance – Ensuring smooth
            deployment, maintenance, and support.
          </p>
          <br />
          <p>
            Passionate about building scalable, efficient, and user-friendly
            applications, I thrive in dynamic environments where innovation
            meets excellence.
          </p>
          <br />
          <p>Let’s connect and build something amazing! 🚀</p>
        </div>

        <div>
          <Tilt>
            <Lottie
              className="illustration"
              animationData={Coder}
              loop={true}
            />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="MongoDb" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Javascript" />
        <Skills skill="C++" />
        <Skills skill="Postman" />
        <Skills skill="Figma" />
        <Skills skill="Vercel" />
        <Skills skill="Npm" />
        <Skills skill="Bootstrap" />
      </div>
    </>
  );
};

export default About;
