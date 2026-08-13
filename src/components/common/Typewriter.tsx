import { useEffect, useState } from 'react'

interface Line {
  text: string
  className?: string
}

export function Typewriter({ lines, speed = 55, startDelay = 300 }: { lines: Line[]; speed?: number; startDelay?: number }) {
  const [lineIndex, setLineIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setStarted(true), startDelay)
    return () => clearTimeout(t)
  }, [startDelay])

  useEffect(() => {
    if (!started) return
    if (lineIndex >= lines.length) return

    const current = lines[lineIndex].text
    if (charIndex < current.length) {
      const t = setTimeout(() => setCharIndex((c) => c + 1), speed)
      return () => clearTimeout(t)
    } else {
      const t = setTimeout(() => {
        setLineIndex((l) => l + 1)
        setCharIndex(0)
      }, speed * 4)
      return () => clearTimeout(t)
    }
  }, [started, charIndex, lineIndex, lines, speed])

  const isDone = lineIndex >= lines.length

  return (
    <>
      {lines.map((line, i) => {
        const isCurrent = i === lineIndex
        const isPast = i < lineIndex
        const shown = isPast ? line.text : isCurrent ? line.text.slice(0, charIndex) : ''
        const showCaret = isCurrent && !isDone

        return (
          <span key={i} className={`${line.className ?? ''} block min-h-[1em]`}>
            {shown}
            {showCaret && <span className="inline-block w-0.75 h-[0.85em] bg-emerald-400 ml-1 align-middle animate-pulse" />}
          </span>
        )
      })}
    </>
  )
}
