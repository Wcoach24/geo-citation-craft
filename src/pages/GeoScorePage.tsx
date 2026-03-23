import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import {
  CheckCircle2,
  ArrowRight,
  BarChart3,
  TrendingUp,
  Copy,
  ChevronRight,
  AlertCircle,
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EmailCapture from '@/components/EmailCapture';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface QuizQuestion {
  id: number;
  question: string;
  category: string;
  options: {
    text: string;
    points: number;
  }[];
}

interface ScoreCategory {
  name: string;
  score: number;
  maxScore: number;
  icon: React.ReactNode;
}

const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '¿Tu web tiene datos estructurados (Schema.org)?',
    category: 'Technical',
    options: [
      { text: 'No', points: 0 },
      { text: 'No sé', points: 6 },
      { text: 'Sí', points: 12 },
    ],
  },
  {
    id: 2,
    question: '¿Usas formato pregunta-respuesta en tu contenido?',
    category: 'Content Format',
    options: [
      { text: 'Nunca', points: 0 },
      { text: 'A veces', points: 6 },
      { text: 'Siempre', points: 12 },
    ],
  },
  {
    id: 3,
    question: '¿Tu contenido está fragmentado en secciones claras con encabezados H2-H3?',
    category: 'Structure',
    options: [
      { text: 'No', points: 0 },
      { text: 'Parcialmente', points: 6 },
      { text: 'Sí', points: 12 },
    ],
  },
  {
    id: 4,
    question: '¿Tienes un archivo robots.txt que permite el acceso a crawlers de IA?',
    category: 'Technical',
    options: [
      { text: 'No', points: 0 },
      { text: 'No sé', points: 6 },
      { text: 'Sí', points: 12 },
    ],
  },
  {
    id: 5,
    question: '¿Tu contenido incluye definiciones claras y citables de conceptos clave?',
    category: 'Content Quality',
    options: [
      { text: 'No', points: 0 },
      { text: 'Algo', points: 6 },
      { text: 'Sí', points: 12 },
    ],
  },
  {
    id: 6,
    question: '¿Actualizas tu contenido regularmente (al menos mensualmente)?',
    category: 'Maintenance',
    options: [
      { text: 'No', points: 0 },
      { text: 'Trimestral', points: 6 },
      { text: 'Mensual+', points: 12 },
    ],
  },
  {
    id: 7,
    question: '¿Tu sitio tiene una sección FAQ con respuestas claras y cortas?',
    category: 'Content Format',
    options: [
      { text: 'No', points: 0 },
      { text: 'Parcial', points: 6 },
      { text: 'Sí, completo', points: 12 },
    ],
  },
  {
    id: 8,
    question: '¿Incluyes referencias y enlaces a fuentes confiables en tu contenido?',
    category: 'Authority',
    options: [
      { text: 'No', points: 0 },
      { text: 'A veces', points: 6 },
      { text: 'Siempre', points: 12 },
    ],
  },
];

