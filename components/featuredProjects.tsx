"use client";

import { useState, useEffect, useRef } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  sourceConfidential?: boolean;
}

const projects: Project[] = [
  {
    title: "SKSALAAN YOUTH PROFILING",
    description:
      "Designed to help Sangguniang Kabataan officials gather and manage youth information more easily, especially in barangays with little to no internet access. The system allows officials to collect youth data offline during field activities and upload it to a central database once a stable connection is available.",
    image: "/images/sksalaan-preview.jpg",
    techStack: ["ReactJS", "Laravel", "Flutter", "MySQL", "SQLite", "XAMPP"],
    demoUrl: "#",
    sourceConfidential: true,
  },
];

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (projects.length <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="projects-section" id="projects">
      <div className="projects-bg" />
      <div className="projects-content">
        <div className="projects-header">
          <h1>
            <span className="projects-icon">
              <i className="fa-solid fa-lightbulb" />
            </span>{" "}
            Featured <span className="text-purple">Projects</span>
          </h1>
          <p>
            <span className="dot-accent" />{" "}
            <span className="text-purple">
              Sharing some of the projects
            </span>{" "}
            {"I've worked on, from web and app development to creative solutions using modern technologies."}
          </p>
        </div>

        <div className="projects-carousel" ref={containerRef}>
          {/* Render multiple cards for carousel effect */}
          {projects.length === 1 ? (
            <SingleProjectView project={projects[0]} />
          ) : (
            projects.map((project, index) => {
              const offset = index - activeIndex;
              return (
                <div
                  key={index}
                  className="carousel-card"
                  style={{
                    transform: isMobile
                      ? `translateX(${offset * 105}%)`
                      : `translateX(${offset * 110}%) scale(${offset === 0 ? 1 : 0.85}) rotateY(${offset * -5}deg)`,
                    opacity: Math.abs(offset) > 1 ? 0.3 : offset === 0 ? 1 : 0.6,
                    zIndex: offset === 0 ? 10 : 5,
                  }}
                >
                  <ProjectCard project={project} />
                </div>
              );
            })
          )}
        </div>
      </div>

      {/* Floating particles */}
      <div className="projects-particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

function SingleProjectView({ project }: { project: Project }) {
  return (
    <div className="single-project-view">
      {/* Left tilted card */}
      <div className="tilted-card tilted-left">
        <ProjectCard project={project} />
      </div>
      {/* Center card */}
      <div className="center-card">
        <ProjectCard project={project} />
      </div>
      {/* Right tilted card */}
      <div className="tilted-card tilted-right">
        <ProjectCard project={project} />
      </div>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-info">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-tech">
          {project.techStack.map((tech, i) => (
            <span key={i} className="tech-tag">
              {tech}
            </span>
          ))}
        </div>
        <div className="project-actions">
          {project.sourceConfidential && (
            <span className="confidential">
              <i className="fa-solid fa-lock" /> Source code is confidential
            </span>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              className="demo-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Demo <i className="fa-solid fa-circle-play" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
