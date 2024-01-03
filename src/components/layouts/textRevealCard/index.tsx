'use client'

import { TextRevealCard } from '@/components/ui/text-reveal-card'

const TextRevealCardPreview = () => {
  return (
    <div className="flex items-center justify-center h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Our Mission and Vision"
        revealText="I know the chemistry "
      />
    </div>
  )
}

export default TextRevealCardPreview
