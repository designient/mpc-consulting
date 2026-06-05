import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export interface LifecyclePathProps {
  stages: string[];
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.92 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const connectorVariants = {
  hidden: { opacity: 0, scale: 0.6 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

export function LifecyclePath({ stages }: LifecyclePathProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <div ref={ref} className="relative w-full">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="relative flex w-full items-center py-2">
        <motion.div
          aria-hidden
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="absolute top-[38px] sm:top-[42px] md:top-[48px] left-[4%] right-[4%] h-px bg-gradient-to-r from-stat/10 via-stat/35 to-stat/10 origin-left pointer-events-none hidden sm:block"
        />

        {stages.map((stage, i) => (
          <React.Fragment key={stage}>
            <motion.div
              variants={stepVariants}
              whileHover={{ y: -4, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22 }}
              className="relative z-10 flex flex-1 min-w-0 flex-col items-center justify-center px-0.5 sm:px-1 py-2.5 sm:py-3 md:py-4 rounded-card border border-divider/20 bg-white shadow-subtle">
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.6 }
                }
                transition={{
                  duration: 0.4,
                  delay: 0.08 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="font-heading font-semibold text-stat text-[22px] sm:text-[28px] md:text-[36px] lg:text-[42px] leading-none tracking-[-0.03em]">
                {String(i + 1).padStart(2, '0')}
              </motion.span>
              <span className="font-body text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] font-medium text-text-primary mt-1.5 sm:mt-2 text-center leading-tight">
                {stage}
              </span>
            </motion.div>

            {i < stages.length - 1 && (
              <motion.div
                variants={connectorVariants}
                className="flex shrink-0 items-center justify-center w-3 sm:w-4 md:w-5 self-center">
                <motion.div
                  animate={
                    isInView
                      ? { x: [0, 2, 0], opacity: [0.65, 1, 0.65] }
                      : { x: 0, opacity: 0.5 }
                  }
                  transition={{
                    duration: 1.6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 0.5 + i * 0.12,
                  }}>
                  <ChevronRight
                    className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 text-stat"
                    aria-hidden
                  />
                </motion.div>
              </motion.div>
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
