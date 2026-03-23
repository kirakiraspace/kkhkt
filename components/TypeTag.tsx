'use client';

import { QuestionType } from '@/types';

const TAG_STYLES: Record<QuestionType, { bg: string; text: string; label: string }> = {
  question: { bg: 'bg-tag-question-bg', text: 'text-tag-question-text', label: '問答' },
  quickfire: { bg: 'bg-tag-quickfire-bg', text: 'text-tag-quickfire-text', label: '快問快答' },
  challenge: { bg: 'bg-tag-challenge-bg', text: 'text-tag-challenge-text', label: '任務挑戰' },
};

export default function TypeTag({ type }: { type: QuestionType }) {
  const style = TAG_STYLES[type];
  return (
    <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${style.bg} ${style.text}`}>
      {style.label}
    </span>
  );
}
