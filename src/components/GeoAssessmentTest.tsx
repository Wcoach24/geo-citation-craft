import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import QuestionCard from "./QuestionCard";
import ResultsCard from "./ResultsCard";
import ProgressIndicator from "./ProgressIndicator";
import { Brain, ArrowRight } from "lucide-react";

interface Question {
  id: number;
  question: string;
  options: { text: string; points: number }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "¿Tu marca aparece cuando preguntas a ChatGPT sobre tu sector?",
    options: [
      { text: "Nunca aparece", points: 0 },
      { text: "A veces aparece", points: 2 },
      { text: "Aparece regularmente", points: 4 }
    ]
  },
  {
    id: 2,
    question: "¿Tu sitio tiene datos estructurados implementados?",
    options: [
      { text: "No sé qué es eso", points: 0 },
      { text: "Parcialmente implementados", points: 2 },
      { text: "Completamente implementados", points: 4 }
    ]
  },
  {
    id: 3,
    question: "¿Apareces en las mismas respuestas de IA que tus competidores?",
    options: [
      { text: "Nunca aparezco", points: 0 },
      { text: "Raramente aparezco", points: 2 },
      { text: "Sí, consistentemente", points: 4 }
    ]
  },
  {
    id: 4,
    question: "¿Tu contenido está estructurado para ser citable por IA?",
    options: [
      { text: "No está optimizado", points: 0 },
      { text: "En desarrollo", points: 2 },
      { text: "Sí, completamente optimizado", points: 4 }
    ]
  },
  {
    id: 5,
    question: "¿Rastreas menciones de tu marca en respuestas de IA?",
    options: [
      { text: "No sé cómo hacerlo", points: 0 },
      { text: "Manualmente a veces", points: 2 },
      { text: "Sistemáticamente", points: 4 }
    ]
  }
];

const GeoAssessmentTest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [testStarted, setTestStarted] = useState(false);

  const handleAnswer = (points: number) => {
    const newAnswers = [...answers, points];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const totalScore = answers.reduce((sum, score) => sum + score, 0);

  const restartTest = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setTestStarted(false);
  };

  if (!testStarted) {
    return (
      <Card className="bg-primary/5 border-primary/20 mb-12">
        <CardContent className="p-8 text-center">
          <div className="flex justify-center mb-4">
            <div className="p-3 bg-primary/10 rounded-full">
              <Brain className="h-8 w-8 text-primary" />
            </div>
          </div>
          <h3 className="text-2xl font-bold text-primary mb-4">
            Test GEO: ¿Está tu Web Preparada para la IA?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Responde 5 preguntas rápidas y recibe un diagnóstico personalizado sobre el estado 
            de tu sitio web ante los motores generativos de IA.
          </p>
          <div className="flex justify-center gap-4 text-sm text-muted-foreground mb-6">
            <span>⏱️ 2 minutos</span>
            <span>🎯 Diagnóstico personalizado</span>
            <span>🚀 Recomendación específica</span>
          </div>
          <Button 
            size="lg" 
            onClick={() => setTestStarted(true)}
            className="bg-primary hover:bg-primary/90"
          >
            Empezar Test GEO
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (showResults) {
    return <ResultsCard score={totalScore} onRestart={restartTest} />;
  }

  return (
    <Card className="bg-background border-primary/20 mb-12">
      <CardContent className="p-8">
        <ProgressIndicator 
          current={currentQuestion + 1} 
          total={questions.length} 
        />
        <QuestionCard
          question={questions[currentQuestion]}
          onAnswer={handleAnswer}
          questionNumber={currentQuestion + 1}
          totalQuestions={questions.length}
        />
      </CardContent>
    </Card>
  );
};

export default GeoAssessmentTest;