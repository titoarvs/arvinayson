import { education } from "../data/content"
import { Reveal } from "./Reveal"
import styles from "./Education.module.css"

export function Education() {
  return (
    <section id="education" className={`section ${styles.education}`}>
      <div className="section__inner">
        <Reveal>
          <span className="section__label">{education.label}</span>
          <h2 className={`section__title ${styles.title}`}>
            {education.title.lead}{" "}
            <span className="section__title-accent">{education.title.accent}</span>
          </h2>
        </Reveal>

        <div className={styles.list}>
          {education.entries.map((entry, i) => (
            <Reveal key={entry.degree} delay={0.05 * (i + 1)}>
              <article className={styles.entry}>
                <header className={styles.header}>
                  <span className={styles.index}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.level}>{entry.level}</span>
                </header>

                <h3 className={styles.degree}>{entry.degree}</h3>
                <p className={styles.school}>{entry.school}</p>
                <p className={styles.focus}>{entry.focus}</p>

                <footer className={styles.footer}>
                  <span className={styles.period}>{entry.period}</span>
                </footer>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
