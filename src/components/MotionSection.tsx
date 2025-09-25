"use client";

import { motion, Variant, Transition } from "framer-motion";
import { ReactNode } from "react";

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  initial?: boolean | Variant;
  animate?: Variant;
  whileInView?: Variant;
  viewport?: { once?: boolean; amount?: number };
  transition?: Transition;
}

export function MotionSection({
  children,
  className,
  initial,
  animate,
  whileInView,
  viewport,
  transition,
}: MotionSectionProps) {
  const props: Record<string, unknown> = {};

  if (initial) props.initial = initial;
  if (animate) props.animate = animate;
  if (whileInView) props.whileInView = whileInView;
  if (viewport) props.viewport = viewport;
  if (transition) props.transition = transition;

  return (
    <motion.div className={className} {...props}>
      {children}
    </motion.div>
  );
}
