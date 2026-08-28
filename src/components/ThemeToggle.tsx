import { useTheme } from "../theme/ThemeProvider"
import styles from "./ThemeToggle.module.css"

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className={styles.icon} aria-hidden="true">
        {isDark ? (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
            <circle cx="12" cy="12" r="4.25" stroke="currentColor" strokeWidth="1.75" />
            <path
              d="M12 3v1.5M12 19.5V21M4.93 4.93l1.06 1.06M18.01 18.01l1.06 1.06M3 12h1.5M19.5 12H21M4.93 19.07l1.06-1.06M18.01 5.99l1.06-1.06"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
            <path
              d="M20.2 13.4A7.8 7.8 0 0 1 10.6 3.8 7.9 7.9 0 1 0 20.2 13.4Z"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>
    </button>
  )
}
