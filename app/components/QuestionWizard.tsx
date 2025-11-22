"use client";

import React, { useState } from "react";

export interface Question {
  id: string;
  text: string;
  level: number;
}

interface QuestionWizardProps {
  questions: Question[];
  onComplete?: (answers: Record<string, boolean>) => void;
  stopOnNo?: boolean;
}

export default function QuestionWizard({
  questions,
  onComplete,
  stopOnNo = false,
}: QuestionWizardProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, boolean>>({});

  const currentQuestion = questions[currentQuestionIndex];
  const isFinished = currentQuestionIndex >= questions.length;

  const handleAnswer = (answer: boolean) => {
    if (!currentQuestion) return;

    const newAnswers = { ...answers, [currentQuestion.id]: answer };
    setAnswers(newAnswers);

    // If stopOnNo is enabled and the answer is "No", stop the assessment immediately
    if (stopOnNo && answer === false) {
      setCurrentQuestionIndex(questions.length); // Force finish
      if (onComplete) {
        onComplete(newAnswers);
      }
      return;
    }

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Finished normally (last question answered)
      setCurrentQuestionIndex(questions.length);
      if (onComplete) {
        onComplete(newAnswers);
      }
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
  };

  if (!questions || questions.length === 0) {
    return <div>No questions provided.</div>;
  }

  // Calculate progress based on Level (1-9)
  const currentLevel = isFinished ? 9 : currentQuestion.level;

  if (isFinished) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-white rounded-xl shadow-lg border border-gray-100 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-primary mb-4">Assessment Complete</h2>
        <p className="text-gray-600 mb-6">Processing results...</p>
        <button
            onClick={handleRestart}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-opacity-90 transition-colors"
        >
            Restart
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Progress Bar Section */}
      <div className="mb-8">
        <div className="flex justify-between text-sm font-semibold text-gray-500 mb-2">
            <span>Level 1</span>
            <span>Current: Level {currentLevel}</span>
            <span>Level 9</span>
        </div>
        <div className="h-4 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-out"
            style={{ width: `${(currentLevel / 9) * 100}%` }}
          />
        </div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-xl shadow-lg border-t-4 border-accent p-8 min-h-[300px] flex flex-col justify-between">
        <div>
          <span className="inline-block px-3 py-1 bg-blue-100 text-primary text-xs font-bold rounded-full mb-4">
            QUESTION {currentQuestionIndex + 1} OF {questions.length}
          </span>
          <h3 className="text-2xl font-bold text-gray-800 mb-6 leading-relaxed">
            {currentQuestion.text}
          </h3>
        </div>

        <div className="flex gap-4 pt-4">
          <button
            onClick={() => handleAnswer(true)}
            className="flex-1 py-3 px-6 bg-primary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105 shadow-md"
          >
            Yes
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className="flex-1 py-3 px-6 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-transform transform hover:scale-105 shadow-sm border border-gray-200"
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
