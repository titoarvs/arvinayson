import { useState, type CSSProperties } from "react"
import { Reorder, useReducedMotion } from "motion/react"
import { skillGroups } from "../data/content"
import type { StackId } from "./StackIcon"
import { getStackHex, StackIcon } from "./StackIcon"
import { Reveal } from "./Reveal"
import styles from "./Skills.module.css"

type SkillItem = {
  id: StackId
  label: string
  group: string
}

const scatter = [
  { x: -6, y: 10, r: -3 },
  { x: 8, y: -4, r: 2.5 },
  { x: -2, y: 14, r: -1.5 },
  { x: 12, y: 2, r: 3 },
  { x: -10, y: -8, r: -2 },
  { x: 4, y: 12, r: 1.5 },
  { x: -14, y: 4, r: -2.5 },
  { x: 10, y: -12, r: 2 },
  { x: 0, y: 8, r: -1 },
  { x: -8, y: -2, r: 2.2 },
  { x: 14, y: 10, r: -2.8 },
  { x: -4, y: -10, r: 1.2 },
  { x: 6, y: 6, r: -1.8 },
  { x: -12, y: 12, r: 2.6 },
  { x: 2, y: -6, r: -2.2 },
  { x: 9, y: 0, r: 1 },
  { x: -7, y: 7, r: -1.4 },
]

const poseById = Object.fromEntries(
  skillGroups.groups
    .flatMap((group) => group.items.map((item) => item.id))
    .map((id, i) => [id, scatter[i % scatter.length]]),
) as Record<StackId, (typeof scatter)[number]>

const initialSkills: SkillItem[] = skillGroups.groups.flatMap((group) =>
  group.items.map((item) => ({
    id: item.id,
    label: item.label,
    group: group.title,
  })),
)

const spring = { type: "spring" as const, bounce: 0, duration: 0.35 }

export function Skills() {
  const [items, setItems] = useState(initialSkills)
  const reduced = useReducedMotion()

  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className={`section__inner ${styles.inner}`}>
        <Reveal>
          <div className={styles.heading}>
            <span className="section__label">{skillGroups.label}</span>
            <h2 className={`section__title ${styles.title}`}>
              {skillGroups.title.lead}{" "}
              <span className="section__title-accent">{skillGroups.title.accent}</span>
            </h2>
            <p className={styles.hint}>Drag to rearrange</p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <Reorder.Group
            axis="xy"
            values={items}
            onReorder={setItems}
            className={styles.scatter}
            as="ul"
          >
            {items.map((item) => {
              const pose = poseById[item.id]
              return (
                <Reorder.Item
                  key={item.id}
                  value={item}
                  className={styles.item}
                  style={
                    {
                      "--skill-accent": getStackHex(item.id),
                      "--tx": `${pose.x}px`,
                      "--ty": `${pose.y}px`,
                      "--rot": `${pose.r}deg`,
                    } as CSSProperties
                  }
                  layout={reduced ? undefined : "position"}
                  transition={reduced ? { duration: 0 } : spring}
                  whileDrag={
                    reduced
                      ? { zIndex: 10, cursor: "grabbing" }
                      : { scale: 1.05, zIndex: 10, cursor: "grabbing" }
                  }
                  dragElastic={0.08}
                >
                  <div className={styles.card}>
                    <StackIcon
                      id={item.id}
                      className={styles.icon}
                      title={item.label}
                      branded
                    />
                    <span className={styles.meta}>
                      <span className={styles.cardLabel}>{item.label}</span>
                      <span className={styles.cardGroup}>{item.group}</span>
                    </span>
                  </div>
                </Reorder.Item>
              )
            })}
          </Reorder.Group>
        </Reveal>
      </div>
    </section>
  )
}
