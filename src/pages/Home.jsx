import React from "react";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FaGithub, FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm Eli John Gachago</h1>
        <h3>Fullstack Software Engineer</h3>
        <p>
          Welcome to my portfolio! I'm passionate about building robust and
          scalable web applications. With expertise in both frontend and backend
          technologies, I strive to create seamless user experiences and
          efficient systems. Let's collaborate on your next project and bring
          your ideas to life!
        </p>
        <div className="btn-box">
          <a href="#">Hire me</a>
          <a href="#">Let's Talk</a>
        </div>
      </div>

      <div className="home-sci">
        <a href="#"><BiLogoFacebook /></a>
        <a href="#"><FaXTwitter /></a>
        <a href="#"><BiLogoLinkedin /></a>
        <a href="#"><FaGithub /></a>
      </div>
    </section>
  );
}
