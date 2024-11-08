"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { db, auth } from '../lib/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import Image from 'next/image';

export default function SelfDiagnosis() {
    const [answers, setAnswers] = useState({});
    const router = useRouter();

    const questions = [
      "Do you find it difficult to read out loud?",
      "Do you frequently misspell common words?",
      "Do you often have trouble understanding instructions?",
      "Do you skip lines or lose your place while reading?",
      "Do you find reading tiring or exhausting?",
      "Do you mix up similar letters, like b and d?",
      "Do you find it challenging to retain information from what you read?",
      "Do you often struggle to pronounce unfamiliar words?",
      "Do you avoid reading whenever possible?",
      "Do you find writing tasks difficult or confusing?",
    ];

    const handleAnswerChange = (index, value) => {
      setAnswers({ ...answers, [index]: value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const user = auth.currentUser;
        if (user) {
          const userDoc = doc(db, "selfDiagnosisResponses", user.uid);
          await setDoc(userDoc, { answers });
          alert("Your responses have been saved.");
          router.push('/'); // Redirect after submission
        } else {
          alert("Please log in to save your responses.");
        }
      } catch (error) {
        console.error("Error saving responses:", error);
        alert("An error occurred while saving your responses.");
      }
    };

    return (
      <div className="self-diagnosis-page">
        <div className="card">
          <Image 
            src="/selfDiagnosis.webp" 
            alt="Colorful, abstract speech bubbles and question marks" 
            className="card-image"
            width={900} 
            height={500} 
          />
          <div className="card-content">
            <h2>Self-Assessment Tool</h2>
            <p>
              Dyslexia affects 1 in 10 individuals, many of whom remain undiagnosed and receive little or no intervention services. For some individuals who have never been diagnosed, dyslexia is a hidden disability that may result in underemployment, academic challenges, and reduced self-confidence.
            </p>
            <p>
              Dyslexia is a specific reading disorder and does not reflect low intelligence. Do you think you may have dyslexia? Please complete the brief 10-question self-assessment tool below.
            </p>
          </div>
        </div>

        <div className="self-diagnosis-form">
          <h1>Self-Diagnosis for Dyslexia</h1>
          <form onSubmit={handleSubmit}>
            {questions.map((question, index) => (
              <div key={index} className="question">
                <p>{question}</p>
                <div className="answer-options">
                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value="yes"
                      onChange={() => handleAnswerChange(index, "yes")}
                      required
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value="no"
                      onChange={() => handleAnswerChange(index, "no")}
                    />
                    No
                  </label>
                </div>
              </div>
            ))}
            <button type="submit">Submit Responses</button>
          </form>
          <div className="result-note">
            <p>
              If you checked seven or more of these questions, this may indicate dyslexia. Consider seeking consultation from a specialist or a formal diagnostic assessment from a qualified examiner.
            </p>
          </div>
        </div>
      </div>
    );
  }
