import { experience } from "../data/content"
import { Particles } from "./Particles"
import { Reveal } from "./Reveal"
import styles from "./Experience.module.css"

export function Experience() {
  return (
    <section id="experience" className={`section ${styles.experience}`}>
      <Particles density={38} />
      <div className={`section__inner ${styles.inner}`}>
        <Reveal>
          <span className="section__label">{experience.label}</span>
          <h2 className={`section__title ${styles.title}`}>
            {experience.title.lead}{" "}
            <span className="section__title-accent">{experience.title.accent}</span>
          </h2>
        </Reveal>

        <div className={styles.timeline}>
          {experience.roles.map((role, index) => (
            <Reveal key={`${role.company}-${role.title}`} delay={0.06 * (index + 1)}>
              <article className={styles.role}>
                <div className={styles.rail} aria-hidden="true">
                  <span className={styles.dot} />
                  <span className={styles.line} />
                </div>

                <div className={styles.card}>
                  <header className={styles.header}>
                    <div className={styles.heading}>
                      <p className={styles.company}>{role.company}</p>
                      <h3 className={styles.roleTitle}>{role.title}</h3>
                      <p className={styles.summary}>{role.summary}</p>
                    </div>
                    <div className={styles.meta}>
                      <span className={styles.period}>{role.period}</span>
                      <span className={styles.location}>{role.location}</span>
                    </div>
                  </header>

                  <ul className={styles.tags} aria-label="Technologies">
                    {role.tags.map((tag) => (
                      <li key={tag} className={styles.tag}>
                        {tag}
                      </li>
                    ))}
                  </ul>

                  <ul className={styles.highlights}>
                    {role.highlights.map((item) => (
                      <li key={item.label} className={styles.highlight}>
                        <span className={styles.highlightLabel}>{item.label}</span>
                        <p className={styles.highlightText}>{item.text}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
