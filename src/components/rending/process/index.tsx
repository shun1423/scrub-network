import PinContainer from '@/components/ui/3d-pin'
import { ArrowPathIcon, CloudArrowUpIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: 'Create Job Search Strategy',
    description: 'Build your job search strategy.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Find Jobs',
    description: 'FindJob.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Get Interviews',
    description: 'Secure interviews with ease.',
    href: '#',
    icon: ArrowPathIcon,
  },
  {
    name: 'Get Job Offers',
    description: 'Receive job offers quickly.',
    href: '#',
    icon: ArrowPathIcon,
  },
]
export default function Process() {
  return (
    <div className="h-[40rem] w-full flex items-center justify-center gap-0">
      {features.map((feature) => (
        <PinContainer
          key={feature.name}
          title={feature.name}
          href={feature.href}
        >
          <div className="flex basis-full flex-col p-1 tracking-tight text-slate-100/50 sm:basis-1/2 w-[16rem] h-[16rem] ">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base  text-slate-100">
              {feature.name}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500 ">{feature.description}</span>
            </div>
            <div
              className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500"
              style={{
                backgroundImage:
                  'url(https://i.postimg.cc/YqHHdjvv/search-engine-optimization-7843974-1280.jpg)',
              }}
            />
          </div>
        </PinContainer>
      ))}
    </div>
  )
}
