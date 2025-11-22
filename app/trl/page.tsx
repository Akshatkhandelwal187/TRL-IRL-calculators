"use client";

import React, { useState } from "react";
import QuestionWizard, { Question } from "../components/QuestionWizard";
import Link from "next/link";

// Helper function to generate questions
const generateQuestions = (): Question[] => {
  const questions: Question[] = [];
  for (let level = 1; level <= 9; level++) {
    for (let q = 1; q <= 3; q++) {
      questions.push({
        id: `L${level}_Q${q}`,
        text: `Level ${level} Question ${q}: [Placeholder Requirement Text]`,
        level: level,
      });
    }
  }
  return questions;
};

const trlQuestions = generateQuestions();

export default function TRLCalculator() {
  const [finalTRL, setFinalTRL] = useState<number | null>(null);

  const calculateTRL = (answers: Record<string, boolean>): number => {
    let achievedLevel = 0;

    for (let level = 1; level <= 9; level++) {
      // Get all question IDs for this level
      const levelQuestionIds = trlQuestions
        .filter((q) => q.level === level)
        .map((q) => q.id);

      // Check if all questions for this level were answered "Yes"
      const allPassed = levelQuestionIds.every((id) => answers[id] === true);

      if (allPassed) {
        achievedLevel = level;
      } else {
        // Stop checking once a level is failed
        break;
      }
    }
    return achievedLevel;
  };

  const handleComplete = (answers: Record<string, boolean>) => {
    const result = calculateTRL(answers);
    setFinalTRL(result);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
       {/* Header - Removed in favor of global Navbar, or customized here if necessary.
           Keeping the layout structure but using new classes.
           Since RootLayout has Navbar, we might not need this header, but let's keep it context-specific if needed or remove it.
           For now, I will align it with the new theme colors.
       */}
       {/* If we are using the global layout, we already have a Navbar.
           However, the previous implementation was a full page.
           Let's rely on the RootLayout's Navbar and just provide the Main content.
       */}

      <main className="flex-grow container mx-auto px-6 py-12">
        {finalTRL === null ? (
            <>
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-primary mb-2">Technology Readiness Level Assessment</h2>
                    <p className="text-gray-600">Answer the following questions to determine your technology's maturity.</p>
                </div>
                <QuestionWizard
                    questions={trlQuestions}
                    onComplete={handleComplete}
                    stopOnNo={true}
                />
            </>
        ) : (
            <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg border-t-4 border-accent p-10 text-center">
                <h2 className="text-4xl font-bold text-primary mb-6">Assessment Complete</h2>
                <div className="mb-8">
                    <p className="text-xl text-gray-600 mb-2">Your Result</p>
                    <div className="text-6xl font-extrabold text-accent">TRL {finalTRL}</div>
                </div>
                <p className="text-gray-600 mb-8">
                    Based on your responses, your technology has reached Readiness Level {finalTRL}.
                    {finalTRL < 9 && " Review the requirements for the next level to advance your innovation."}
                </p>
                <button
                    onClick={() => setFinalTRL(null)}
                    className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                >
                    Start New Assessment
                </button>
            </div>
        )}
      </main>
    </div>
  );
}
