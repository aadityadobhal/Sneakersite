import { motion } from 'framer-motion';
import { useRef, useState } from 'react';

interface SneakerModelProps {
  variant?: string;
}

export function SneakerModel({ variant = 'default' }: SneakerModelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  const variantColors: Record<string, { primary: string; secondary: string; glow: string }> = {
    default: { primary: '#ff0a0a', secondary: '#00d4ff', glow: 'rgba(255, 10, 10, 0.5)' },
    red: { primary: '#ff0000', secondary: '#ff4444', glow: 'rgba(255, 0, 0, 0.6)' },
    blue: { primary: '#0088ff', secondary: '#00d4ff', glow: 'rgba(0, 136, 255, 0.6)' },
    black: { primary: '#1a1a1a', secondary: '#333333', glow: 'rgba(255, 255, 255, 0.2)' },
    white: { primary: '#ffffff', secondary: '#cccccc', glow: 'rgba(255, 255, 255, 0.4)' },
  };

  const colors = variantColors[variant] || variantColors.default;

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-4xl mx-auto perspective-1000 cursor-pointer"
      style={{ height: '500px' }}
    >
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl"
        style={{
          background: `radial-gradient(circle, ${colors.glow} 0%, transparent 70%)`,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.svg
        viewBox="0 0 600 300"
        className="w-full h-full preserve-3d drop-shadow-2xl"
        style={{
          filter: `drop-shadow(0 20px 40px ${colors.glow})`,
        }}
        animate={{
          rotateX: mousePosition.y,
          rotateY: mousePosition.x,
          y: [0, -15, 0],
        }}
        transition={{
          rotateX: { type: 'spring', stiffness: 300, damping: 30 },
          rotateY: { type: 'spring', stiffness: 300, damping: 30 },
          y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <defs>
          <linearGradient id="soleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.primary} />
            <stop offset="50%" stopColor={colors.secondary} />
            <stop offset="100%" stopColor={colors.primary} />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <motion.path
          d="M50 220 C50 220, 80 230, 250 235 C420 240, 520 235, 550 220 C550 220, 560 250, 550 260 C540 270, 120 270,50 260 C40 250, 50 220, 50 220"
          fill="url(#soleGradient)"
          filter="url(#glow)"
          animate={{ opacity: [1, 0.8, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <path
          d="M50 210 C50 210, 80 220, 250 225 C420 230, 520 225, 550 210 L550 220 C550 220, 520 235, 250 235 C80 230, 50 220, 50 220 Z"
          fill="#0a0a0a"
        />

        <path
          d="M80 210 C80 210, 60 150, 100 100 C140 50, 200 40, 280 45 C360 50, 450 60, 500 90 C550 120, 550 180, 550 210 C550 210, 400 220, 280 220 C160 220, 80 210, 80 210"
          fill="#111111"
          stroke={colors.primary}
          strokeWidth="2"
        />

        <path
          d="M100 150 C120 110, 200 70, 280 70 C360 70, 440 80, 490 110 C520 130, 530 160, 530 180 L500 180 C500 150, 400 100, 280 100 C180 100, 120 140, 100 150"
          fill="#1a1a1a"
        />

        <motion.path
          d="M100 160 Q250 120, 400 100 Q480 90, 520 95"
          stroke={colors.primary}
          strokeWidth="8"
          fill="none"
          strokeLinecap="round"
          filter="url(#glow)"
        />

        <motion.path
          d="M520 170 Q400 150, 200 170 Q150 180, 120 175"
          stroke={colors.secondary}
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          opacity={0.7}
        />

        <path
          d="M200 55 L200 120 Q250 130, 300 125 L310 60 Q260 65, 200 55"
          fill="#222222"
        />

        {[...Array(5)].map((_, i) => (
          <line
            key={i}
            x1={200 + i * 12}
            y1={60 + i * 12}
            x2={300 - i * 12}
            y2={60 + i * 12}
            stroke="#ffffff"
            strokeWidth="2"
          />
        ))}

        <path d="M200 55 Q250 30, 300 35 L310 60 Q260 55, 200 55" fill="#1f1f1f" />

        <path
          d="M80 210 Q60 180, 70 140 Q75 120, 80 110 L100 140 Q95 160, 95 180 Q95 200, 80 210"
          fill={colors.primary}
          opacity={0.3}
        />

        <path d="M70 110 Q90 100, 130 95 M520 110 Q510 100, 480 95" stroke="#333" strokeWidth="4" fill="none" />

        <motion.circle
          cx="130"
          cy="100"
          r="15"
          fill={colors.secondary}
          opacity={0.8}
          filter="url(#glow)"
          animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />

        <motion.circle
          cx="480"
          cy="105"
          r="12"
          fill={colors.primary}
          opacity={0.8}
          filter="url(#glow)"
          animate={{ opacity: [0.6, 0.9, 0.6], scale: [1, 1.1, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
        />

        {[
          { cx: 150, cy: 180 },
          { cx: 200, cy: 100 },
          { cx: 450, cy: 130 },
          { cx: 480, cy: 160 },
        ].map((pos, i) => (
          <motion.circle
            key={i}
            cx={pos.cx}
            cy={pos.cy}
            r="3"
            fill={colors.secondary}
            animate={{ opacity: [0, 1, 0], scale: [0.5, 1.5, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
          />
        ))}
      </motion.svg>

      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-20 bg-gradient-to-t from-transparent via-white/5 to-transparent blur-xl"
        animate={{ opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
}