const GeoScorePage = () => {
  const [answers, setAnswers] = useState<(number | null)[]>(new Array(QUIZ_QUESTIONS.length).fill(null));
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState('');

  const calculateScore = () => {
    return answers.reduce((acc, answerIdx) => {
      if (answerIdx === null) return acc;
      return acc + (QUIZ_QUESTIONS[answers.indexOf(answerIdx)].options[answerIdx]?.points || 0);
    }, 0);
  };

  const handleAnswer = (questionIdx: number, optionIdx: number) => {
    const newAnswers = [...answers];
    newAnswers[questionIdx] = optionIdx;
    setAnswers(newAnswers);
  };

  const handleSubmit = async () => {
    if (answers.includes(null)) {
      alert('Por favor responde todas las preguntas');
      return;
    }

    // Email capture
    if (email && email.includes('@')) {
      try {
        await fetch('https://esgeo-functions.vercel.app/api/capture-lead', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, source: 'geo-score' }),
        }).catch(() => null);
      } catch (e) {}
    }

    setShowResults(true);
  };

  const totalScore = calculateScore();
  const maxScore = QUIZ_QUESTIONS.length * 12;
  const percentage = (totalScore / maxScore) * 100;

  const getScoreLevel = (percentage: number) => {
    if (percentage >= 80) return { label: 'Excelente', color: 'text-green-600', bg: 'bg-green-100' };
    if (percentage >= 60) return { label: 'Bueno', color: 'text-blue-600', bg: 'bg-blue-100' };
    if (percentage >= 40) return { label: 'En desarrollo', color: 'text-yellow-600', bg: 'bg-yellow-100' };
    return { label: 'Necesita mejora', color: 'text-red-600', bg: 'bg-red-100' };
  };

  const scoreLevel = getScoreLevel(percentage);

  const categoryBreakdown = (() => {
    const categories: { [key: string]: { score: number; max: number } } = {};
    QUIZ_QUESTIONS.forEach((q, idx) => {
      if (!categories[q.category]) {
        categories[q.category] = { score: 0, max: 0 };
      }
      if (answers[idx] !== null) {
        categories[q.category].score += QUIZ_QUESTIONS[idx].options[answers[idx]].points;
      }
      categories[q.category].max += 12;
    });
    return categories;
  })();

  if (showResults) {
    return (
      <>
        <Helmet>
          <title>Tu GEO Score | Evaluación de optimización para IA | esGEO</title>
          <meta name="description" content="Descubre tu score GEO y ve qué áreas necesitan mejora para aparecer en respuestas de IA." />
        </Helmet>

        <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
          <Header />

          <main className="container mx-auto px-4 py-16 max-w-3xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-primary mb-4">Tu GEO Score</h1>
              <div className={`inline-block ${scoreLevel.bg} px-6 py-3 rounded-lg mb-6`}>
                <p className={`text-3xl font-bold ${scoreLevel.color}`}>{Math.round(percentage)}%</p>
                <p className={`text-sm ${scoreLevel.color}`}>{scoreLevel.label}</p>
              </div>

              <div className="bg-card border rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-primary mb-4">Desglose por categoría</h2>
                <div className="space-y-3">
                  {Object.entries(categoryBreakdown).map(([category, { score, max }]) => {
                    const catPercentage = (score / max) * 100;
                    return (
                      <div key={category}>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium">{category}</span>
                          <span className="text-sm text-muted-foreground">{score}/{max}</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className="bg-accent h-2 rounded-full" style={{ width: `${catPercentage}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="bg-accent/5 border border-accent/20 rounded-lg p-6 mb-8 text-left">
                <h3 className="font-semibold text-primary mb-4">Recomendaciones para mejorar</h3>
                <ul className="space-y-3 text-muted-foreground">
                  {percentage < 100 && (
                    <>
                      {percentage < 50 && <li className="flex gap-2"><AlertCircle className="w-5 h-5 flex-shrink-0 text-red-600" /> Implementa datos estructurados (Schema.org) en tu sitio. Esto es crítico.</li>}
                      {!answers.includes(null) && (answers[1] !== 2 || answers[6] !== 2) && <li className="flex gap-2"><ChevronRight className="w-5 h-5 flex-shrink-0 text-accent" /> Crea o mejora tu sección de FAQ con preguntas claras y respuestas cortas.</li>}
                      {!answers.includes(null) && answers[5] !== 2 && <li className="flex gap-2"><ChevronRight className="w-5 h-5 flex-shrink-0 text-accent" /> Actualiza tu contenido más importante cada mes.</li>}
                      <li className="flex gap-2"><ChevronRight className="w-5 h-5 flex-shrink-0 text-accent" /> Aprende GEO en profundidad con nuestro curso.</li>
                    </>
                  )}
                  {percentage === 100 && <li className="text-green-600 font-semibold">¡Excelente! Tu sitio está bien optimizado para IA. Mantén estas prácticas.</li>}
                </ul>
              </div>

              <div className="space-y-4">
                <Button asChild size="lg" className="btn-cta w-full">
                  <Link to="/curso#comprar">
                    Aprende GEO completo — €97 <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="w-full" onClick={() => { setShowResults(false); setAnswers(new Array(QUIZ_QUESTIONS.length).fill(null)); }}>
                  Volver a intentar
                </Button>
              </div>
            </div>
          </main>

          <EmailCapture />
          <Footer />
        </div>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>GEO Score: Evalúa tu web | esGEO</title>
        <meta name="description" content="Descubre cómo está tu sitio optimizado para IA. Quiz gratuito de 8 preguntas." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        <Header />

        <main className="container mx-auto px-4 py-16 max-w-3xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-primary mb-4">¿Qué tan optimizada está tu web para IA?</h1>
            <p className="text-lg text-muted-foreground">Descúbrelo en 3 minutos con este quiz gratuito</p>
          </div>

          <div className="space-y-8">
            {QUIZ_QUESTIONS.map((question, qIdx) => (
              <div key={question.id} className="bg-card border rounded-lg p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-accent/10 text-accent w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                    {qIdx + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{question.question}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{question.category}</p>
                  </div>
                </div>
                <div className="space-y-2 ml-12">
                  {question.options.map((option, oIdx) => (
                    <button
                      key={oIdx}
                      onClick={() => handleAnswer(qIdx, oIdx)}
                      className={`w-full text-left p-3 rounded-lg border transition ${
                        answers[qIdx] === oIdx
                          ? 'border-accent bg-accent/10'
                          : 'border-muted hover:border-accent/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            answers[qIdx] === oIdx ? 'border-accent bg-accent' : 'border-muted'
                          }`}
                        >
                          {answers[qIdx] === oIdx && <CheckCircle2 className="w-4 h-4 text-white" />}
                        </div>
                        <span>{option.text}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-accent/5 border border-accent/20 rounded-lg">
            <p className="text-sm text-muted-foreground mb-4">Deja tu email para recibir tu score y recomendaciones personalizadas:</p>
            <div className="flex gap-2 mb-4">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <Button
              size="lg"
              className="btn-cta w-full"
              disabled={answers.includes(null)}
              onClick={handleSubmit}
            >
              Ver mi GEO Score <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default GeoScorePage;