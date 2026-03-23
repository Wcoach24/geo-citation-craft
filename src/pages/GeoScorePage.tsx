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
    question:
      '¿Tu contenido está fragmentado en secciones claras con encabezados H2-H3?',
    category: 'Structure',
    options: [
      { text: 'No', points: 0 },
      { text: 'Parcialmente', points: 6 },
      { text: 'Sí', points: 12 },
    ],
  },
  {
    id: 4,
    question:
      '¿Tienes un archivo robots.txt que permite el acceso a crawlers de IA?',
    category: 'Technical',
    options: [
      { text: 'No', points: 0 },
      { text: 'No sé', points: 6 },
      { text: 'Sí', points: 12 },
    ],
  },
  {
    id: 5,
    question:
      '¿Tu contenido incluye definiciones claras y citables de conceptos clave?',
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
    question:
      '¿Tu web tiene enlaces desde fuentes autoritativas (universidades, medios, instituciones)?',
    category: 'Authority',
    options: [
      { text: 'No', points: 0 },
      { text: 'Pocos', points: 6 },
      { text: 'Varios', points: 12 },
    ],
  },
  {
    id: 8,
    question:
      '¿Has verificado si algún modelo de IA (ChatGPT, Gemini, etc.) cita tu marca?',
    category: 'AI Citation',
    options: [
      { text: 'No', points: 0 },
      { text: 'No sé', points: 6 },
      { text: 'Sí', points: 12 },
    ],
  },
];

