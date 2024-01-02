'use client'

import SparklesCore from '@/components/ui/sparkles'

const SparklesTitleLogo = () => {
  return (
    <div className="h-[5rem] w-[15rem] bg-glay-800 flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-xl text-lg lg:text-2xl font-bold text-center text-white relative z-20">
        Scrub Network
      </h1>
      <div className="w-[5rem] h-5 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.3}
          maxSize={0.9}
          particleDensity={600}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
        {/* Radial Gradient */}
        <div className="absolute inset-0 w-full h-full bg-glay-900 [mask-image:radial-gradient(175px_100px_at_top,transparent_20%,white)]" />
      </div>
    </div>
  )
}

export default SparklesTitleLogo
