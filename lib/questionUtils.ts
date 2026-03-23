import { Question, Category, QuestionType, Style } from '@/types';
import { GAME_CONFIG } from './gameConfig';

export function filterByScene(questions: Question[], scene: Category): Question[] {
  return questions.filter(
    (q) => q.categories.includes(scene) && q.status !== 'inactive'
  );
}

export function filterByType(questions: Question[], type: QuestionType): Question[] {
  return questions.filter((q) => q.type === type);
}

export function excludeUsed(questions: Question[], usedIds: Set<string>): Question[] {
  return questions.filter((q) => !usedIds.has(q.id));
}

function shuffle<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function drawQuestions(
  allQuestions: Question[],
  scene: Category,
  type: QuestionType,
  count: number,
  usedIds: Set<string>
): Question[] {
  const sceneFiltered = filterByScene(allQuestions, scene);
  const typeFiltered = filterByType(sceneFiltered, type);
  const available = excludeUsed(typeFiltered, usedIds);

  const funRatio = GAME_CONFIG.styleRatio[scene] ?? 0.5;
  const funCount = Math.round(count * funRatio);
  const generalCount = count - funCount;

  const funQuestions = shuffle(available.filter((q) => q.style === 'fun'));
  const generalQuestions = shuffle(available.filter((q) => q.style === 'general'));

  const picked: Question[] = [
    ...generalQuestions.slice(0, generalCount),
    ...funQuestions.slice(0, funCount),
  ];

  // If not enough of one style, fill from the other
  if (picked.length < count) {
    const pickedIds = new Set(picked.map((q) => q.id));
    const remaining = shuffle(available.filter((q) => !pickedIds.has(q.id)));
    picked.push(...remaining.slice(0, count - picked.length));
  }

  return shuffle(picked);
}
