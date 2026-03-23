import { Category, GameMode, QuestionType } from '@/types';

export const GAME_CONFIG = {
  roundSize: {
    question: 5,
    quickfire: 10,
    challenge: 5,
    mixed: 5,
  } as Record<GameMode, number>,

  timer: {
    quickfire: 5,
    challenge: 30,
  } as Record<string, number>,

  styleRatio: {
    friends: 0.8,
    event: 0.6,
    online: 0.5,
    new_team: 0.4,
    coworker: 0.2,
  } as Record<Category, number>,

  mixedSequence: ['question', 'quickfire', 'question', 'challenge', 'quickfire'] as const satisfies readonly QuestionType[],
};

export const SCENE_META: Record<Category, { label: string; icon: string; color: string }> = {
  coworker: { label: '同事破冰', icon: 'briefcase', color: 'cream-pink' },
  new_team: { label: '新團隊', icon: 'handshake', color: 'cream-yellow' },
  friends: { label: '朋友聚會', icon: 'party', color: 'mint' },
  online: { label: '線上會議', icon: 'monitor', color: 'cream-peach' },
  event: { label: '活動暖場', icon: 'sparkles', color: 'cream-pink' },
};

export const MODE_META: Record<GameMode, { label: string; description: string; icon: string }> = {
  question: { label: '問答模式', description: '認識彼此、開話題', icon: 'chat-bubble' },
  quickfire: { label: '快問快答', description: '反應快、節奏快、笑點多', icon: 'lightning' },
  challenge: { label: '任務挑戰', description: '做一個動作或完成小互動', icon: 'target' },
  mixed: { label: '混合模式', description: '系統自動混搭不同題型', icon: 'dice' },
};
