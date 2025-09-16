import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Question {
  id: number;
  question: string;
  options: { text: string; points: number }[];
}

interface QuestionCardProps {
  question: Question;
  onAnswer: (points: number) => void;
  questionNumber: number;
  totalQuestions: number;
}

const QuestionCard = ({ question, onAnswer, questionNumber, totalQuestions }: QuestionCardProps) => {
  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <span className="text-sm text-muted-foreground">
          Pregunta {questionNumber} de {totalQuestions}
        </span>
        <h3 className="text-xl font-semibold text-primary mt-2 mb-6">
          {question.question}
        </h3>
      </div>
      
      <div className="space-y-3">
        {question.options.map((option, index) => (
          <Card key={index} className="hover:bg-accent/50 transition-colors cursor-pointer">
            <CardContent className="p-0">
              <Button
                variant="ghost"
                className="w-full justify-start text-left h-auto p-4 hover:bg-transparent"
                onClick={() => onAnswer(option.points)}
              >
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-primary/30 rounded-full flex items-center justify-center text-xs font-medium bg-primary/5">
                    {String.fromCharCode(65 + index)}
                  </div>
                  <span className="text-foreground">{option.text}</span>
                </div>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;