import { site } from "../data/content"
import styles from "./Footer.module.css"

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.copy}>
          © {year} {site.name}
        </p>
        <p className={styles.note}>Built with care — React, Vite, Motion.</p>
      </div>
    </footer>
  )
}
