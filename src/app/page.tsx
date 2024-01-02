import TypewriterEffectSmoothDemo from '@/components/layouts/typewriterEffect'
import GNB from '@/components/layouts/gnb'
import TracingBeamDemo from '@/components/layouts/tracingBeam'
import SparklesCore from '@/components/ui/sparkles'
import SparklesPreview from '@/components/layouts/sparklesCore'

export default function Home() {
  return (
    <div>
      {' '}
      <GNB />
      <SparklesPreview />
      <TypewriterEffectSmoothDemo />
      <TracingBeamDemo />
    </div>
  )
}
