import {
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siNodedotjs,
  siNestjs,
  siPhp,
  siLaravel,
  siPostgresql,
  siMysql,
  siSupabase,
  siGit,
  siJira,
  type SimpleIcon,
} from "simple-icons"

type IconDef = Pick<SimpleIcon, "path" | "hex" | "title">

/** Official Adobe app marks (simple-icons retired trademarked Adobe icons). */
const photoshop: IconDef = {
  title: "Adobe Photoshop",
  hex: "31A8FF",
  path: "M9.85 8.42c-.37-.15-.77-.21-1.18-.2-.26 0-.49 0-.68.01-.2-.01-.34 0-.41.01v3.36c.14.01.27.02.39.02h.53c.39 0 .78-.06 1.15-.18.32-.09.6-.28.82-.53.21-.25.31-.59.31-1.03.01-.31-.07-.62-.23-.89-.17-.26-.41-.46-.7-.57zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.899c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-7.391 11.65c-.399.56-.959.98-1.609 1.22-.68.25-1.43.34-2.25.34-.24 0-.4 0-.5-.01s-.24-.01-.43-.01v3.209c.01.07-.04.131-.11.141H5.52c-.08 0-.12-.041-.12-.131V6.42c0-.07.03-.11.1-.11.17 0 .33 0 .56-.01.24-.01.49-.01.76-.02s.56-.01.87-.02c.31-.01.61-.01.91-.01.82 0 1.5.1 2.06.31.5.17.96.45 1.34.82.32.32.57.71.73 1.14.149.42.229.85.229 1.3.001.86-.199 1.57-.6 2.13zm7.091 3.89c-.28.4-.671.709-1.12.891-.49.209-1.09.318-1.811.318-.459 0-.91-.039-1.359-.129-.35-.061-.7-.17-1.02-.32-.07-.039-.121-.109-.111-.189v-1.74c0-.029.011-.07.041-.09.029-.02.06-.01.09.01.39.23.8.391 1.24.49.379.1.779.15 1.18.15.38 0 .65-.051.83-.141.16-.07.27-.24.27-.42 0-.141-.08-.27-.24-.4-.16-.129-.489-.279-.979-.471-.51-.18-.979-.42-1.42-.719-.31-.221-.569-.51-.761-.85-.159-.32-.239-.67-.229-1.021 0-.43.12-.84.341-1.21.25-.4.619-.72 1.049-.92.469-.239 1.059-.349 1.769-.349.41 0 .83.03 1.24.09.3.04.59.12.86.23.039.01.08.05.1.09.01.04.02.08.02.12v1.63c0 .04-.02.08-.05.1-.09.02-.14.02-.18 0-.3-.16-.62-.27-.96-.34-.37-.08-.74-.13-1.12-.13-.2-.01-.41.02-.601.07-.129.03-.24.1-.31.2-.05.08-.08.18-.08.27s.04.18.101.26c.09.11.209.2.34.27.229.12.47.23.709.33.541.18 1.061.43 1.541.73.33.209.6.49.789.83.16.318.24.67.23 1.029.011.471-.129.94-.389 1.331z",
}

const illustrator: IconDef = {
  title: "Adobe Illustrator",
  hex: "FF9A00",
  path: "M10.53 10.73c-.1-.31-.19-.61-.29-.92-.1-.31-.19-.6-.27-.89-.08-.28-.15-.54-.22-.78h-.02c-.09.43-.2.86-.34 1.29-.15.48-.3.98-.46 1.48-.14.51-.29.98-.44 1.4h2.54c-.06-.211-.14-.46-.23-.721-.09-.269-.18-.559-.27-.859zM19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.091c-.069.01-.139-.04-.159-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.141H5.08c-.11 0-.14-.061-.11-.18L8.19 7.38c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.109 0 .16-.1.16zm3.4-.15c0 .11-.039.16-.129.16H16.01c-.1 0-.15-.061-.15-.16v-7.7c0-.1.041-.14.131-.14h1.98c.09 0 .129.05.129.14v7.7zm-.209-9.03c-.231.24-.571.37-.911.35-.33.01-.65-.12-.891-.35-.23-.25-.35-.58-.34-.92-.01-.34.12-.66.359-.89.242-.23.562-.35.892-.35.391 0 .689.12.91.35.22.24.34.56.33.89.01.34-.11.67-.349.92z",
}

/** Classic Firebase flame — clearer at small sizes than the detailed mark. */
const firebase: IconDef = {
  title: "Firebase",
  hex: "DD2C00",
  path: "M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z",
}

const aiIntegrations: IconDef = {
  title: "AI integrations",
  hex: "2EB5E0",
  path: "M12 2.2 13.7 8.3 19.8 10 13.7 11.7 12 17.8 10.3 11.7 4.2 10 10.3 8.3 12 2.2zm6.8 11.2 1 3.4 3.4 1-3.4 1-1 3.4-1-3.4-3.4-1 3.4-1 1-3.4zM4.6 14.4l.7 2.3 2.3.7-2.3.7-.7 2.3-.7-2.3-2.3-.7 2.3-.7.7-2.3z",
}

const icons = {
  javascript: siJavascript,
  typescript: siTypescript,
  react: siReact,
  nextjs: siNextdotjs,
  nodejs: siNodedotjs,
  nestjs: siNestjs,
  php: siPhp,
  laravel: siLaravel,
  postgresql: siPostgresql,
  mysql: siMysql,
  supabase: siSupabase,
  firebase,
  git: siGit,
  jira: siJira,
  photoshop,
  illustrator,
  ai: aiIntegrations,
} as const satisfies Record<string, IconDef>

export type StackId = keyof typeof icons

type StackIconProps = {
  id: StackId
  className?: string
  title?: string
  branded?: boolean
}

/** Near-black brand marks need theme-aware fill to stay visible. */
function brandFill(hex: string) {
  const normalized = hex.toLowerCase()
  if (normalized === "000" || normalized === "000000") {
    return "var(--stack-mono, currentColor)"
  }
  return `#${hex}`
}

export function StackIcon({ id, className, title, branded = false }: StackIconProps) {
  const icon = icons[id]

  return (
    <svg
      className={className}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden={title ? undefined : true}
    >
      {title ? <title>{title}</title> : null}
      <path d={icon.path} fill={branded ? brandFill(icon.hex) : "currentColor"} />
    </svg>
  )
}

export function getStackHex(id: StackId) {
  return `#${icons[id].hex}`
}
