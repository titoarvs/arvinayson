import { about } from "../data/content"
import { Reveal } from "./Reveal"
import styles from "./About.module.css"

export function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="section__inner">
        <Reveal>
          <span className="section__label">{about.label}</span>
          <h2 className="section__title">
            <span className={styles.titleLead}>{about.title.lead} </span>
            <span className="section__title-accent">{about.title.accent}</span>
          </h2>
          <p className={styles.body}>{about.body}</p>
        </Reveal>
      </div>
    </section>
  )
}
