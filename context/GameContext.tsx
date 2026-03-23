'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Question, Category, GameMode, QuestionType } from '@/types';
import { GAME_CONFIG } from '@/lib/gameConfig';
import { drawQuestions } from '@/lib/questionUtils';
import { drawMixedRound } from '@/lib/mixedEngine';
import questionsData from '@/data/questions.json';

interface GameState {
  selectedScene: Category | null;
  selectedType: GameMode | null;
  currentQuestion: Question | null;
  questionHistory: Question[];
  favorites: Question[];
  usedQuestionIds: Set<string>;
  roundSize: number;
  currentRound: number;
  completedCount: number;
  typeStats: Record<QuestionType, number>;
  roundQuestions: Question[];
}

interface GameActions {
  selectScene: (scene: Category) => void;
  selectType: (type: GameMode) => void;
  startGame: () => void;
  nextQuestion: () => void;
  skipQuestion: () => void;
  toggleFavorite: (question: Question) => void;
  markComplete: () => void;
  isFavorited: (id: string) => boolean;
  resetGame: () => void;
  isRoundOver: boolean;
}

const GameContext = createContext<(GameState & GameActions) | null>(null);

const allQuestions = questionsData as Question[];

const initialTypeStats: Record<QuestionType, number> = {
  question: 0,
  quickfire: 0,
  challenge: 0,
};

export function GameProvider({ children }: { children: ReactNode }) {
  const [selectedScene, setSelectedScene] = useState<Category | null>(null);
  const [selectedType, setSelectedType] = useState<GameMode | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [questionHistory, setQuestionHistory] = useState<Question[]>([]);
  const [favorites, setFavorites] = useState<Question[]>([]);
  const [usedQuestionIds, setUsedQuestionIds] = useState<Set<string>>(new Set());
  const [currentRound, setCurrentRound] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [typeStats, setTypeStats] = useState<Record<QuestionType, number>>({ ...initialTypeStats });
  const [roundQuestions, setRoundQuestions] = useState<Question[]>([]);

  const roundSize = selectedType ? GAME_CONFIG.roundSize[selectedType] : 0;
  const isRoundOver = currentRound >= roundSize;

  const selectScene = useCallback((scene: Category) => setSelectedScene(scene), []);
  const selectType = useCallback((type: GameMode) => setSelectedType(type), []);

  const startGame = useCallback(() => {
    if (!selectedScene || !selectedType) return;

    let questions: Question[];
    if (selectedType === 'mixed') {
      questions = drawMixedRound(allQuestions, selectedScene, usedQuestionIds);
    } else {
      questions = drawQuestions(
        allQuestions,
        selectedScene,
        selectedType,
        GAME_CONFIG.roundSize[selectedType],
        usedQuestionIds
      );
    }

    setRoundQuestions(questions);
    setCurrentRound(0);
    setCompletedCount(0);
    setTypeStats({ ...initialTypeStats });

    if (questions.length > 0) {
      setCurrentQuestion(questions[0]);
      setCurrentRound(1);
      setQuestionHistory((prev) => [...prev, questions[0]]);
      setUsedQuestionIds((prev) => new Set([...prev, questions[0].id]));
      setTypeStats((prev) => ({
        ...prev,
        [questions[0].type]: prev[questions[0].type] + 1,
      }));
    }
  }, [selectedScene, selectedType, usedQuestionIds]);

  const advanceToNext = useCallback(() => {
    const nextIdx = currentRound;
    if (nextIdx < roundQuestions.length) {
      const next = roundQuestions[nextIdx];
      setCurrentQuestion(next);
      setCurrentRound((r) => r + 1);
      setQuestionHistory((prev) => [...prev, next]);
      setUsedQuestionIds((prev) => new Set([...prev, next.id]));
      setTypeStats((prev) => ({
        ...prev,
        [next.type]: prev[next.type] + 1,
      }));
    } else {
      setCurrentQuestion(null);
    }
  }, [currentRound, roundQuestions]);

  const nextQuestion = advanceToNext;
  const skipQuestion = advanceToNext;

  const toggleFavorite = useCallback((question: Question) => {
    setFavorites((prev) => {
      const exists = prev.some((q) => q.id === question.id);
      if (exists) return prev.filter((q) => q.id !== question.id);
      return [...prev, question];
    });
  }, []);

  const isFavorited = useCallback(
    (id: string) => favorites.some((q) => q.id === id),
    [favorites]
  );

  const markComplete = useCallback(() => {
    setCompletedCount((c) => c + 1);
  }, []);

  const resetGame = useCallback(() => {
    setSelectedScene(null);
    setSelectedType(null);
    setCurrentQuestion(null);
    setQuestionHistory([]);
    setFavorites([]);
    setUsedQuestionIds(new Set());
    setCurrentRound(0);
    setCompletedCount(0);
    setTypeStats({ ...initialTypeStats });
    setRoundQuestions([]);
  }, []);

  return (
    <GameContext.Provider
      value={{
        selectedScene,
        selectedType,
        currentQuestion,
        questionHistory,
        favorites,
        usedQuestionIds,
        roundSize,
        currentRound,
        completedCount,
        typeStats,
        roundQuestions,
        selectScene,
        selectType,
        startGame,
        nextQuestion,
        skipQuestion,
        toggleFavorite,
        markComplete,
        isFavorited,
        resetGame,
        isRoundOver,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used inside GameProvider');
  return ctx;
}
