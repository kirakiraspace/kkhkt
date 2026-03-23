'use client';

import { motion } from 'framer-motion';
import { GameMode } from '@/types';
import { resolveIcon, CheckIcon } from './icons';

const TAG_COLORS: Record<GameMode, { bg: string; text: string; accent: string }> = {
  question: { bg: '#FDE8EF', text: '#B65C7A', accent: '#F7C8D8' },
  quickfire: { bg: '#FFF0E6', text: '#C9784D', accent: '#F6B88F' },
  challenge: { bg: '#E8F5EE', text: '#5D8E75', accent: '#BFE3D0' },
  mixed: { bg: '#FFF7D9', text: '#A6852A', accent: '#F8E7A2' },
};

interface TypeCardProps {
  mode: GameMode;
  label: string;
  description: string;
  icon: string;
  selected: boolean;
  onClick: () => void;
}

export default function TypeCard({ mode, label, description, icon, selected, onClick }: TypeCardProps) {
  const colors = TAG_COLORS[mode];
  const IconComponent = resolveIcon(icon);

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative w-full rounded-2xl text-left transition-all bg-white overflow-hidden
        ${selected
          ? 'border-2 border-peach shadow-[0_0_0_4px_rgba(246,184,143,0.15)]'
          : 'border-2 border-shell shadow-card'
        }
      `}
    >
      <div className="flex">
        {/* Left accent stripe */}
        <div
          className="w-1.5 shrink-0 rounded-l-2xl transition-all"
          style={{
            backgroundColor: selected ? colors.text : colors.accent,
            width: selected ? '6px' : '4px',
          }}
        />

        <div className="flex-1 p-4 pl-4">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{ backgroundColor: colors.bg }}
            >
              <IconComponent size={18} style={{ color: colors.text }} />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-base font-semibold text-ink">{label}</span>
              <p className="text-sm text-ink-muted mt-0.5">{description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Selection indicator */}
      {selected && (
        <motion.div
          layoutId="type-check"
          className="absolute top-3 right-3 w-7 h-7 rounded-full bg-peach flex items-center justify-center"
        >
          <CheckIcon size={14} className="text-white" />
        </motion.div>
      )}
    </motion.button>
  );
}
