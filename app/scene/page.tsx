'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useGame } from '@/context/GameContext';
import { SCENE_META } from '@/lib/gameConfig';
import { Category } from '@/types';
import SceneCard from '@/components/SceneCard';
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/icons';

const scenes = Object.entries(SCENE_META) as [Category, typeof SCENE_META[Category]][];

export default function ScenePage() {
  const router = useRouter();
  const { selectedScene, selectScene } = useGame();

  return (
    <div className="flex flex-col min-h-screen px-6 py-10">
      {/* Step indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mb-6"
      >
        <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-cream-peach text-ink-sub">
          步驟 1 / 2
        </span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h2 className="text-2xl font-bold text-ink">選擇場景</h2>
        <p className="mt-1 text-ink-sub">你們現在是什麼樣的聚會？</p>
      </motion.div>

      <div className="flex flex-col gap-2 flex-1">
        {scenes.map(([key, meta], i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
          >
            <SceneCard
              scene={key}
              label={meta.label}
              icon={meta.icon}
              bgColor={meta.color}
              selected={selectedScene === key}
              onClick={() => selectScene(key)}
            />
          </motion.div>
        ))}
      </div>

      <div className="mt-8 flex gap-3">
        <button
          onClick={() => router.push('/')}
          className="flex-1 py-3 rounded-2xl border-2 border-shell text-ink-sub font-medium hover:bg-[#FFF3EB] transition-colors flex items-center justify-center gap-1.5"
        >
          <ArrowLeftIcon size={16} />
          返回
        </button>
        <button
          onClick={() => selectedScene && router.push('/type')}
          disabled={!selectedScene}
          className={`flex-1 py-3 rounded-2xl font-semibold text-white transition-colors flex items-center justify-center gap-1.5 ${
            selectedScene
              ? 'bg-peach shadow-button hover:bg-peach-hover active:bg-peach-active'
              : 'bg-shell-disabled cursor-not-allowed'
          }`}
        >
          下一步
          <ArrowRightIcon size={16} className="text-white" />
        </button>
      </div>
    </div>
  );
}
