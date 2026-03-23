import { Question, Category, QuestionType } from '@/types';
import { GAME_CONFIG } from './gameConfig';
import { filterByScene, filterByType, excludeUsed } from './questionUtils';

function pickRandom<T>(arr: T[]): T | undefined {
  if (arr.length === 0) return undefined;
  return arr[Math.floor(Math.random() * arr.length)];
}

export function drawMixedRound(
  allQuestions: Question[],
  scene: Category,
  usedIds: Set<string>
): Question[] {
  const sceneFiltered = filterByScene(allQuestions, scene);
  const sequence = GAME_CONFIG.mixedSequence;
  const localUsed = new Set(usedIds);
  const result: Question[] = [];

  for (const type of sequence) {
    const pool = excludeUsed(filterByType(sceneFiltered, type), localUsed);
    const picked = pickRandom(pool);
    if (picked) {
      result.push(picked);
      localUsed.add(picked.id);
    }
  }

  return result;
}
