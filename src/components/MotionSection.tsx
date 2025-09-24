"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  initial?: any;
  animate?: any;
  whileInView?: any;
  viewport?: any;
  transition?: any;
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
  const props: any = {};

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
