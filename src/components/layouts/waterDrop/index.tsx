/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-plusplus */
import { useEffect, useRef } from 'react'
import anime from 'animejs'
import { useAnimation, useInView, motion } from 'framer-motion'

const GRID_WIDTH = 25
const GRID_HEIGHT = 20

const DotGrid = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDotClick = (e: any) => {
    anime({
      targets: '.dot-point',
      scale: [
        { value: 1.35, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      translateY: [
        { value: -15, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      opacity: [
        { value: 1, easing: 'easeOutSine', duration: 250 },
        { value: 0.5, easing: 'easeInOutQuad', duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    })
  }
  const handleKeyDown = (e: { key: string }) => {
    if (e.key === 'Enter') {
      handleDotClick(e)
    }
  }
  const dots = []
  let index = 0

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>,
      )
      index++
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleDotClick}
      onKeyDown={handleKeyDown}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="absolute right-0 top-[50%] z-0 grid max-w-[75%] -translate-y-[50%]"
    >
      {dots}
    </div>
  )
}

interface RevealProps {
  children: JSX.Element
}

export const Reveal = ({ children }: RevealProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()
  const slideControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
      slideControls.start('visible')
    }
  }, [isInView])

  return (
    <div ref={ref} className="relative w-fit overflow-hidden">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: '100%' },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5, ease: 'easeIn' }}
        className="absolute bottom-1 left-0 right-0 top-1 z-20 bg-indigo-600"
      />
    </div>
  )
}

const WaterDropHero = () => {
  return (
    <section className="text-slat-100 overflow-hidden bg-gradient-to-r from-slate-600 via-slate-900 to-stone-700 px-8 py-24 md:px-12 md:py-32">
      <div className="relative mx-auto max-w-5xl">
        <div className="pointer-events-none relative z-10">
          <Reveal>
            <h1 className="pointer-events-auto text-6xl font-black text-slate-100 md:text-8xl">
              Find the dental job
            </h1>
          </Reveal>
          <Reveal>
            <h2 className="pointer-events-auto my-2 text-2xl text-slate-400 md:my-4 md:text-4xl">
              thats{' '}
              <span className="font-semibold text-indigo-500">
                right for you
              </span>
            </h2>
          </Reveal>
          <Reveal>
            <p className="pointer-events-auto max-w-xl text-sm text-slate-300 md:text-base">
              TBD. We help dentists land their ideal jobs. Let our job search
              strategies and tools help you find the right practice, the right
              mentor and right pay.
            </p>
          </Reveal>
          <Reveal>
            <button
              type="button"
              className="pointer-events-auto mt-4 rounded bg-indigo-600 px-4 py-2 font-medium text-slate-100 transition-all hover:bg-indigo-700 active:scale-95 md:mt-6"
            >
              View our service
            </button>
          </Reveal>
        </div>
        <DotGrid />
      </div>
    </section>
  )
}

export default WaterDropHero
