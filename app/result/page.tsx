'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useGame } from '@/context/GameContext';
import ResultSummary from '@/components/ResultSummary';
import { TrophyIcon, SparklesIcon, BookmarkIcon, ArrowLeftIcon } from '@/components/icons';

const confettiColors = ['#F7C8D8', '#F8E7A2', '#BFE3D0', '#FDE2D3', '#F6B88F', '#FDE8EF'];

function ConfettiPiece({ index }: { index: number }) {
  const color = confettiColors[index % confettiColors.length];
  const angle = (index * 60) + Math.random() * 30;
  const distance = 60 + Math.random() * 40;
  const x = Math.cos((angle * Math.PI) / 180) * distance;
  const y = Math.sin((angle * Math.PI) / 180) * distance;
  const size = 6 + Math.random() * 6;
  const isCircle = index % 3 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: 0, y: 0, scale: 0, rotate: 0 }}
      animate={{
        opacity: [0, 1, 1, 0],
        x,
        y,
        scale: [0, 1.2, 1, 0.5],
        rotate: Math.random() * 360,
      }}
      transition={{
        duration: 1.2,
        delay: 0.3 + index * 0.05,
        ease: 'easeOut',
      }}
      className="absolute"
      style={{
        width: size,
        height: isCircle ? size : size * 0.5,
        borderRadius: isCircle ? '50%' : '2px',
        backgroundColor: color,
        top: '50%',
        left: '50%',
      }}
    />
  );
}

export default function ResultPage() {
  const router = useRouter();
  const {
    selectedScene,
    selectedType,
    questionHistory,
    favorites,
    completedCount,
    typeStats,
    resetGame,
    startGame,
  } = useGame();

  useEffect(() => {
    if (!selectedScene || !selectedType) {
      router.push('/');
    }
  }, [selectedScene, selectedType, router]);

  if (!selectedScene || !selectedType) {
    return null;
  }

  const handlePlayAgain = () => {
    startGame();
    router.push('/play');
  };

  const handleGoHome = () => {
    resetGame();
    router.push('/');
  };

  return (
    <div className="flex flex-col min-h-screen px-6 py-10">
      {/* Celebration header */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className="text-center mb-8"
      >
        <div className="relative inline-block mb-4">
          <TrophyIcon size={56} className="text-cream-pink" />
          {Array.from({ length: 8 }).map((_, i) => (
            <ConfettiPiece key={i} index={i} />
          ))}
        </div>
        <h2 className="text-2xl font-bold text-ink">破冰結束！</h2>
        <div className="mt-2 h-1 w-12 rounded-full bg-cream-pink mx-auto" />
      </motion.div>

      <ResultSummary
        totalQuestions={questionHistory.length}
        totalFavorites={favorites.length}
        scene={selectedScene}
        mode={selectedType}
        completedCount={completedCount}
        typeStats={typeStats}
      />

      <div className="mt-8 flex flex-col gap-3">
        <button
          onClick={handlePlayAgain}
          className="w-full py-3 rounded-2xl bg-peach text-white font-semibold shadow-button hover:bg-peach-hover active:bg-peach-active transition-colors flex items-center justify-center gap-2"
        >
          <SparklesIcon size={16} className="text-white" />
          再玩一次
        </button>
        <Link
          href="/history"
          className="w-full py-3 rounded-2xl border-2 border-shell text-ink-sub font-medium text-center hover:bg-[#FFF3EB] transition-colors flex items-center justify-center gap-1.5"
        >
          <BookmarkIcon size={16} />
          查看收藏
        </Link>
        <button
          onClick={handleGoHome}
          className="w-full py-3 rounded-2xl text-ink-muted font-medium hover:text-ink-sub transition-colors flex items-center justify-center gap-1.5"
        >
          <ArrowLeftIcon size={16} />
          回首頁
        </button>
      </div>
    </div>
  );
}
