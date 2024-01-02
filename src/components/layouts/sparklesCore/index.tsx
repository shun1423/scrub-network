'use client'

import SparklesCore from '@/components/ui/sparkles'

const SparklesPreview = () => {
  return (
    <div className="h-[20rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-3xl text-2xl lg:text-5xl font-bold text-center text-white relative z-20">
        Scrub Network
      </h1>
      <div className="w-[100rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  )
}

export default SparklesPreview
