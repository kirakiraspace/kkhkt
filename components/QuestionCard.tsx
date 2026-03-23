'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Question } from '@/types';
import TypeTag from './TypeTag';

interface QuestionCardProps {
  question: Question;
  showTypeTag?: boolean;
}

export default function QuestionCard({ question, showTypeTag }: QuestionCardProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={question.id}
        initial={{ opacity: 0, y: 40, rotateY: -15 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        exit={{ opacity: 0, y: -40, rotateY: 15 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="w-full rounded-3xl shadow-card border-2 border-shell p-10 min-h-[220px] flex flex-col items-center justify-center text-center"
        style={{ background: 'linear-gradient(180deg, #FFFFFF 0%, #FFF9F4 100%)' }}
      >
        {showTypeTag && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-4"
          >
            <TypeTag type={question.type} />
          </motion.div>
        )}
        <p className="text-xl font-semibold text-ink leading-relaxed">
          {question.content}
        </p>
      </motion.div>
    </AnimatePresence>
  );
}
