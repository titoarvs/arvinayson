import { contact } from "../data/content"
import { Particles } from "./Particles"
import { Reveal } from "./Reveal"
import styles from "./Contact.module.css"

const icons = {
  Email: (
    <path
      d="M4 6.5A1.5 1.5 0 0 1 5.5 5h13A1.5 1.5 0 0 1 20 6.5v11a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-11Zm2.1.5 5.4 4.05a.8.8 0 0 0 .98 0L17.9 7H6.1Zm11.8 1.55-4.72 3.54a2.3 2.3 0 0 1-2.76 0L5.7 9.05V17h12.2V9.05Z"
      fill="currentColor"
    />
  ),
  LinkedIn: (
    <path
      d="M6.4 9.2H3.7V20h2.7V9.2ZM5.05 4a1.7 1.7 0 1 0 0 3.4 1.7 1.7 0 0 0 0-3.4ZM20.3 20h-2.7v-5.55c0-1.55-.55-2.6-1.9-2.6-1.04 0-1.66.7-1.93 1.38-.1.24-.12.57-.12.9V20h-2.7s.04-9.4 0-10.8h2.7v1.53c.36-.55 1-1.33 2.44-1.33 1.78 0 3.21 1.16 3.21 3.66V20Z"
      fill="currentColor"
    />
  ),
  GitHub: (
    <path
      d="M12 2.2A9.8 9.8 0 0 0 2.2 12.1c0 4.37 2.83 8.08 6.76 9.38.5.1.68-.22.68-.48 0-.24-.01-1.03-.01-1.87-2.75.6-3.33-1.18-3.33-1.18-.45-1.15-1.1-1.46-1.1-1.46-.9-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.2-.25-4.51-1.1-4.51-4.9 0-1.08.38-1.97 1.02-2.66-.1-.25-.44-1.27.1-2.64 0 0 .83-.27 2.73 1.02a9.4 9.4 0 0 1 4.97 0c1.9-1.29 2.73-1.02 2.73-1.02.54 1.37.2 2.39.1 2.64.64.69 1.02 1.58 1.02 2.66 0 3.81-2.32 4.65-4.53 4.9.36.31.67.92.67 1.86 0 1.34-.01 2.42-.01 2.75 0 .26.18.58.69.48A9.81 9.81 0 0 0 21.8 12.1 9.8 9.8 0 0 0 12 2.2Z"
      fill="currentColor"
    />
  ),
  Phone: (
    <path
      d="M8.1 3.8c.3-.7 1.1-1.05 1.8-.8l1.7.6c.7.25 1.1.95.95 1.65l-.45 1.85a1.4 1.4 0 0 1-.95 1.02l-1.1.35a9.8 9.8 0 0 0 4.55 4.55l.35-1.1a1.4 1.4 0 0 1 1.02-.95l1.85-.45c.7-.15 1.4.25 1.65.95l.6 1.7c.25.7-.1 1.5-.8 1.8l-1.55.65c-.55.23-1.15.2-1.65-.05A14.3 14.3 0 0 1 7.5 9.85c-.25-.5-.28-1.1-.05-1.65L8.1 3.8Z"
      fill="currentColor"
    />
  ),
} as const

type Channel = keyof typeof icons

export function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <Particles density={40} />
      <div className="section__inner">
        <Reveal>
          <div className={styles.intro}>
            <span className="section__label">{contact.label}</span>
            <h2 className={`section__title ${styles.title}`}>
              {contact.title.lead}{" "}
              <span className="section__title-accent">{contact.title.accent}</span>
            </h2>
            <p className={styles.body}>{contact.body}</p>
          </div>
        </Reveal>

        <div className={styles.grid}>
          {contact.methods.map((method, i) => {
            const icon = icons[method.label as Channel]
            return (
              <Reveal key={method.label} delay={0.04 * (i + 1)}>
                <a
                  className={styles.card}
                  href={method.href}
                  {...(method.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                >
                  <span className={styles.cardTop}>
                    <span className={styles.icon} aria-hidden="true">
                      <svg viewBox="0 0 24 24" width="18" height="18">
                        {icon}
                      </svg>
                    </span>
                    <span className={styles.cardLabel}>{method.label}</span>
                    <span className={styles.arrow} aria-hidden="true">
                      →
                    </span>
                  </span>
                  <span className={styles.cardValue}>{method.value}</span>
                  <span className={styles.cardHint}>{method.hint}</span>
                </a>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
