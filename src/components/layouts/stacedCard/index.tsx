/* eslint-disable react/no-array-index-key */
import { Dispatch, SetStateAction, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Testimonial {
  image: string
  title: string
  name: string
  description: string
}

const Card = ({
  image,
  description,
  name,
  title,
  position,
  selected,
  setSelected,
}: Testimonial & {
  position: number
  selected: number
  setSelected: Dispatch<SetStateAction<number>>
}) => {
  const scale = position <= selected ? 1 : 1 + 0.015 * (position - selected)
  const offset = position <= selected ? 0 : 95 + (position - selected) * 3
  const background = position % 2 ? '#52525b' : '#e4e4e7'
  const color = position % 2 ? 'white' : 'black'

  return (
    <motion.div
      initial={false}
      style={{
        zIndex: position,
        transformOrigin: 'left bottom',
        background,
        color,
        borderRadius: '10px',
      }}
      animate={{
        x: `${offset}%`,
        scale,
      }}
      whileHover={{
        translateX: position === selected ? 0 : -3,
      }}
      transition={{
        duration: 0.25,
        ease: 'easeOut',
      }}
      onClick={() => setSelected(position)}
      className="absolute top-0 left-0 w-full min-h-full p-8 lg:p-12 cursor-pointer flex flex-col justify-between"
    >
      <Image
        className="text-7xl mx-auto"
        src={image}
        alt="face image"
        width={276}
        height={276}
      />

      <p className="text-lg lg:text-xl font-light italic my-8">{description}</p>
      <div>
        <span className="block font-semibold text-lg">{name}</span>
        <span className="block text-sm">{title}</span>
      </div>
    </motion.div>
  )
}

const Cards = ({
  testimonials,
  selected,
  setSelected,
}: {
  testimonials: Testimonial[]
  selected: number
  setSelected: Dispatch<SetStateAction<number>>
}) => {
  return (
    <div className="p-4 relative h-[450px] lg:h-[500px] shadow-xl">
      {testimonials.map((t, i) => {
        return (
          <Card
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...t}
            key={i}
            position={i}
            selected={selected}
            setSelected={setSelected}
          />
        )
      })}
    </div>
  )
}

const SelectBtns = ({
  numTracks,
  setSelected,
  selected,
}: {
  numTracks: number
  setSelected: Dispatch<SetStateAction<number>>
  selected: number
}) => {
  return (
    <div className="flex gap-1 mt-8">
      {Array.from(Array(numTracks).keys()).map((n) => {
        return (
          <button
            type="button"
            key={n}
            onClick={() => setSelected(n)}
            className="h-1.5 w-full bg-slate-300 relative"
          >
            {selected === n ? (
              <motion.span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                initial={{
                  width: '0%',
                }}
                animate={{
                  width: '100%',
                }}
                transition={{
                  duration: 5,
                }}
                onAnimationComplete={() => {
                  setSelected(selected === numTracks - 1 ? 0 : selected + 1)
                }}
              />
            ) : (
              <span
                className="absolute top-0 left-0 bottom-0 bg-slate-950"
                style={{
                  width: selected > n ? '100%' : '0%',
                }}
              />
            )}
          </button>
        )
      })}
    </div>
  )
}

const testimonials = [
  {
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=576&h=576&q=80',
    description:
      'Your one-stop partner to help you get a dental job that fits your lifestyle.',
    name: 'Jane Dodson',
    title: 'Marketing Director, Nike',
  },
  {
    image:
      'https://images.unsplash.com/photo-1627161683077-e34782c24d81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=576&h=576&q=80',
    description:
      'Your one-stop partner to help you get a dental job that fits your lifestyle.',
    name: 'Johnathan Rodriguez',
    title: 'UX Research, Atlassian',
  },
  {
    image:
      'https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=576&h=576&q=80',
    description:
      'Your one-stop partner to help you get a dental job that fits your lifestyle.',
    name: 'Phil Heath',
    title: 'Staff Engineer, Dribbble',
  },
  {
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=576&h=576&q=80',
    description:
      'Your one-stop partner to help you get a dental job that fits your lifestyle.',
    name: 'Andrea Beck',
    title: 'Marketing Manager, GrubHub',
  },
  {
    image:
      'https://images.unsplash.com/photo-1629425733761-caae3b5f2e50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=576&h=576&q=80',
    description:
      'Your one-stop partner to help you get a dental job that fits your lifestyle.',
    name: 'Daniel Henderson',
    title: 'Engineering Manager, Kaggle',
  },
]

const StackedCardTestimonials = () => {
  const [selected, setSelected] = useState(0)

  return (
    <section className=" py-24 px-4 lg:px-8 grid items-center grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4 overflow-hidden">
      <div className="p-4">
        <h3 className="text-5xl font-semibold">What our customers think</h3>
        <p className="text-slate-500 my-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
          commodi sint, similique cupiditate possimus suscipit delectus illum
          eos iure magnam!
        </p>
        <SelectBtns
          numTracks={testimonials.length}
          setSelected={setSelected}
          selected={selected}
        />
      </div>
      <Cards
        testimonials={testimonials}
        setSelected={setSelected}
        selected={selected}
      />
    </section>
  )
}

export default StackedCardTestimonials