const GeoScorePage: React.FC = () => {
  const [step, setStep] = useState<'input' | 'quiz' | 'results'>('input');
  const [url, setUrl] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [totalScore, setTotalScore] = useState(0);
  const [showEmailGate, setShowEmailGate] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;
    setAnswers([]);
    setCurrentQuestion(0);
    setStep('quiz');
  };

  const handleAnswerSelect = (points: number) => {
    const newAnswers = [...answers, points];
    setAnswers(newAnswers);

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Quiz complete
      const score = newAnswers.reduce((sum, p) => sum + p, 0);
      setTotalScore(score);
      setShowEmailGate(false);
      setStep('results');

      // Track completion
      const clarityWindow = window as unknown as { clarity?: (event: string, name: string, data: unknown) => void };
      clarityWindow.clarity?.('event', 'geo_score_complete', {
        score,
        url: url || 'not-provided',
      });
    }
  };

  const categoryScores = calculateCategoryScores();

  const scoreColor = totalScore < 31 ? 'text-red-600' : totalScore < 61 ? 'text-amber-600' : 'text-emerald-600';
  const scoreBg = totalScore < 31 ? 'bg-red-50' : totalScore < 61 ? 'bg-amber-50' : 'bg-emerald-50';
  const scoreRing = totalScore < 31 ? 'border-red-200' : totalScore < 61 ? 'border-amber-200' : 'border-emerald-200';

  function calculateCategoryScores(): ScoreCategory[] {
    const categoryMap: Record<string, { total: number; count: number }> = {};

    QUIZ_QUESTIONS.forEach((q, idx) => {
      if (!categoryMap[q.category]) {
        categoryMap[q.category] = { total: 0, count: 0 };
      }
      categoryMap[q.category].total += answers[idx] || 0;
      categoryMap[q.category].count += 1;
    });

    return Object.entries(categoryMap).map(([name, data]) => ({
      name,
      score: data.total,
      maxScore: data.count * 12,
      icon: <TrendingUp className="h-4 w-4" />,
    }));
  }

  const handleCopyResults = () => {
    const text = `Mi GEO Score: ${totalScore}/100

${categoryScores.map((c) => `${c.name}: ${c.score}/${c.maxScore}`).join('\n')}

Descubre cómo mejorar tu score en esgeo.ai/geo-score`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <Helmet>
        <title>GEO Score Checker - ¿Qué tan preparada está tu web para la IA?</title>
        <meta
          name="description"
          content="Descubre tu GEO Score en 2 minutos. Analiza qué tan bien está optimizada tu web para ser citada por modelos de IA como ChatGPT, Gemini y Perplexity."
        />
        <meta name="og:title" content="GEO Score Checker - Optimización para IA" />
        <meta
          name="og:description"
          content="Evalúa tu web con nuestro GEO Score Checker gratuito. Recibe recomendaciones personalizadas."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        {step === 'input' && (
          <>
            {/* Hero */}
            <section className="hero-gradient py-16 md:py-24">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center animate-fade-up">
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    ¿Tu web está preparada para la era de la IA?
                  </h1>
                  <p className="text-xl text-white/90 mb-8">
                    Descubre tu GEO Score en 2 minutos y recibe un informe
                    personalizado
                  </p>
                </div>
              </div>
            </section>

            {/* Input Form */}
            <section className="py-12 md:py-16">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-md mx-auto mb-12">
                  <form onSubmit={handleUrlSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="url-input"
                        className="block text-sm font-medium text-foreground mb-2"
                      >
                        URL de tu sitio web
                      </label>
                      <Input
                        id="url-input"
                        type="url"
                        placeholder="https://tuwebsite.com"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className="w-full cursor-pointer"
                      />
                      <p className="text-xs text-muted-foreground mt-2">
                        (Opcional — usaremos esto para personalizar tu informe)
                      </p>
                    </div>
                    <Button
                      type="submit"
                      className="btn-cta w-full cursor-pointer"
                      onClick={() => {
                        const clarityWindow = window as unknown as { clarity?: (event: string, name: string, data: unknown) => void };
                        clarityWindow.clarity?.('event', 'geo_score_start', {
                          url: url || 'empty',
                        });
                      }}
                    >
                      Analizar mi web
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </form>
                </div>

                {/* Features Preview */}
                <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <BarChart3 className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Score 0-100
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Tu nivel de preparación para IA
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <TrendingUp className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Desglose
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Por categoría técnica
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="h-6 w-6 text-accent" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">
                      Recomendaciones
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Personalizadas para tu web
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {step === 'quiz' && (
          <>
            {/* Progress */}
            <section className="border-b bg-card sticky top-16 z-40 py-4">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-muted-foreground">
                    Pregunta {currentQuestion + 1} de {QUIZ_QUESTIONS.length}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {Math.round(((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100)}%
                  </span>
                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-accent transition-all duration-300"
                    style={{
                      width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </section>

            {/* Question */}
            <section className="py-12 md:py-16">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto">
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
                    {QUIZ_QUESTIONS[currentQuestion].question}
                  </h2>

                  {/* Options */}
                  <div className="space-y-3">
                    {QUIZ_QUESTIONS[currentQuestion].options.map(
                      (option, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleAnswerSelect(option.points)}
                          className="card-clay w-full bg-card border border-border rounded-xl p-4 text-left cursor-pointer transition-all duration-200 hover:border-accent"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-foreground">
                              {option.text}
                            </span>
                            <ChevronRight className="h-5 w-5 text-muted-foreground" />
                          </div>
                        </button>
                      )
                    )}
                  </div>

                  {/* Help text */}
                  <p className="text-sm text-muted-foreground mt-8 text-center">
                    Responde según tu situación actual. Puedes cambiar tus respuestas más tarde.
                  </p>
                </div>
              </div>
            </section>
          </>
        )}

        {step === 'results' && (
          <>
            {/* Score Display */}
            <section className="py-12 md:py-16">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Score */}
                <div className="max-w-lg mx-auto mb-12">
                  <div
                    className={`${scoreBg} ${scoreRing} border-4 rounded-full aspect-square flex flex-col items-center justify-center animate-fade-up`}
                  >
                    <span className={`text-6xl md:text-7xl font-bold ${scoreColor}`}>
                      {totalScore}
                    </span>
                    <span className="text-sm text-muted-foreground mt-2">
                      / 100
                    </span>
                  </div>
                </div>

                {/* Interpretation */}
                <div className="max-w-lg mx-auto mb-12 text-center animate-fade-up-delay-1">
                  {totalScore < 31 && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="font-semibold text-red-900 mb-2">
                        Tu web necesita optimización
                      </p>
                      <p className="text-sm text-red-800">
                        Hay bastante trabajo por hacer. Nuestro curso te guiará
                        paso a paso.
                      </p>
                    </div>
                  )}
                  {totalScore >= 31 && totalScore < 61 && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                      <p className="font-semibold text-amber-900 mb-2">
                        Buen punto de partida
                      </p>
                      <p className="text-sm text-amber-800">
                        Tienes una base sólida. Potencia tu GEO Score
                        optimizando áreas específicas.
                      </p>
                    </div>
                  )}
                  {totalScore >= 61 && (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                      <p className="font-semibold text-emerald-900 mb-2">
                        Excelente preparación
                      </p>
                      <p className="text-sm text-emerald-800">
                        Tu web está bien optimizada. Mantén el ritmo y sigue
                        mejorando.
                      </p>
                    </div>
                  )}
                </div>

                {/* Category Breakdown */}
                <div className="max-w-2xl mx-auto mb-12 animate-fade-up-delay-2">
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Desglose por categoría
                  </h3>
                  <div className="space-y-4">
                    {categoryScores.map((cat, idx) => (
                      <div key={idx} className="bg-card border border-border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium text-foreground">
                            {cat.name}
                          </span>
                          <span className="text-sm font-semibold text-accent">
                            {cat.score}/{cat.maxScore}
                          </span>
                        </div>
                        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                          <div
                            className="h-full bg-accent transition-all duration-500"
                            style={{
                              width: `${(cat.score / cat.maxScore) * 100}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Share Button */}
                <div className="max-w-lg mx-auto mb-12 animate-fade-up-delay-3">
                  <button
                    onClick={handleCopyResults}
                    className="card-clay w-full bg-card border border-border rounded-lg p-4 flex items-center justify-between cursor-pointer transition-all hover:border-accent"
                  >
                    <span className="font-medium text-foreground">
                      {copied
                        ? 'Copiado a portapapeles'
                        : 'Compartir tu GEO Score'}
                    </span>
                    <Copy className="h-4 w-4 text-muted-foreground" />
                  </button>
                </div>
              </div>
            </section>

            {/* Email Gate */}
            {!showEmailGate ? (
              <section className="py-12 md:py-16 bg-card border-t">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="max-w-lg mx-auto text-center mb-8">
                    <h2 className="text-2xl font-bold text-foreground mb-3">
                      Recibe tu informe completo
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Análisis detallado con recomendaciones paso a paso para
                      mejorar tu GEO Score
                    </p>
                    <button
                      onClick={() => setShowEmailGate(true)}
                      className="btn-cta cursor-pointer inline-flex items-center"
                    >
                      Descargar informe
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </button>
                  </div>
                </div>
              </section>
            ) : (
              <section className="py-12 md:py-16 bg-card border-t">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <EmailCapture
                    source="geo_score"
                  />
                </div>
              </section>
            )}

            {/* CTA Section */}
            <section className="py-12 md:py-16">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto bg-gradient-to-r from-primary to-primary/80 rounded-xl p-8 md:p-12 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    Mejora tu GEO Score
                  </h2>
                  <p className="mb-6 text-white/90">
                    El Curso GEO te enseña la metodología completa para
                    optimizar tu web y aumentar tu visibilidad en respuestas de
                    IA.
                  </p>
                  <Button
                    asChild
                    className="bg-white text-primary hover:bg-white/90 font-bold cursor-pointer"
                  >
                    <Link to="/curso#comprar" className="cursor-pointer">
                      Ver el curso — €47
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </section>

            {/* FAQ Schema */}
            <script type="application/ld+json">
              {JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                mainEntity: [
                  {
                    '@type': 'Question',
                    name: '¿Qué es el GEO Score?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'El GEO Score es una métrica de 0-100 que evalúa qué tan preparada está tu web para ser citada por modelos de IA como ChatGPT, Gemini y Perplexity.',
                    },
                  },
                  {
                    '@type': 'Question',
                    name: '¿Es gratuito el GEO Score Checker?',
                    acceptedAnswer: {
                      '@type': 'Answer',
                      text: 'Sí, el GEO Score Checker es completamente gratuito. Solo responde 8 preguntas rápidas para obtener tu score.',
                    },
                  },
                ],
              })}
            </script>
          </>
        )}
      </main>

      <Footer />
    </>
  );
};

export default GeoScorePage;