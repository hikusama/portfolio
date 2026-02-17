"use client";

export default function EducationCerts() {
  return (
    <div className="edu-section" id="education">
      <div className="edu-bg" />
      <div className="edu-content">
        <div className="edu-header">
          <h1>
            <span className="edu-icon">
              <i className="fa-solid fa-graduation-cap" />
            </span>{" "}
            Education <span className="text-purple">{"& Certifications"}</span>
          </h1>
          <p>
            <span className="dot-accent" />{" "}
            <span className="text-purple">
              Highlighting the programs and courses
            </span>{" "}
            that shaped my skills and supported my hands-on projects.
          </p>
        </div>

        <div className="edu-grid">
          {/* Education Column */}
          <div className="edu-card">
            <div className="edu-card-header">
              <i className="fa-solid fa-graduation-cap" />
              <h2>Education</h2>
            </div>
            <div className="edu-timeline">
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>Bachelor of Science in Information Technology</h3>
                  <p className="institution">
                    Zamboanga Peninsula Polytechnic State University at Baliwasan,
                    Zamboanga City
                  </p>
                  <p className="date">June 2022 - April 2026 (Present)</p>
                  <p className="coursework">
                    Relevant Coursework: Object-Oriented Programming, Data Structures
                    and Algorithms, Database Management Systems, Web Systems and
                    Technologies, Operating Systems, Computer Networks, Software
                    Engineering, Systems Analysis and Design, Information Assurance and
                    Security, Capstone Project
                  </p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <h3>Senior High School (ICT)</h3>
                  <p className="institution">
                    Manicahan National High School at Manicahan, Zamboanga City
                  </p>
                  <p className="date">June 2022 - April 2026 (Present)</p>
                  <p className="coursework">
                    Relevant Coursework: Computer Networking (Client-Server Setup), LAN
                    Cabling and Network Installation, CCTV Installation and
                    Configuration, Basic Electrical Systems and Wiring, Network
                    Troubleshooting and Maintenance
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates Column */}
          <div className="cert-card">
            <div className="cert-card-header">
              <i className="fa-solid fa-award" />
              <h2>Certificates</h2>
            </div>
            <div className="cert-list">
              <div className="cert-item">
                <div className="cert-bar" />
                <div className="cert-content">
                  <h3>
                    {"On-the-Job Training (OJT) \u2013 Technical Support"}
                  </h3>
                  <p className="cert-place">
                    {"Accreditation Center, \u2014 248 hours (2023)"}
                  </p>
                  <p className="cert-desc">
                    Assisted staff and users with day-to-day technical concerns,
                    including printer troubleshooting, auditing documents, system
                    setup, and general IT support tasks.
                  </p>
                </div>
              </div>

              <div className="cert-item">
                <div className="cert-bar" />
                <div className="cert-content">
                  <h3>
                    {"On-the-Job Training (OJT) \u2013 Technical Support"}
                  </h3>
                  <p className="cert-place">
                    {"AABN (Assault Armor Battalion), Zamboanga City Philippines \u2014 248 hours (2024)"}
                  </p>
                  <p className="cert-desc">
                    Supported office operations by helping set up and maintain
                    computer systems, assisting with basic networking tasks, and
                    resolving common technical issues.
                  </p>
                </div>
              </div>

              <div className="cert-item">
                <div className="cert-bar" />
                <div className="cert-content">
                  <h3>
                    {"TESDA National Certificate II (NC II) \u2013 Computer Systems Servicing (CSS)"}
                  </h3>
                  <p className="cert-place">
                    CADDMAX INSTITUTE OF TECHNOLOGY, Zamboanga City Philippines - 2021
                  </p>
                  <p className="cert-desc">
                    Gained hands-on experience in client-server setup, computer
                    hardware servicing, network installation, and system maintenance.
                  </p>
                </div>
              </div>

              <div className="cert-item">
                <div className="cert-bar" />
                <div className="cert-content">
                  <h3>
                    {"Educational Tour \u2013 Cebu City (Technology Industry Exposure)"}
                  </h3>
                  <p className="cert-place">CEBU City, Philippines - 2025</p>
                  <p className="cert-desc">
                    Took part in an educational tour to technology-focused companies,
                    gaining real-world exposure to IT environments, workplace
                    practices, and current industry trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="edu-particles">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 3 + 3}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
