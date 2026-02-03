import { useState } from 'react';
import { CheckCircle2, XCircle, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

interface ComprehensionCheckpointProps {
  title: string;
  questions: Question[];
}

export const ComprehensionCheckpoint = ({ title, questions }: ComprehensionCheckpointProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState<Record<string, boolean>>({});
  const [isExpanded, setIsExpanded] = useState(true);

  const handleAnswerSelect = (questionId: string, optionIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: optionIndex
    }));
    setShowResults(prev => ({
      ...prev,
      [questionId]: false
    }));
  };

  const handleCheckAnswer = (questionId: string) => {
    setShowResults(prev => ({
      ...prev,
      [questionId]: true
    }));
  };

  const isCorrect = (questionId: string) => {
    const question = questions.find(q => q.id === questionId);
    return question && selectedAnswers[questionId] === question.correctAnswer;
  };

  const getScore = () => {
    const answered = Object.keys(showResults).filter(id => showResults[id]).length;
    const correct = Object.keys(showResults).filter(id => showResults[id] && isCorrect(id)).length;
    return { answered, correct, total: questions.length };
  };

  const score = getScore();
  const allAnswered = score.answered === score.total;
  const percentage = score.total > 0 ? Math.round((score.correct / score.total) * 100) : 0;

  return (
    <div className="mb-8 border-2 border-purple-400/30 rounded-xl bg-gradient-to-br from-purple-500/5 to-background overflow-hidden">
      {/* Header */}
      <div
        className="p-4 sm:p-6 bg-purple-500/10 cursor-pointer flex items-center justify-between"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center gap-3 flex-1">
          <div className="p-2 bg-purple-500/20 rounded-lg">
            <HelpCircle className="w-6 h-6 text-purple-400" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold text-foreground">
              {title}
            </h3>
            {allAnswered && (
              <p className={`text-sm sm:text-base font-medium mt-1 ${
                percentage >= 80 ? 'text-green-400' : percentage >= 60 ? 'text-orange-400' : 'text-red-400'
              }`}>
                {percentage >= 80 ? '✅ ¡Excelente!' : percentage >= 60 ? '⚠️ Revisa algunos conceptos' : '❌ Necesitas repasar'}
                {' '}({score.correct}/{score.total} correctas - {percentage}%)
              </p>
            )}
          </div>
          <button className="text-purple-400">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Questions */}
      {isExpanded && (
        <div className="p-4 sm:p-6 space-y-6">
          {questions.map((question, qIndex) => {
            const selected = selectedAnswers[question.id];
            const showResult = showResults[question.id];
            const correct = isCorrect(question.id);

            return (
              <div key={question.id} className="glass-card p-4 sm:p-6">
                {/* Question */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-purple-500/20 rounded-full flex items-center justify-center text-purple-400 font-bold">
                    {qIndex + 1}
                  </div>
                  <p className="text-base sm:text-lg text-foreground font-medium flex-1">
                    {question.question}
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-2 mb-4">
                  {question.options.map((option, optionIndex) => {
                    const isSelected = selected === optionIndex;
                    const isCorrectOption = optionIndex === question.correctAnswer;

                    let optionClass = 'border-border/50 bg-card/20 hover:border-purple-400/50 hover:bg-purple-500/5';

                    if (showResult) {
                      if (isCorrectOption) {
                        optionClass = 'border-green-400/50 bg-green-500/10';
                      } else if (isSelected && !correct) {
                        optionClass = 'border-red-400/50 bg-red-500/10';
                      }
                    } else if (isSelected) {
                      optionClass = 'border-purple-400 bg-purple-500/10';
                    }

                    return (
                      <button
                        key={optionIndex}
                        onClick={() => !showResult && handleAnswerSelect(question.id, optionIndex)}
                        disabled={showResult}
                        className={`w-full text-left p-3 sm:p-4 border rounded-lg transition-all duration-200 ${optionClass} ${
                          showResult ? 'cursor-default' : 'cursor-pointer'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                            showResult && isCorrectOption
                              ? 'border-green-400 bg-green-500/20'
                              : showResult && isSelected && !correct
                              ? 'border-red-400 bg-red-500/20'
                              : isSelected
                              ? 'border-purple-400 bg-purple-500/20'
                              : 'border-muted-foreground/30'
                          }`}>
                            {showResult && isCorrectOption && (
                              <CheckCircle2 className="w-4 h-4 text-green-400" />
                            )}
                            {showResult && isSelected && !correct && (
                              <XCircle className="w-4 h-4 text-red-400" />
                            )}
                            {!showResult && isSelected && (
                              <div className="w-3 h-3 bg-purple-400 rounded-full" />
                            )}
                          </div>
                          <span className={`text-sm sm:text-base ${
                            showResult && isCorrectOption
                              ? 'text-green-400 font-medium'
                              : showResult && isSelected && !correct
                              ? 'text-red-400'
                              : 'text-foreground'
                          }`}>
                            {option}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Check Button */}
                {!showResult && selected !== undefined && (
                  <button
                    onClick={() => handleCheckAnswer(question.id)}
                    className="w-full sm:w-auto px-6 py-2 bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg transition-colors"
                  >
                    Verificar Respuesta
                  </button>
                )}

                {/* Explanation */}
                {showResult && (
                  <div className={`mt-4 p-4 rounded-lg border ${
                    correct
                      ? 'bg-green-500/10 border-green-400/30'
                      : 'bg-orange-500/10 border-orange-400/30'
                  }`}>
                    <p className={`text-sm sm:text-base font-medium mb-2 ${
                      correct ? 'text-green-400' : 'text-orange-400'
                    }`}>
                      {correct ? '✅ ¡Correcto!' : '💡 Explicación:'}
                    </p>
                    <p className="text-sm sm:text-base text-foreground">
                      {question.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}

          {/* Overall Score */}
          {allAnswered && (
            <div className={`p-4 sm:p-6 rounded-xl border-2 ${
              percentage >= 80
                ? 'bg-green-500/10 border-green-400/30'
                : percentage >= 60
                ? 'bg-orange-500/10 border-orange-400/30'
                : 'bg-red-500/10 border-red-400/30'
            }`}>
              <div className="text-center">
                <div className="text-4xl mb-3">
                  {percentage >= 80 ? '🎉' : percentage >= 60 ? '📚' : '💪'}
                </div>
                <h4 className={`text-xl sm:text-2xl font-bold mb-2 ${
                  percentage >= 80 ? 'text-green-400' : percentage >= 60 ? 'text-orange-400' : 'text-red-400'
                }`}>
                  {percentage >= 80
                    ? '¡Dominas el concepto!'
                    : percentage >= 60
                    ? 'Buen progreso, repasa algunos puntos'
                    : 'Necesitas repasar esta sección'}
                </h4>
                <p className="text-foreground text-base sm:text-lg">
                  Obtuviste <strong>{score.correct} de {score.total}</strong> respuestas correctas ({percentage}%)
                </p>
                {percentage < 80 && (
                  <p className="text-sm sm:text-base text-muted-foreground mt-3">
                    💡 Tip: Revisa el Material de Apoyo y vuelve a intentar
                  </p>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
