'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { useGame } from '@/context/GameContext';
import TypeTag from '@/components/TypeTag';
import { ArrowLeftIcon, BookmarkIcon, HeartIcon } from '@/components/icons';

export default function HistoryPage() {
  const router = useRouter();
  const { questionHistory, favorites, toggleFavorite, isFavorited } = useGame();

  return (
    <div className="flex flex-col min-h-screen px-6 py-10">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <BookmarkIcon size={20} className="text-cream-pink" />
          <h2 className="text-2xl font-bold text-ink">收藏與歷程</h2>
        </div>
        <button
          onClick={() => router.back()}
          className="w-8 h-8 rounded-full flex items-center justify-center text-ink-muted hover:text-ink-sub hover:bg-shell transition-colors"
        >
          <ArrowLeftIcon size={18} />
        </button>
      </div>

      {/* Favorites Section */}
      <section className="mb-10">
        <div className="flex items-center gap-1.5 mb-4">
          <HeartIcon size={16} filled className="text-cream-pink" />
          <h3 className="text-lg font-semibold text-ink">
            收藏題目 ({favorites.length})
          </h3>
        </div>
        {favorites.length === 0 ? (
          <div className="py-12 text-center">
            <HeartIcon size={32} className="text-shell mx-auto mb-3" />
            <p className="text-sm text-ink-muted">還沒有收藏任何題目</p>
          </div>
        ) : (
          <div className="space-y-3">
            {favorites.map((q, i) => (
              <motion.div
                key={q.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                className="bg-white rounded-2xl border-2 border-shell p-4 flex items-start justify-between gap-3"
              >
                <div className="flex-1">
                  <div className="mb-1.5">
                    <TypeTag type={q.type} />
                  </div>
                  <p className="text-sm text-ink">{q.content}</p>
                </div>
                <motion.button
                  onClick={() => toggleFavorite(q)}
                  whileTap={{ scale: 1.3 }}
                  className="shrink-0 p-1"
                >
                  <HeartIcon size={20} filled className="text-cream-pink" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}
      </section>

      {/* History Section */}
      <section>
        <h3 className="text-lg font-semibold text-ink mb-4">
          遊戲紀錄 ({questionHistory.length})
        </h3>
        {questionHistory.length === 0 ? (
          <div className="py-12 text-center">
            <BookmarkIcon size={32} className="text-shell mx-auto mb-3" />
            <p className="text-sm text-ink-muted">還沒有遊戲紀錄</p>
          </div>
        ) : (
          <div className="space-y-2">
            {questionHistory.map((q, i) => (
              <motion.div
                key={`${q.id}-${i}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: i * 0.03 }}
                className="bg-white rounded-xl border border-shell p-3 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-2 flex-1 min-w-0">
                  <TypeTag type={q.type} />
                  <p className="text-sm text-ink truncate">{q.content}</p>
                </div>
                <motion.button
                  onClick={() => toggleFavorite(q)}
                  whileTap={{ scale: 1.3 }}
                  className="shrink-0 p-1"
                >
                  <HeartIcon
                    size={18}
                    filled={isFavorited(q.id)}
                    className={isFavorited(q.id) ? 'text-cream-pink' : 'text-shell'}
                  />
                </motion.button>
              </motion.div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
