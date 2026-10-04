import { useState } from "react"
import { hero } from "../data/content"
import { Particles } from "./Particles"
import { Reveal } from "./Reveal"
import styles from "./Work.module.css"

const [featured, ...rest] = hero.projects

export function Work() {
  const [live, setLive] = useState(false)

  return (
    <section id="work" className={`section ${styles.work}`}>
      <Particles density={36} />
      <div className={`section__inner ${styles.inner}`}>
        <Reveal>
          <div className={styles.heading}>
            <div>
              <span className="section__label">Work</span>
              <h2 className={`section__title ${styles.title}`}>
                Latest thing{" "}
                <span className="section__title-accent">on the floor.</span>
              </h2>
            </div>
            <div className={styles.featuredCopy}>
              <span className={styles.kicker}>Live lobby</span>
              <span className={styles.featuredTitle}>{featured.title}</span>
              <span className={styles.summary}>{featured.summary}</span>
              <span className={styles.stack}>{featured.stack}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className={styles.stage}>
            {live ? (
              <iframe
                className={styles.frame}
                src={featured.url}
                title="Virtual Office lobby"
                allow="fullscreen; pointer-lock"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <button
                type="button"
                className={styles.cover}
                onClick={() => setLive(true)}
              >
                <img src={featured.image} alt="" />
                <span className={styles.coverShade} />
                <span className={styles.enter}>
                  <span className={styles.enterMark} aria-hidden="true">
                    ▶
                  </span>
                  Enter the lobby
                </span>
              </button>
            )}
            <div className={styles.stageBar}>
              <span className={styles.live}>
                <span className={styles.liveDot} data-on={live || undefined} />
                {live ? "Live" : "Preview"}
              </span>
              <span className={styles.room}>#lobby</span>
              <a
                className={styles.open}
                href={featured.url}
                target="_blank"
                rel="noreferrer"
              >
                Open full lobby
              </a>
            </div>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {rest.map((project, index) => (
            <Reveal key={project.id} delay={0.04 * (index + 1)}>
              <a
                className={styles.card}
                href={project.url}
                target="_blank"
                rel="noreferrer"
              >
                <span className={styles.cardShot}>
                  <img src={project.image} alt="" />
                </span>
                <span className={styles.cardBody}>
                  <span className={styles.cardTitle}>{project.title}</span>
                  <span className={styles.cardSummary}>{project.summary}</span>
                  <span className={styles.cardMeta}>
                    <span>{project.stack}</span>
                    <span className={styles.cardLink} aria-hidden="true">
                      →
                    </span>
                  </span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
