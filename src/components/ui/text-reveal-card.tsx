'use client'

import React, { useEffect, useRef, useState, memo } from 'react'
import { motion } from 'framer-motion'
import { twMerge } from 'tailwind-merge'
import cn from '@/utils/cn'

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2
  const randomOpacity = () => Math.random()
  const random = () => Math.random()
  return (
    <div className="absolute inset-0">
      {[...Array(140)].map((_, i) => (
        <motion.span
          // eslint-disable-next-line react/no-array-index-key
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 10 + 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            position: 'absolute',
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: 'white',
            borderRadius: '50%',
            zIndex: 1,
          }}
          className="inline-block"
        />
      ))}
    </div>
  )
}
export const MemoizedStars = memo(Stars)

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string
  revealText: string
  children?: React.ReactNode
  className?: string
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0)
  const cardRef = useRef<HTMLDivElement>(null)
  const [left, setLeft] = useState(0)
  const [localWidth, setLocalWidth] = useState(0)
  const [isMouseOver, setIsMouseOver] = useState(false)

  useEffect(() => {
    if (cardRef.current) {
      const { left: newLeft, width: newLocalWidth } =
        cardRef.current.getBoundingClientRect()
      setLeft(newLeft)
      setLocalWidth(newLocalWidth)
    }
  }, [])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function mouseMoveHandler(event: any) {
    event.preventDefault()

    const { clientX } = event
    if (cardRef.current) {
      const relativeX = clientX - left
      setWidthPercentage((relativeX / localWidth) * 100)
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false)
    setWidthPercentage(0)
  }
  function mouseEnterHandler() {
    setIsMouseOver(true)
  }

  const rotateDeg = (widthPercentage - 50) * 0.1
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      ref={cardRef}
      className={cn(
        'w-[40rem] rounded-lg p-8 relative overflow-hidden',
        className,
      )}
    >
      {children}

      <div className="h-40  relative flex items-center overflow-hidden">
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="h-40 w-[8px] bg-gradient-to-b from-transparent via-neutral-800 to-transparent absolute z-50 will-change-transform"
        />

        <div className=" overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="text-base sm:text-[3rem] py-10 font-bold bg-clip-text text-transparent bg-[#323238]">
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  )
}

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <h2 className={twMerge('text-white text-lg mb-2', className)}>
      {children}
    </h2>
  )
}

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <p className={twMerge('text-[#a9a9a9] text-sm', className)}>{children}</p>
  )
}
