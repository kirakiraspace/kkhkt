export type Category = 'coworker' | 'new_team' | 'friends' | 'online' | 'event';

export type QuestionType = 'question' | 'quickfire' | 'challenge';

export type GameMode = QuestionType | 'mixed';

export type Style = 'general' | 'fun';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type Tone = 'safe' | 'lively' | 'playful';

export interface Question {
  id: string;
  content: string;
  categories: Category[];
  type: QuestionType;
  style: Style;
  difficulty?: Difficulty;
  is_online_compatible?: boolean;
  requires_movement?: boolean;
  tone?: Tone;
  status?: 'active' | 'inactive';
}

export interface GameSession {
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
}
