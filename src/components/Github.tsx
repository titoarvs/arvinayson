import { useEffect, useState } from "react"
import { GitHubCalendar } from "react-github-calendar"
import { github } from "../data/content"
import { useTheme } from "../theme/ThemeProvider"
import { Particles } from "./Particles"
import { Reveal } from "./Reveal"
import styles from "./Github.module.css"

const calendarTheme = {
  light: ["#ebf2f7", "#b7e4f4", "#6ecce8", "#2eb5e0", "#1a7fa0"],
  dark: ["#1a2330", "#1d4a5c", "#2a7a96", "#4ec4e8", "#7dd8f0"],
}

type GithubProfile = {
  login: string
  name: string | null
  avatar_url: string
  html_url: string
  public_repos: number
  followers: number
}

function formatCount(n: number) {
  return new Intl.NumberFormat("en", { notation: "compact" }).format(n)
}

export function Github() {
  const { theme } = useTheme()
  const [profile, setProfile] = useState<GithubProfile | null>(null)

  useEffect(() => {
    let cancelled = false

    fetch(`https://api.github.com/users/${github.username}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data: GithubProfile | null) => {
        if (!cancelled && data) setProfile(data)
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section id="github" className={`section ${styles.github}`}>
      <Particles density={32} />
      <div className={`section__inner ${styles.inner}`}>
        <Reveal>
          <div className={styles.bar}>
            <a
              className={styles.profile}
              href={profile?.html_url ?? github.profileUrl}
              target="_blank"
              rel="noreferrer"
            >
              <img
                className={styles.avatar}
                src={
                  profile?.avatar_url ??
                  `https://github.com/${github.username}.png?size=128`
                }
                alt=""
                width={56}
                height={56}
                loading="lazy"
              />
              <span className={styles.identity}>
                <span className={styles.name}>
                  {profile?.name ?? github.username}
                </span>
                <span className={styles.handle}>@{github.username}</span>
              </span>
              {profile ? (
                <span className={styles.stats}>
                  <span>
                    <strong>{formatCount(profile.public_repos)}</strong> repos
                  </span>
                  <span>
                    <strong>{formatCount(profile.followers)}</strong> followers
                  </span>
                </span>
              ) : null}
            </a>

            <div className={styles.calendar}>
              <GitHubCalendar
                username={github.username}
                colorScheme={theme}
                theme={calendarTheme}
                blockSize={11}
                blockMargin={2.5}
                fontSize={11}
                showWeekdayLabels={false}
                showColorLegend={false}
                showTotalCount={false}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
