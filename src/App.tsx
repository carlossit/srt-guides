import { Meteors } from '@/registry/magicui/meteors'
import './App.css'

type ButtonSpec = {
  title: string
  href: string
}

// Sorted clockwise from 12 o'clock by warehouse operation flow:
// Receiving (4) → Stocking (3) → Consolidation (post-Picking)
const BUTTONS: ButtonSpec[] = [
  {
    title: 'Receive-It: Expected Receipt',
    href: 'https://app.supademo.com/demo/cmon0sug50npgw9dormp78ogr?utm_source=link',
  },
  {
    title: 'Receive-It: Unexpected Receipt',
    href: 'https://app.supademo.com/demo/cmom3cuv02cojpimdom6ark25?utm_source=link',
  },
  {
    title: 'Receive-It: Generate Labels',
    href: 'https://app.supademo.com/demo/cmom05fce2b3dpimdplfzaa7v?utm_source=link',
  },
  {
    title: 'Receive-It: Receive to Tote',
    href: 'https://app.supademo.com/demo/cmolz2jiw29dnpimds6y122wl?utm_source=link',
  },
  {
    title: 'Stock-It: Tote Put-Away',
    href: 'https://app.supademo.com/demo/cmokl08rk947oza2i0nnz3b3w?utm_source=link',
  },
  {
    title: 'Stock-It: Product Put-Away',
    href: 'https://app.supademo.com/demo/cmokpjkrh02onpimdpz4w3tbx?utm_source=link',
  },
  {
    title: 'Stock-It: Pallet Putaway',
    href: 'https://app.supademo.com/demo/cmokquxcw03nxpimdcc4ajqjm?utm_source=link',
  },
  {
    title: 'Consolidation',
    href: 'https://app.supademo.com/demo/cmonivxys1anyw9donwgy73jm?utm_source=link',
  },
]

const shortLabel = (title: string) =>
  title.replace(/^(Receive-It|Stock-It):\s*/i, '')

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
              Click any button to walk through the module step-by-step.
            </p>
          </div>

          <div className="relative mx-auto aspect-square w-full max-w-3xl">
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
              <img
                src="/images/srt_modules-removebg-preview.png"
                alt="SRT modules"
                className="w-full max-w-[260px] object-contain opacity-90 md:max-w-[320px]"
              />
            </div>

            {BUTTONS.map((btn, i) => {
              const angle = (i / BUTTONS.length) * 2 * Math.PI - Math.PI / 2
              const x = Math.cos(angle) * 38
              const y = Math.sin(angle) * 38
              return (
                <a
                  key={btn.href}
                  href={btn.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute flex size-28 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-center text-xs font-bold leading-tight text-white transition-transform duration-300 hover:scale-110 sm:size-32 md:size-36 md:text-sm lg:size-40"
                  style={{
                    left: `${50 + x}%`,
                    top: `${50 + y}%`,
                    background: `
                      radial-gradient(circle at 50% 25%, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 55%),
                      linear-gradient(to bottom, #f87171 0%, #dc2626 50%, #7f1d1d 100%)
                    `,
                    boxShadow:
                      'inset 0 -8px 16px rgba(0,0,0,0.4), inset 0 3px 6px rgba(255,255,255,0.5), 0 6px 20px rgba(220,38,38,0.5)',
                    textShadow: '0 1px 2px rgba(0,0,0,0.6)',
                  }}
                >
                  <span className="px-3 text-balance">
                    {shortLabel(btn.title)}
                  </span>
                </a>
              )
            })}
          </div>
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

export default App
