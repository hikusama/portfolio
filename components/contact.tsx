"use client";

export default function Contact() {
  return (
    <div className="contact-section" id="contact">
      <div className="contact-bg" />
      <div className="contact-content">
        <div className="contact-header">
          <h1>
            <span className="contact-icon">
              <i className="fa-solid fa-address-card" />
            </span>{" "}
            Get In <span className="text-purple">Touch</span>
          </h1>
          <p>
            <span className="dot-accent" />{" "}
            <span className="text-purple">
              {"Feel free to reach out"}
            </span>{" "}
            {"for collaborations, job opportunities, or just to say hello."}
          </p>
        </div>

        <div className="contact-grid">
          {/* Contact info */}
          <div className="contact-info-card">
            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-envelope" />
              </div>
              <div>
                <h3>Email</h3>
                <a href="mailto:ramillano.incent@gmail.com">
                  ramillano.incent@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-phone" />
              </div>
              <div>
                <h3>Phone</h3>
                <a href="tel:09108904619">09108904619</a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-info-icon">
                <i className="fas fa-map-marker-alt" />
              </div>
              <div>
                <h3>Location</h3>
                <p>Zamboanga City, Philippines</p>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/hikusama"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                title="GitHub"
              >
                <i className="fa-brands fa-github" />
              </a>
              <a
                href="https://www.linkedin.com/in/ramillano-incent-e-a5b0a5338/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                title="LinkedIn"
              >
                <i className="fa-brands fa-linkedin" />
              </a>
              <a
                href="https://leetcode.com/u/hikusama/"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social-link"
                title="LeetCode"
              >
                <i className="fa-solid fa-code" />
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form
            className="contact-form"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = (form.elements.namedItem("name") as HTMLInputElement)?.value;
              const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value;
              window.location.href = `mailto:ramillano.incent@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
            }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message..."
                required
              />
            </div>
            <button type="submit" className="contact-submit">
              Send Message <i className="fas fa-paper-plane" />
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="contact-footer">
          <p>
            {"Designed & Built by"}{" "}
            <span className="text-purple">Ramillano, Incent</span>
          </p>
        </div>
      </div>

      {/* Particles */}
      <div className="contact-particles">
        {Array.from({ length: 8 }).map((_, i) => (
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
