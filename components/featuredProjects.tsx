"use client";

import { useState, useEffect, useRef, useCallback } from "react";

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
    title: "SK SALAAN YOUTH PROFILING",
    description:
      "Led the development of an offline-first youth profiling system. Designed for remote areas with poor connectivity, enabling data collection even without internet access. Helped reduce manual data errors by 65%.",
    image: "/images/sksalaan-preview.jpg",
    techStack: ["ReactJS", "Laravel", "Flutter", "MySQL", "SQLite", "XAMPP"],
    demoUrl: "#",
    sourceConfidential: true,
  },
  {
    title: "POS SYSTEM - CHEF JOSE COMPANY",
    description:
      "Started as the backend developer in a 3-person team, building database functions and transaction logic. Stepped up as a full-stack developer at the final phase, completing both frontend and backend to deliver the project. Streamlined inventory, product and purchase tracking.",
    image: "/images/pos-preview.jpg",
    techStack: ["PHP", "JavaScript", "jQuery", "MySQL"],
    sourceConfidential: true,
  },
  {
    title: "LIBRARY SYSTEM",
    description:
      "Worked as the frontend developer in a 2-person team, focusing on creating a clean and usable interface. Handled the UI while my teammate managed the backend.",
    image: "/images/library-preview.jpg",
    techStack: ["PHP", "MySQL", "HTML", "CSS"],
    sourceConfidential: true,
  },
  {
    title: "OJT MANAGEMENT SYSTEM",
    description:
      "Partnered to build an OJT management system. Contributed core features to the project and collaborated through GitHub to keep our work organized and consistent.",
    image: "/images/ojt-preview.jpg",
    techStack: ["PHP", "JavaScript", "MySQL", "GitHub"],
    sourceConfidential: true,
  },
  {
    title: "ENROLLMENT SYSTEM - STA. MARIA ES",
    description:
      "Built and optimized the enrollment system, making it scalable and efficient while completing the project end-to-end. The system now supports smoother registration and administrative processes for the school.",
    image: "/images/enrollment-preview.jpg",
    techStack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    sourceConfidential: true,
  },
];

export default function FeaturedProjects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % projects.length);
    }, 4000);
  }, []);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoPlay]);

  const goTo = (index: number) => {
    setActiveIndex(index);
    startAutoPlay();
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
    startAutoPlay();
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
    startAutoPlay();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
    }
  };

  const getCardStyle = (index: number) => {
    let offset = index - activeIndex;

    // Handle wrap-around for smooth circular feel
    if (offset > Math.floor(projects.length / 2)) offset -= projects.length;
    if (offset < -Math.floor(projects.length / 2)) offset += projects.length;

    const isActive = offset === 0;
    const absOffset = Math.abs(offset);

    if (isMobile) {
      return {
        transform: `translateX(${offset * 105}%) scale(${isActive ? 1 : 0.85})`,
        opacity: absOffset > 1 ? 0 : isActive ? 1 : 0.4,
        zIndex: isActive ? 10 : 5 - absOffset,
        pointerEvents: (isActive ? "auto" : "none") as React.CSSProperties["pointerEvents"],
      };
    }

    return {
      transform: `translateX(${offset * 115}%) scale(${isActive ? 1 : 0.82}) rotateY(${offset * -8}deg)`,
      opacity: absOffset > 2 ? 0 : isActive ? 1 : absOffset === 1 ? 0.55 : 0.25,
      zIndex: isActive ? 10 : 5 - absOffset,
      pointerEvents: (isActive ? "auto" : "none") as React.CSSProperties["pointerEvents"],
    };
  };

  return (
    <section className="projects-section" id="projects">
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

        <div
          className="projects-carousel"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="carousel-card"
              style={getCardStyle(index)}
            >
              <ProjectCard project={project} />
            </div>
          ))}

          {/* Navigation arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goPrev}
            aria-label="Previous project"
            type="button"
          >
            <i className="fas fa-chevron-left" />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goNext}
            aria-label="Next project"
            type="button"
          >
            <i className="fas fa-chevron-right" />
          </button>
        </div>

        {/* Dots indicator */}
        <div className="carousel-dots">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === activeIndex ? "active" : ""}`}
              onClick={() => goTo(index)}
              aria-label={`Go to project ${index + 1}`}
              type="button"
            />
          ))}
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
    </section>
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
