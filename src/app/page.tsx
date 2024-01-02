import TypewriterEffectSmoothDemo from '@/components/layouts/typewriterEffect'
import GNB from '@/components/layouts/gnb'
import TracingBeamDemo from '@/components/layouts/tracingBeam'

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {' '}
      <GNB />
      <TracingBeamDemo />
    </div>
  )
}
