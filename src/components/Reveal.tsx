import { type ReactNode, useRef } from "react"
import { motion, useInView } from "motion/react"
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion"

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

const spring = { type: "spring" as const, bounce: 0, duration: 0.4 }

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: "-8% 0px" })
  const reduced = usePrefersReducedMotion()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
      animate={
        inView
          ? reduced
            ? { opacity: 1 }
            : { opacity: 1, y: 0 }
          : reduced
            ? { opacity: 0 }
            : { opacity: 0, y: 16 }
      }
      transition={
        reduced
          ? { duration: 0.2, ease: "easeOut", delay }
          : { ...spring, delay }
      }
    >
      {children}
    </motion.div>
  )
}
