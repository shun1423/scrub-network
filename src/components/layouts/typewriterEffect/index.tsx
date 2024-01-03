'use client'

import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

const TypewriterEffectSmoothDemo = () => {
  const firstWords = [
    {
      text: 'Find',
      className: 'text-black-400 dark:text-black-500',
    },
    {
      text: 'the',
      className: 'text-black-400 dark:text-black-500',
    },
    {
      text: 'dental',
      className: 'text-black-400 dark:text-black-500',
    },
    {
      text: 'job',
      className: 'text-black-400 dark:text-black-500',
    },
  ]
  const secondWords = [
    {
      text: 'thats',
      className: 'text-black-400 dark:text-black-500',
    },
    {
      text: 'right',
      className: 'text-black-400 dark:text-black-500',
    },
    {
      text: 'for',
      className: 'text-black-400 dark:text-black-500',
    },
    {
      text: 'You.',
      className: 'text-blue-400 dark:text-blue-400',
    },
  ]

  const [firstLineCompleted, setFirstLineCompleted] = useState(false)

  const handleFirstLineAnimationComplete = () => {
    setFirstLineCompleted(true)
  }
  const [secondLineCompleted, setSecondLineCompleted] = useState(false)

  const handleSecondLineAnimationComplete = () => {
    setSecondLineCompleted(true)
  }

  return (
    <div className="flex justify-center items-center h-[40rem]">
      <div className="flex-1 flex flex-col justify-center">
        <TypewriterEffectSmooth
          words={firstWords}
          onAnimationComplete={handleFirstLineAnimationComplete}
        />
        {firstLineCompleted && (
          <TypewriterEffectSmooth
            words={secondWords}
            onAnimationComplete={handleSecondLineAnimationComplete}
          />
        )}
        <AnimatePresence>
          {secondLineCompleted && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }} // 페이드인 지속 시간
            >
              <p className="mt-5 text-center">
                TBD. We help dentists land their ideal jobs. Let our job search
                strategies and tools help you find the right practice, the right
                mentor and right pay.
              </p>
              <div className="mt-10 flex items-center gap-x-6 justify-center">
                <button
                  type="button"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  View our services
                </button>
                <button
                  type="button"
                  className="rounded-md bg-orange-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
                >
                  Get started
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2102&q=80"
          alt=""
          width={500}
          height={133}
          objectFit="cover"
        />
      </div>
    </div>
  )
}
export default TypewriterEffectSmoothDemo
