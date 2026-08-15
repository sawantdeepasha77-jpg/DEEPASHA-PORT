import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'project' | 'drag'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for fluid, responsive motion
  const springX = useSpring(cursorX, { damping: 28, stiffness: 350 });
  const springY = useSpring(cursorY, { damping: 28, stiffness: 350 });

  const trailX = useSpring(cursorX, { damping: 20, stiffness: 180 });
  const trailY = useSpring(cursorY, { damping: 20, stiffness: 180 });

  useEffect(() => {
    // Check if device is touch-primary
    const checkTouch = () => {
      const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
      setIsTouchDevice(isTouch);
      if (!isTouch) {
        document.body.classList.add('custom-cursor-active');
      } else {
        document.body.classList.remove('custom-cursor-active');
      }
    };

    checkTouch();
    window.addEventListener('resize', checkTouch);

    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Global listener for hover interactions
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest('a, button, [role="button"], input, textarea, .cursor-hover, .project-card, .interest-pill');
      
      if (interactiveEl) {
        if (interactiveEl.classList.contains('project-card')) {
          setCursorState('project');
          setCursorText('VIEW');
        } else {
          setCursorState('hover');
          setCursorText('');
        }
      } else {
        setCursorState('default');
        setCursorText('');
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('resize', checkTouch);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.body.classList.remove('custom-cursor-active');
    };
  }, [cursorX, cursorY, isVisible, isTouchDevice]);

  if (isTouchDevice || !isVisible) {
    return null;
  }

  const getCursorVariants = () => {
    switch (cursorState) {
      case 'project':
        return {
          width: 72,
          height: 72,
          backgroundColor: 'rgba(147, 51, 234, 0.28)',
          borderColor: 'rgba(192, 132, 252, 0.85)',
          scale: 1.1,
        };
      case 'hover':
        return {
          width: 44,
          height: 44,
          backgroundColor: 'rgba(168, 85, 247, 0.2)',
          borderColor: 'rgba(216, 180, 254, 0.9)',
          scale: 1,
        };
      default:
        return {
          width: 14,
          height: 14,
          backgroundColor: 'rgba(192, 132, 252, 0.95)',
          borderColor: 'rgba(255, 255, 255, 0.9)',
          scale: 1,
        };
    }
  };

  return (
    <div id="custom-cursor-root" className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Soft atmospheric ambient follower ring */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 rounded-full blur-[3px]"
        style={{
          x: trailX,
          y: trailY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: cursorState === 'default' ? 32 : 64,
          height: cursorState === 'default' ? 32 : 64,
          opacity: cursorState === 'default' ? 0.35 : 0.6,
          backgroundColor: 'rgba(147, 51, 234, 0.35)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      />

      {/* Main precision cursor */}
      <motion.div
        className="pointer-events-none fixed left-0 top-0 flex items-center justify-center rounded-full border shadow-[0_0_15px_rgba(168,85,247,0.6)] backdrop-blur-[1px]"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={getCursorVariants()}
        transition={{ type: 'spring', damping: 26, stiffness: 350 }}
      >
        {cursorText && (
          <span className="font-mono text-[10px] font-bold tracking-widest text-white uppercase select-none">
            {cursorText}
          </span>
        )}
      </motion.div>
    </div>
  );
};
