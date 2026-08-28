import { useEffect, useRef } from "react"
import { useReducedMotion } from "motion/react"
import styles from "./Particles.module.css"

type Particle = {
  x: number
  y: number
  r: number
  vx: number
  vy: number
  a: number
}

type ParticlesProps = {
  density?: number
  className?: string
}

function readAccent(el: HTMLElement) {
  const styles = getComputedStyle(el)
  const accent = styles.getPropertyValue("--color-accent").trim() || "#2eb5e0"
  const text = styles.getPropertyValue("--color-text").trim() || "#15233b"
  return { accent, text }
}

export function Particles({ density = 42, className }: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const reduced = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas || reduced) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const parent = canvas.parentElement
    if (!parent) return

    let particles: Particle[] = []
    let width = 0
    let height = 0
    let raf = 0
    let visible = true
    let running = true

    const spawn = () => {
      const count = Math.max(18, Math.round((width * height) / (18000 / (density / 42))))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.6 + Math.random() * 1.8,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        a: 0.12 + Math.random() * 0.28,
      }))
    }

    const resize = () => {
      const rect = parent.getBoundingClientRect()
      width = Math.max(1, Math.floor(rect.width))
      height = Math.max(1, Math.floor(rect.height))
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      spawn()
    }

    const draw = () => {
      if (!running) return
      raf = requestAnimationFrame(draw)
      if (!visible) return

      const { accent, text } = readAccent(parent)
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        if (p.x < -4) p.x = width + 4
        if (p.x > width + 4) p.x = -4
        if (p.y < -4) p.y = height + 4
        if (p.y > height + 4) p.y = -4

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = accent
        ctx.globalAlpha = p.a
        ctx.fill()

        // soft companion speck in text color for depth
        if (p.r > 1.4) {
          ctx.beginPath()
          ctx.arc(p.x + p.r * 2.2, p.y - p.r * 1.4, p.r * 0.45, 0, Math.PI * 2)
          ctx.fillStyle = text
          ctx.globalAlpha = p.a * 0.35
          ctx.fill()
        }
      }

      ctx.globalAlpha = 1
    }

    const ro = new ResizeObserver(resize)
    ro.observe(parent)

    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting
      },
      { rootMargin: "80px", threshold: 0.01 },
    )
    io.observe(parent)

    resize()
    raf = requestAnimationFrame(draw)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      ro.disconnect()
      io.disconnect()
    }
  }, [reduced, density])

  if (reduced) return null

  return (
    <canvas
      ref={canvasRef}
      className={`${styles.canvas}${className ? ` ${className}` : ""}`}
      aria-hidden="true"
    />
  )
}
