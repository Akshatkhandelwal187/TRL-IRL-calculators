"use client";

import React from "react";
import QuestionWizard, { Question } from "../components/QuestionWizard";
import Link from "next/link";

const sampleQuestions: Question[] = [
  { id: "q1", text: "Have the basic principles been observed and reported?", level: 1 },
  { id: "q2", text: "Has the technology concept and/or application been formulated?", level: 2 },
  { id: "q3", text: "Has the analytical and experimental critical function and/or characteristic proof of concept been demonstrated?", level: 3 },
  { id: "q4", text: "Has the component and/or breadboard validation in a laboratory environment been completed?", level: 4 },
  { id: "q5", text: "Has the component and/or breadboard validation in a relevant environment been completed?", level: 5 },
  { id: "q6", text: "Has the system/subsystem model or prototype demonstration in a relevant environment been completed?", level: 6 },
  { id: "q7", text: "Has the system prototype demonstration in an operational environment been completed?", level: 7 },
  { id: "q8", text: "Has the actual system been completed and qualified through test and demonstration?", level: 8 },
  { id: "q9", text: "Has the actual system been proven through successful mission operations?", level: 9 },
];

export default function TRLCalculator() {
  const handleComplete = (answers: Record<string, boolean>) => {
    console.log("Assessment completed. Answers:", answers);
    // Logic to calculate final TRL would go here
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
       {/* Header */}
       <header className="bg-deep-blue text-white py-6 px-6 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold hover:text-gold transition-colors">
                BITS Pilani TEC
            </Link>
            <h1 className="text-lg font-light">TRL Calculator</h1>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-6 py-12">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-deep-blue mb-2">Technology Readiness Level Assessment</h2>
            <p className="text-gray-600">Answer the following questions to determine your technology's maturity.</p>
        </div>

        <QuestionWizard questions={sampleQuestions} onComplete={handleComplete} />
      </main>
    </div>
  );
}
