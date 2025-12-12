import React from 'react'
import aboutImg from "../assets/Prudence.jpeg"
import "./about.css"
import { MyButton } from '../button/Button'
import PrudenceCV from "../assets/Prudence_Okwubor_CV.pdf"

function About() {
  return (
    <>
      <section id='about' className='about-section'>
        <h1 className="about-title">

          <span className="col short"></span>
          <span className="col medium"></span>
          <span className="col tall"></span>
          About Me
          <span className="col tall"></span>
          <span className="col medium"></span>
          <span className="col short"></span>
        </h1>

        <div className="about-container">
          {/* Left side  */}

          <div className="about-img" data-aos="fade-right">
            <img src={aboutImg} alt="Prudence" />
          </div>
          {/* Right side  */}
          <div className="about-text" data-aos="fade-left" >
            <p className='Prudence_CV'>
              <h2>Who I am 😎</h2>
              Hi, I’m  <strong>Prudence Okwubor</strong> — a web developer who enjoys turning simple ideas into smooth, functional, and visually appealing experiences on the internet. What started as curiosity has grown into a real passion for understanding how modern websites work and how great design and solid code come together.

I’m currently focused on sharpening my front-end skills, exploring frameworks, and learning how to build interfaces that feel intuitive and clean. I’m also expanding into backend development so I can eventually work across the full stack and bring complete projects to life from start to finish.

What keeps me excited about tech is the constant growth. There’s always something new to learn, a better way to solve a problem, or a creative approach to try. Every challenge pushes me to improve and think differently.

When I’m not coding, I like exploring creative hobbies, checking out new tools, and finding inspiration in everyday things. I enjoy connecting with people, learning from their experiences, and building things that make a small difference in someone’s day.
            </p>



            <MyButton style={{
              width: "200px",
              textDecoration: "none"
            }} as="a" href={PrudenceCV} download>
              Download CV <i className="fa-solid fa-download"></i>
            </MyButton>

          </div>
        </div>
      </section>
    </>
  )
}

export default About
