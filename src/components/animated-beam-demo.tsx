"use client"

import React, { forwardRef, useMemo, useRef } from "react"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/registry/magicui/animated-beam"

const Node = forwardRef<
  HTMLDivElement,
  {
    className?: string
    children?: React.ReactNode
    style?: React.CSSProperties
  }
>(({ className, children, style }, ref) => {
  return (
    <div
      ref={ref}
      style={style}
      className={cn(
        "z-10 flex h-12 min-w-[130px] items-center justify-center rounded-full border-2 px-4 text-sm font-semibold tracking-wide shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  )
})

Node.displayName = "Node"

type Category = "interface" | "erp" | "operations" | "control" | "hardware"

const CATEGORY_STYLES: Record<
  Category,
  {
    pill: string
    gradientStart: string
    gradientStop: string
  }
> = {
  // Inner ring — core integration layer, dark red filled
  interface: {
    pill: "border-red-600 bg-red-900 text-white",
    gradientStart: "#fca5a5",
    gradientStop: "#dc2626",
  },
  // Single client system, white pill with red border
  erp: {
    pill: "border-red-600 bg-white text-neutral-900",
    gradientStart: "#fecaca",
    gradientStop: "#ef4444",
  },
  // The -IT module suite, black filled with red border
  operations: {
    pill: "border-red-500 bg-black text-white",
    gradientStart: "#fca5a5",
    gradientStop: "#dc2626",
  },
  // Control layer, outlined red
  control: {
    pill: "border-red-500 bg-transparent text-red-400",
    gradientStart: "#fecaca",
    gradientStop: "#ef4444",
  },
  // Peripheral hardware, neutral (no red emphasis)
  hardware: {
    pill: "border-neutral-500 bg-black text-neutral-300",
    gradientStart: "#e5e5e5",
    gradientStop: "#737373",
  },
}

type NodeSpec = {
  label: string
  angleDeg: number
  radius: number
  category: Category
}

// angleDeg: 0 = top (12 o'clock), increases clockwise
const NODES: NodeSpec[] = [
  // Inner ring — Data Exchange Interface (closer to SRT, like SRT-XI)
  { label: "WCS", angleDeg: 270, radius: 200, category: "interface" },
  { label: "WMS", angleDeg: 90, radius: 200, category: "interface" },

  // Outer ring — top: ERP (Client's ERP System)
  { label: "ERP", angleDeg: 0, radius: 400, category: "erp" },

  // Outer ring — right cluster: warehouse operations (-IT suite)
  { label: "RECEIVE-IT", angleDeg: 25, radius: 400, category: "operations" },
  { label: "STOCK-IT", angleDeg: 50, radius: 400, category: "operations" },
  { label: "REPLENISH-IT", angleDeg: 75, radius: 400, category: "operations" },
  { label: "PICK-IT", angleDeg: 100, radius: 400, category: "operations" },
  { label: "PACK-IT", angleDeg: 125, radius: 400, category: "operations" },
  { label: "SHIP-IT", angleDeg: 150, radius: 400, category: "operations" },
  { label: "RETURN-IT", angleDeg: 175, radius: 400, category: "operations" },

  // Outer ring — bottom-left: control
  { label: "CONTROL-IT", angleDeg: 215, radius: 400, category: "control" },

  // Outer ring — left cluster: hardware (kept off the WCS axis at 270°)
  { label: "PLC", angleDeg: 250, radius: 400, category: "hardware" },
  { label: "HMI", angleDeg: 305, radius: 400, category: "hardware" },
]

export function AnimatedBeamDemo() {
  const containerRef = useRef<HTMLDivElement>(null)
  const centerRef = useRef<HTMLDivElement>(null)
  const nodeRefs = useMemo(
    () => NODES.map(() => React.createRef<HTMLDivElement>()),
    []
  )

  return (
    <div
      ref={containerRef}
      className="relative mx-auto flex h-[880px] w-full max-w-[1100px] items-center justify-center overflow-hidden"
    >
      <Node
        ref={centerRef}
        className="size-28 min-w-0 border-red-700 bg-red-600 text-xl font-bold text-white"
      >
        SRT
      </Node>

      {NODES.map((spec, i) => {
        const rad = ((spec.angleDeg - 90) * Math.PI) / 180
        const x = Math.cos(rad) * spec.radius
        const y = Math.sin(rad) * spec.radius
        return (
          <Node
            key={spec.label}
            ref={nodeRefs[i]}
            className={cn("absolute left-1/2 top-1/2", CATEGORY_STYLES[spec.category].pill)}
            style={{
              transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
            }}
          >
            {spec.label}
          </Node>
        )
      })}

      {nodeRefs.map((ref, i) => {
        const styles = CATEGORY_STYLES[NODES[i].category]
        return (
          <AnimatedBeam
            key={NODES[i].label}
            containerRef={containerRef}
            fromRef={ref}
            toRef={centerRef}
            duration={4 + (i % 3)}
            delay={(i % 5) * 0.3}
            gradientStartColor={styles.gradientStart}
            gradientStopColor={styles.gradientStop}
          />
        )
      })}
    </div>
  )
}
