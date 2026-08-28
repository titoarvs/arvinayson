const STORAGE_KEY = "theme"

export type Theme = "light" | "dark"

export function getSystemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light"
}

export function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(STORAGE_KEY)
  return stored === "light" || stored === "dark" ? stored : null
}

export function resolveTheme(stored: Theme | null = getStoredTheme()): Theme {
  return stored ?? getSystemTheme()
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme
  document.documentElement.style.colorScheme = theme
}

export function setTheme(theme: Theme) {
  localStorage.setItem(STORAGE_KEY, theme)
  applyTheme(theme)
}

export function toggleTheme(current: Theme): Theme {
  const next = current === "dark" ? "light" : "dark"
  setTheme(next)
  return next
}
