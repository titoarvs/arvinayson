import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "motion/react"
import { navLinks, site } from "../data/content"
import { ThemeToggle } from "./ThemeToggle"
import styles from "./Nav.module.css"

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const reduced = useReducedMotion()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <motion.header
      className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}
      initial={reduced ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={
        reduced
          ? { duration: 0.2, ease: "easeOut" }
          : { type: "spring", bounce: 0, duration: 0.4 }
      }
    >
      <div className={styles.inner}>
        <a className={styles.brand} href="#top" aria-label={site.name}>
          <span className={styles.brandAccent}>{site.firstName.charAt(0).toLowerCase()}</span>
          <span className={styles.brandRest}>{site.lastName.charAt(0).toLowerCase()}</span>
        </a>
        <nav className={styles.links} aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} className={styles.link} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className={styles.actions}>
          <ThemeToggle />
          <a className={styles.cta} href="#contact">
            Contact
          </a>
        </div>
      </div>
    </motion.header>
  )
}
