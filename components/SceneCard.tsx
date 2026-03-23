'use client';

import { motion } from 'framer-motion';
import { Category } from '@/types';
import { resolveIcon, CheckIcon } from './icons';

interface SceneCardProps {
  scene: Category;
  label: string;
  icon: string;
  bgColor: string;
  selected: boolean;
  onClick: () => void;
}

const COLOR_MAP: Record<string, { bg: string; iconBg: string }> = {
  'cream-pink': { bg: '#FDF2F6', iconBg: '#F7C8D8' },
  'cream-yellow': { bg: '#FDF8E8', iconBg: '#F8E7A2' },
  'mint': { bg: '#EFF8F3', iconBg: '#BFE3D0' },
  'cream-peach': { bg: '#FEF5EE', iconBg: '#FDE2D3' },
};

export default function SceneCard({ label, icon, bgColor, selected, onClick }: SceneCardProps) {
  const colors = COLOR_MAP[bgColor] ?? COLOR_MAP['cream-pink'];
  const IconComponent = resolveIcon(icon);

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative w-full p-4 rounded-2xl text-left transition-all
        ${selected
          ? 'border-2 border-peach shadow-[0_0_0_4px_rgba(246,184,143,0.15)]'
          : 'border-2 border-transparent hover:border-shell'
        }
      `}
      style={{ backgroundColor: colors.bg }}
    >
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: colors.iconBg }}
        >
          <IconComponent size={22} className="text-ink" />
        </div>
        <span className="text-base font-semibold text-ink">{label}</span>
      </div>

      {/* Decorative dot / check */}
      <div className="absolute top-3 right-3">
        {selected ? (
          <motion.div
            layoutId="scene-check"
            className="w-7 h-7 rounded-full bg-peach flex items-center justify-center"
          >
            <CheckIcon size={14} className="text-white" />
          </motion.div>
        ) : (
          <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.iconBg }} />
        )}
      </div>
    </motion.button>
  );
}
