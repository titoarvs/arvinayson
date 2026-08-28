import { useEffect, useRef, useState } from "react"
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react"
import { hero } from "../data/content"
import styles from "./Hero.module.css"

const spring = { type: "spring" as const, bounce: 0, duration: 0.4 }
const carouselSpring = { type: "spring" as const, bounce: 0.14, duration: 0.55 }
const SWITCH_MS = 4000
const VISIBLE = 1

const projects = hero.projects

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
  const [failed, setFailed] = useState<Record<string, boolean>>({})
  const total = projects.length

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const collageY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : 48])
  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduced ? 0 : -30])

  useEffect(() => {
    if (reduced || paused || total < 2) return

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
            aria-label="Selected websites"
          >
            <div className={styles.stage}>
              {projects.map((project, index) => {
                const offset = relativeOffset(index, active, total)
                const abs = Math.abs(offset)
                const visible = abs <= VISIBLE
                const isActive = offset === 0
                const broken = failed[project.id]

                return (
                  <motion.a
                    key={project.id}
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.preview}
                    aria-label={`${project.title} — open site`}
                    aria-current={isActive ? "true" : undefined}
                    tabIndex={isActive ? 0 : -1}
                    initial={false}
                    animate={{
                      x: `${offset * 72}%`,
                      scale: isActive ? 1 : Math.max(0.72, 0.88 - abs * 0.1),
                      opacity: visible ? (isActive ? 1 : 0.35) : 0,
                      zIndex: VISIBLE + 1 - abs,
                      filter: isActive ? "blur(0px)" : `blur(${4 + abs * 4}px)`,
                    }}
                    transition={reduced ? { duration: 0.2 } : carouselSpring}
                    onFocus={() => setActive(index)}
                    onClick={(event) => {
                      if (!isActive) {
                        event.preventDefault()
                        setActive(index)
                      }
                    }}
                  >
                    <span className={styles.browser}>
                      <span className={styles.browserBar} aria-hidden="true">
                        <span className={styles.dotRed} />
                        <span className={styles.dotAmber} />
                        <span className={styles.dotGreen} />
                        <span className={styles.browserUrl}>{project.url.replace(/^https?:\/\//, "")}</span>
                      </span>
                      <span className={styles.shot}>
                        {broken ? (
                          <span className={styles.shotFallback}>
                            <span className={styles.shotInitial}>
                              {project.title.charAt(0)}
                            </span>
                            <span>Preview unavailable</span>
                          </span>
                        ) : (
                          <img
                            src={project.image}
                            alt=""
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding="async"
                            onError={() =>
                              setFailed((prev) => ({ ...prev, [project.id]: true }))
                            }
                          />
                        )}
                      </span>
                    </span>
                    <span className={styles.previewMeta} data-active={isActive || undefined}>
                      <span className={styles.previewTitle}>{project.title}</span>
                      <span className={styles.previewStack}>{project.stack}</span>
                    </span>
                  </motion.a>
                )
              })}
            </div>

            <div className={styles.dots} role="tablist" aria-label="Website previews">
              {projects.map((project, index) => (
                <button
                  key={project.id}
                  type="button"
                  className={styles.dot}
                  aria-label={project.title}
                  aria-selected={index === active}
                  data-active={index === active || undefined}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
