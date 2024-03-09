import React from "react";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
          <Link to="mailto:elijohnmwoho@gmail.com">Hire me</Link>
          <Link to="https://wa.me/+254745662574">Let's Talk</Link>
        </div>
      </div>

      <div className="home-sci" id="contacts">
        <Link to="https://twitter.com/Man_Njor0">
          <FaXTwitter />
        </Link>
        <Link to="https://www.linkedin.com/in/eli-john-gachago-306a23238/">
          <BiLogoLinkedin />
        </Link>
        <Link to="https://github.com/ManNjoro">
          <FaGithub />
        </Link>
      </div>
    </section>
  );
}
