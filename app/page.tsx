'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { IceCubeIcon } from '@/components/icons';

export default function HomePage() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-[-120px] left-[-100px] w-96 h-96 rounded-full bg-cream-pink/25 blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-80px] w-80 h-80 rounded-full bg-cream-yellow/20 blur-3xl" />
      <div className="absolute top-[20%] right-[-120px] w-64 h-64 rounded-full bg-mint/15 blur-3xl" />
      <div className="absolute bottom-[30%] left-[-80px] w-56 h-56 rounded-full bg-cream-peach/20 blur-3xl" />

      {/* Floating ice cubes */}
      <div className="absolute top-[12%] right-[12%] animate-float-ice text-cream-pink/40">
        <IceCubeIcon size={32} />
      </div>
      <div className="absolute top-[22%] left-[8%] animate-float-ice-slow text-mint/35">
        <IceCubeIcon size={24} />
      </div>
      <div className="absolute bottom-[18%] right-[18%] animate-float-ice-delayed text-cream-yellow/40">
        <IceCubeIcon size={28} />
      </div>

      {/* Floating dots */}
      <div className="absolute top-[8%] left-[30%] w-2.5 h-2.5 rounded-full bg-cream-pink/50 animate-float" />
      <div className="absolute bottom-[25%] left-[12%] w-2 h-2 rounded-full bg-peach/30 animate-float-slow" />
      <div className="absolute top-[55%] right-[8%] w-2 h-2 rounded-full bg-mint/40 animate-float-delayed" />
      <div className="absolute bottom-[12%] left-[35%] w-1.5 h-1.5 rounded-full bg-cream-yellow/50 animate-float" />

      {/* Main content — vertically centered */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Brand title */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="animate-breath"
        >
          <h1 className="brand-title text-6xl md:text-7xl font-extrabold tracking-wide leading-none select-none">
            破個冰吧
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 text-lg text-ink-sub leading-relaxed tracking-wide"
        >
          輕鬆破冰，聊天更容易開始
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-12"
        >
          <Link
            href="/scene"
            className="inline-block px-12 py-4 text-lg font-semibold text-white bg-peach rounded-full shadow-button hover:bg-peach-hover hover:scale-105 hover:-translate-y-0.5 active:bg-peach-active active:scale-100 transition-all duration-200"
          >
            開始破冰
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
