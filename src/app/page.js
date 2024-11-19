"use client";
import React from "react";

export default function HomePage() {
  return (
    <>
      <header className="header">
        <h1>DYS – Empowering Dyslexia Awareness</h1>
      </header>

      <div className="content-section">
        <aside className="sidebar" aria-label="Navigation Menu">
          <nav aria-label="Sidebar Navigation">
            <ul>
              <li>
                <a href="#intro" title="Skip to Welcome Section">Welcome to DYS</a>
              </li>
              <li>
                <a href="#features" title="Learn about Dyslexia and Challenges">Key Features</a>
              </li>
              <li>
                <a href="#self-diagnosis" title="Explore the Self-Diagnosis Tool">Self-Diagnosis Tool</a>
              </li>
              <li>
                <a href="#chrome-extension" title="Discover Chrome Extension Features">Chrome Extension Info</a>
              </li>
              <li>
                <a href="#resources" title="Find Dyslexia Resources">Resources for Dyslexia</a>
              </li>
              <li>
                <a href="#cta" title="Get Started with DYS">Get Started</a>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="main-content">
          <section id="intro" className="intro-card">
            <h2>Welcome to DYS</h2>
            <p>
              Our mission is to promote awareness of dyslexia and provide accessible tools to support reading and learning for all.
            </p>
          </section>

          <section id="features">
            <h2>Understanding Dyslexia</h2>
            <p>
              Dyslexia is a neurodevelopmental condition that affects the brain's ability to process written language. People with dyslexia often face challenges in reading, writing, and spelling. These difficulties stem from how the brain interprets and organizes language-related information, not from a lack of intelligence or desire to learn.
            </p>
            <h3>Common Challenges Faced by People with Dyslexia</h3>
            <ul>
              <li>
                <strong>Reading Fluency:</strong> Difficulty in recognizing and reading words quickly and accurately.
              </li>
              <li>
                <strong>Decoding Text:</strong> Trouble translating written words into sounds, impacting comprehension.
              </li>
              <li>
                <strong>Memory Retention:</strong> Challenges in retaining sequences, patterns, and recalling specific information.
              </li>
              <li>
                <strong>Spelling and Writing:</strong> Frequent misspelling and inconsistent spelling of common words.
              </li>
              <li>
                <strong>Visual Distortions:</strong> Experiencing issues such as letters appearing to shift, blur, or "jump" on the page.
              </li>
            </ul>
          </section>

          <section id="self-diagnosis">
            <h2>Self-Diagnosis Tool</h2>
            <p>
              Our self-diagnosis tool is designed to help individuals privately assess potential signs of dyslexia. By answering a few questions, you can explore areas where dyslexia may impact reading and learning.{" "}
              <a href="/self-diagnosis" aria-label="Try the Self-Diagnosis Tool" className="anchorUl">Try it here</a>.
            </p>
          </section>

          <section id="chrome-extension">
            <h2>Chrome Extension Info</h2>
            <p>
              The DYS Chrome Extension enhances web accessibility by adjusting text for better readability. Key features include customizable fonts, contrast adjustments, and easy-to-read layouts tailored for dyslexic users.{" "}
              <a href="/extension-info" aria-label="Learn More About the Chrome Extension"  className="anchorUl">Learn more here</a>.
            </p>
          </section>

          <section id="resources">
            <h2>Resources for Dyslexia</h2>
            <p>
              Discover more resources on dyslexia by visiting trusted sites such as the{" "}
              <a
                href="https://dyslexiaida.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit DyslexiaIDA Website (opens in new tab)"
                className="anchorUl"
              >
                DyslexiaIDA
              </a>{" "}
              website and other helpful articles.
            </p>
          </section>

          <section id="cta">
            <h2>Get Started with DYS</h2>
            <p>
              Sign up, log in, or try our self-diagnosis tool to begin your journey towards accessible learning with DYS.
            </p>
            <button
              aria-label="Sign Up Button"
              onClick={() => (window.location.href = "/register")}
            >
              Sign Up
            </button>
            <button
              aria-label="Log In Button"
              onClick={() => (window.location.href = "/login")}
            >
              Log In
            </button>
          </section>
        </main>
      </div>
    </>
  );
}
