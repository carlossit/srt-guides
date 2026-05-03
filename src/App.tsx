import {
  Boxes,
  ClipboardCheck,
  ClipboardX,
  Combine,
  Container,
  Package,
  PackagePlus,
  Tag,
  type LucideIcon,
} from 'lucide-react'

import { GlowingEffect } from '@/components/ui/glowing-effect'
import { Meteors } from '@/registry/magicui/meteors'
import './App.css'

type CardSpec = {
  title: string
  description: string
  icon: LucideIcon
  href: string
  area: string
}

const CARDS: CardSpec[] = [
  {
    title: 'Consolidation',
    description: 'Combine receipts and orders into single pick lists.',
    icon: Combine,
    href: 'https://app.supademo.com/demo/cmonivxys1anyw9donwgy73jm?utm_source=link',
    area: 'md:[grid-area:1/1/2/4] xl:[grid-area:1/1/2/4]',
  },
  {
    title: 'Receive-It: Expected Receipt',
    description: 'ASN-driven inbound receiving against POs.',
    icon: ClipboardCheck,
    href: 'https://app.supademo.com/demo/cmon0sug50npgw9dormp78ogr?utm_source=link',
    area: 'md:[grid-area:1/4/2/7] xl:[grid-area:2/1/3/4]',
  },
  {
    title: 'Receive-It: Unexpected Receipt',
    description: 'Capture unplanned inbound without breaking flow.',
    icon: ClipboardX,
    href: 'https://app.supademo.com/demo/cmom3cuv02cojpimdom6ark25?utm_source=link',
    area: 'md:[grid-area:1/7/2/10] xl:[grid-area:3/1/4/4]',
  },
  {
    title: 'Receive-It: Generate Labels',
    description: 'Print SSCC and item labels right on the dock.',
    icon: Tag,
    href: 'https://app.supademo.com/demo/cmom05fce2b3dpimdplfzaa7v?utm_source=link',
    area: 'md:[grid-area:1/10/2/13] xl:[grid-area:4/1/5/4]',
  },
  {
    title: 'Receive-It: Receive to Tote',
    description: 'Receive directly into totes for downstream put-away.',
    icon: PackagePlus,
    href: 'https://app.supademo.com/demo/cmolz2jiw29dnpimds6y122wl?utm_source=link',
    area: 'md:[grid-area:4/1/5/4] xl:[grid-area:1/10/2/13]',
  },
  {
    title: 'Stock-It: Tote Put-Away',
    description: 'Move totes from receiving into storage locations.',
    icon: Container,
    href: 'https://app.supademo.com/demo/cmokl08rk947oza2i0nnz3b3w?utm_source=link',
    area: 'md:[grid-area:4/4/5/7] xl:[grid-area:2/10/3/13]',
  },
  {
    title: 'Stock-It: Product Put-Away',
    description: 'Place individual products into bin locations.',
    icon: Package,
    href: 'https://app.supademo.com/demo/cmokpjkrh02onpimdpz4w3tbx?utm_source=link',
    area: 'md:[grid-area:4/7/5/10] xl:[grid-area:3/10/4/13]',
  },
  {
    title: 'Stock-It: Pallet Putaway',
    description: 'Park full pallets into rack or bulk storage.',
    icon: Boxes,
    href: 'https://app.supademo.com/demo/cmokquxcw03nxpimdcc4ajqjm?utm_source=link',
    area: 'md:[grid-area:4/10/5/13] xl:[grid-area:4/10/5/13]',
  },
]

function App() {
  return (
    <main className="bg-black">
      <header className="sticky top-0 z-50 w-full border-b border-neutral-900 bg-black/70 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-8">
          <a href="/" className="flex items-center">
            <img
              src="/images/logo.png"
              alt="Streamline-It"
              className="h-9 w-auto"
            />
          </a>

          <a
            href="https://streamlineit.com/contact/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
          >
            Contact Sales
          </a>
        </div>
      </header>

      <section className="relative w-full overflow-hidden px-4 py-16 md:px-8 md:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.12),transparent_65%)]" />
          <Meteors number={40} />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="mb-10 text-center md:mb-14">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-red-500">
              Interactive Guides
            </p>
            <h1 className="text-4xl font-bold uppercase leading-[1.05] tracking-tight text-white md:text-5xl lg:text-6xl">
              Explore every Streamline-It module
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-neutral-400 md:text-lg">
              Click any card to walk through the module step-by-step.
            </p>
          </div>

          <ul className="grid grid-cols-1 gap-4 md:grid-cols-12 md:grid-rows-4 xl:grid-rows-4">
            {CARDS.map((card) => (
              <BentoCard key={card.href} {...card} />
            ))}

            <li className="list-none md:[grid-area:2/1/4/13] xl:[grid-area:1/4/5/10]">
              <div className="relative flex h-full items-center justify-center rounded-2xl border border-neutral-800 bg-black/40 p-4 md:rounded-3xl md:p-6">
                <GlowingEffect
                  blur={0}
                  borderWidth={3}
                  spread={80}
                  glow={true}
                  disabled={false}
                  proximity={64}
                  inactiveZone={0.01}
                  autoAnimate
                />
                <img
                  src="/images/srt_modules-removebg-preview.png"
                  alt="SRT modules"
                  className="max-h-full w-auto max-w-full object-contain"
                />
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="overflow-hidden bg-black py-12 md:py-20">
        <h2
          className="select-none whitespace-nowrap bg-linear-to-b from-[#202020] to-[#0a0a0a] bg-clip-text text-center font-black leading-none tracking-tighter text-transparent"
          style={{ fontSize: 'clamp(3rem, 15vw, 100vw)' }}
        >
          Streamline-It
        </h2>
      </section>

    </main>
  )
}

const BentoCard = ({ area, icon: Icon, title, description, href }: CardSpec) => {
  return (
    <li className={`list-none min-h-[12rem] ${area}`}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block h-full rounded-2xl border border-neutral-800 p-2 transition duration-300 hover:scale-[1.02] hover:border-red-900 md:rounded-3xl md:p-3"
      >
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          autoAnimate
        />
        <div className="relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl bg-black/40 p-5 shadow-[0px_0px_27px_0px_#1a1a1a] md:p-6">
          <div
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              backgroundImage:
                'radial-gradient(circle, rgba(239,68,68,0.13) 1px, transparent 1px)',
              backgroundSize: '14px 14px',
              maskImage:
                'radial-gradient(ellipse at top right, black, transparent 75%)',
              WebkitMaskImage:
                'radial-gradient(ellipse at top right, black, transparent 75%)',
            }}
          />
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-neutral-700 p-2">
              <Icon className="h-4 w-4 text-neutral-400" />
            </div>
            <div className="space-y-2">
              <h3 className="font-sans text-base font-semibold tracking-tight text-balance text-white md:text-lg">
                {title}
              </h3>
              <p className="font-sans text-xs text-neutral-400 md:text-sm">
                {description}
              </p>
            </div>
          </div>
        </div>
      </a>
    </li>
  )
}

export default App
