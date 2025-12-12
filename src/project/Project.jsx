import React from "react";
import "./project.css";
import { motion } from "framer-motion";
import pro1 from "../assets/project-img/single-price-grid-component-master.jpg";
import pro2 from "../assets/project-img/recipe-page-main.jpg";
import pro3 from "../assets/project-img/fylo-data-storage-component-master.jpg";
import pro4 from "../assets/project-img/stats-preview-card-component-main.jpg";
import pro5 from "../assets/project-img/order-summary-component-main.jpg";
import pro6 from "../assets/project-img/3-column-preview-card-component-main.jpg";
import pro7 from "../assets/project-img/Simon-Says-Game.png";
import pro8 from "../assets/project-img/Calculator-app.jpg";
function Project() {
  const projects = [
    {
      img: pro1,
      liveDemo:
        "https://prudence2024.github.io/single-price-grid-component-master/",
      code: "https://github.com/prudence2024/single-price-grid-component-master/",
    },
    {
      img: pro2,
      liveDemo: "https://prudence2024.github.io/recipe-page-main/",
      code: "https://github.com/prudence2024/recipe-page-main",
    },
    {
      img: pro3,
      liveDemo: "https://prudence2024.github.io/fylo-data-storage-component-master/",
      code: "https://github.com/prudence2024/fylo-data-storage-component-master",
    },
    {
      img: pro4,
      liveDemo: "https://prudence2024.github.io/stats-preview-card-component-main",
      code: "https://github.com/prudence2024/stats-preview-card-component-main",
    },
    {
      img: pro5,
      liveDemo: "https://prudence2024.github.io/order-summary-component-main",
      code: "https://github.com/prudence2024/order-summary-component-main",
    },
    {
      img: pro6,
      liveDemo: "https://prudence2024.github.io/3-column-preview-card-component-main/",
      code: "https://github.com/prudence2024/3-column-preview-card-component-main",
    },
    {
      img: pro7,
      liveDemo: "https://prudence2024.github.io/Tik-Tak-Toe-game/",
      code: "https://github.com/prudence2024/Tik-Tak-Toe-game",
    }, {
      img: pro8,
      liveDemo: "https://prudence2024.github.io/digital_calculator/",
      code: "https://github.com/prudence2024/digital_calculator",
    },
  ];

  return (
    <section id="project" className="project-section">
      <h1 className="project-title">
        <span className="col short"></span>
        <span className="col medium"></span>
        <span className="col tall"></span>
        My Projects
        <span className="col tall"></span>
        <span className="col medium"></span>
        <span className="col short"></span>
      </h1>


      <motion.div whileTap={{ cursor: "grabbing" }}>
        <motion.div
          className="inner-carousel"
          drag="x"
          dragConstraints={{ right: 0, left: -2700 }}
        >
          {projects.map((project, index) => (
            < motion.div className="project-card" key={index.name} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card-image">
                <img src={project.img} alt="Project Preview" />
              </div>
              <div className="card-buttons">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn live-btn"
                >
                  Live Demo
                </a>
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="btn code-btn"
                >
                  View Code
                </a>
              </div>

            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
}

export default Project;
