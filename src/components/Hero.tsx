import { useEffect, useRef, useState, type CSSProperties } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react"
import { hero, skillGroups } from "../data/content"
import { getStackHex, StackIcon, type StackId } from "./StackIcon"
import styles from "./Hero.module.css"

const spring = { type: "spring" as const, bounce: 0, duration: 0.4 }
const carouselSpring = { type: "spring" as const, bounce: 0.18, duration: 0.55 }
const SWITCH_MS = 3000
const VISIBLE = 2

const stack = skillGroups.groups.flatMap((group) =>
  group.items.map((item) => ({
    id: item.id as StackId,
    label: item.label,
    group: group.title,
  })),
)

function relativeOffset(index: number, active: number, total: number) {
  let diff = index - active
  if (diff > total / 2) diff -= total
  if (diff < -total / 2) diff += total
  return diff
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = stack.length

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const collageY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 48])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -30])
  const marqueeItems = [...hero.trusted, ...hero.trusted]

  useEffect(() => {
    if (reduced || paused) return

    const id = window.setInterval(() => {
      setActive((value) => (value + 1) % total)
    }, SWITCH_MS)

    return () => window.clearInterval(id)
  }, [reduced, paused, total])

  useEffect(() => {
    const onVisibility = () => setPaused(document.hidden)
    document.addEventListener("visibilitychange", onVisibility)
    return () => document.removeEventListener("visibilitychange", onVisibility)
  }, [])

  return (
    <section id="top" ref={ref} className={styles.hero} aria-label="Introduction">
      <motion.div className={styles.glow} style={{ y: glowY }} aria-hidden="true" />

      <div className={styles.shell}>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <motion.span
              className={styles.badge}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={spring}
            >
              {hero.badge}
            </motion.span>

            <motion.h1
              className={styles.headline}
              initial={reduced ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.05 }}
            >
              <span className={styles.headlineLead}>{hero.headline.lead}</span>
              <span className={styles.headlineAccent}> {hero.headline.accent}</span>
            </motion.h1>

            <motion.p
              className={styles.support}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.1 }}
            >
              {hero.support}
            </motion.p>

            <motion.div
              className={styles.ctas}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...spring, delay: 0.16 }}
            >
              <a className={styles.primary} href={hero.primaryCta.href}>
                {hero.primaryCta.label}
              </a>
              <a className={styles.secondary} href={hero.secondaryCta.href}>
                {hero.secondaryCta.label}
              </a>
            </motion.div>
          </div>

          <motion.div
            className={styles.collage}
            style={{ y: collageY }}
            initial={reduced ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...spring, delay: 0.12 }}
            onPointerEnter={() => setPaused(true)}
            onPointerLeave={() => setPaused(false)}
            aria-roledescription="carousel"
            aria-label="Tech stack"
          >
            <div className={styles.stage}>
              {stack.map((item, index) => {
                const offset = relativeOffset(index, active, total)
                const abs = Math.abs(offset)
                const visible = abs <= VISIBLE
                const isActive = offset === 0
                const accent = getStackHex(item.id)

                return (
                  <motion.button
                    key={item.id}
                    type="button"
                    className={styles.mark}
                    style={{ "--mark-accent": accent } as CSSProperties}
                    aria-label={item.label}
                    aria-current={isActive ? "true" : undefined}
                    tabIndex={isActive ? 0 : -1}
                    initial={false}
                    animate={{
                      x: `${offset * 62}%`,
                      scale: isActive ? 1 : Math.max(0.45, 0.78 - abs * 0.14),
                      opacity: visible ? (isActive ? 1 : 0.45 - abs * 0.08) : 0,
                      zIndex: VISIBLE + 1 - abs,
                      filter: isActive ? "blur(0px)" : `blur(${Math.min(abs, 2)}px)`,
                    }}
                    transition={reduced ? { duration: 0.2 } : carouselSpring}
                    onClick={() => setActive(index)}
                  >
                    <span className={styles.logoWrap} data-active={isActive || undefined}>
                      <StackIcon
                        id={item.id}
                        className={styles.logo}
                        title={item.label}
                        branded
                      />
                    </span>
                    <span className={styles.tag} data-active={isActive || undefined}>
                      <span className={styles.tagGroup}>{item.group}</span>
                      {item.label}
                    </span>
                  </motion.button>
                )
              })}
            </div>

            <div className={styles.dots} role="tablist" aria-label="Stack items">
              {stack.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  className={styles.dot}
                  aria-label={item.label}
                  aria-selected={index === active}
                  data-active={index === active || undefined}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.trusted}
          initial={reduced ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...spring, delay: 0.22 }}
        >
          <div className={styles.trustedBar}>
            <div
              className={`${styles.marqueeTrack} ${reduced ? styles.marqueeStatic : ""}`}
              aria-hidden={reduced ? undefined : true}
            >
              {(reduced ? hero.trusted : marqueeItems).map((item, i) => (
                <span key={`${item.id}-${i}`} className={styles.trustedItem}>
                  <StackIcon
                    id={item.id}
                    className={styles.trustedLogo}
                    title={item.label}
                    branded
                  />
                  <span className={styles.trustedName}>{item.label}</span>
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
