// src/app/page.js
"use client";
import React from 'react';

export default function HomePage() {
  return (
    <div className="content-section">
      <aside className="sidebar">
        <ul>
          <li><a href="#intro">Welcome to DYS</a></li>
          <li><a href="#features">Key Features</a></li>
          <li><a href="#self-diagnosis">Self-Diagnosis Tool</a></li>
          <li><a href="#chrome-extension">Chrome Extension Info</a></li>
          <li><a href="#resources">Resources for Dyslexia</a></li>
          <li><a href="#cta">Get Started</a></li>
        </ul>
      </aside>

      <main className="main-content">
        <section id="intro" className="intro-card">
          <h2>Welcome to DYS – Empowering Dyslexia Awareness</h2>
          <p>
            Our mission is to promote awareness of dyslexia and provide accessible tools to support reading and learning for all.
          </p>
        </section>

        <section id="features">
        <h2>Understanding Dyslexia</h2>
          <p>
            Dyslexia is a neurodevelopmental condition that affects the brain's ability to process written language. People with dyslexia often face challenges in reading, writing, and spelling. These difficulties stem from how the brain interprets and organizes language-related information, not from a lack of intelligence or desire to learn. Dyslexia is one of the most common learning differences, affecting approximately 10-15% of the population, with individuals experiencing a spectrum of challenges.
          </p>
          <h3>Common Challenges Faced by People with Dyslexia</h3>
          <ul>
            <li><strong>Reading Fluency:</strong> Difficulty in recognizing and reading words quickly and accurately.</li>
            <li><strong>Decoding Text:</strong> Trouble translating written words into sounds, impacting comprehension.</li>
            <li><strong>Memory Retention:</strong> Challenges in retaining sequences, patterns, and recalling specific information.</li>
            <li><strong>Spelling and Writing:</strong> Frequent misspelling and inconsistent spelling of common words.</li>
            <li><strong>Visual Distortions:</strong> Experiencing issues such as letters appearing to shift, blur, or "jump" on the page.</li>
          </ul>
          <p>
            At DYS, we strive to address these challenges by offering tools and resources that enhance online readability and make digital content more accessible. With features tailored to reduce visual stress and improve focus, DYS aims to create a supportive online environment for individuals with dyslexia.
          </p>
        </section>

        <section id="self-diagnosis">
          <h2>Self-Diagnosis Tool</h2>
          <p>
            Our self-diagnosis tool is designed to help individuals privately assess potential signs of dyslexia. By answering a few questions, you can explore areas where dyslexia may impact reading and learning, and take steps towards understanding your unique needs. <a href="/self-diagnosis">Try it here</a>.
          </p>
        </section>

        <section id="chrome-extension">
          <h2>Chrome Extension Info</h2>
          <p>
            The DYS Chrome Extension enhances web accessibility by adjusting text for better readability. Key features include customizable fonts, contrast adjustments, and easy-to-read layouts tailored for dyslexic users. <a href="/extension-info">Learn more here</a>.
          </p>
        </section>

        <section id="resources">
          <h2>Resources for Dyslexia</h2>
          <p>
            Discover more resources on dyslexia by visiting trusted sites such as the <a href="https://dyslexiaida.org/" target="_blank" rel="noopener noreferrer">DyslexiaIDA</a> website and other helpful articles. These resources provide further insights into dyslexia, support strategies, and research.
          </p>
        </section>

        <section id="cta">
          <h2>Get Started with DYS</h2>
          <p>
            Sign up, log in, or try our self-diagnosis tool to begin your journey towards accessible learning with DYS.
          </p>
          <button  onClick={() => window.location.href = '/register'}>Sign Up</button>
          <button onClick={() => window.location.href = '/login'}>Log In</button>
        </section>
      </main>
    </div>
  );
}
