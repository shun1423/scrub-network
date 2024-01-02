'use client'

import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from '@/components/ui/navbar-menu'
import cn from '@/utils/cn'
import React, { useState } from 'react'

import TailwindButtons from '@/components/ui/tailwind-buttons'
import SparklesTitleLogo from '../titleLogo'

// eslint-disable-next-line react/require-default-props
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null)

  const tailwindCssButton = TailwindButtons.find(
    (button) => button.name === 'SignIn',
  )

  return (
    <div className={cn('flex fixed top-10 inset-x-0 mx-auto z-50', className)}>
      <div className="flex justify-between mx-auto items-center w-4/6">
        <SparklesTitleLogo />
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Jobs">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/web-dev">Jobs1</HoveredLink>
              <HoveredLink href="/interface-design">
                Interface Design
              </HoveredLink>
              <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
              <HoveredLink href="/branding">Branding</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Services">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/290shots_so_gruelx.png"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/155shots_so_acab66.png"
                description="Production ready Tailwind css components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://res.cloudinary.com/algochurn/image/upload/v1700109138/framer%20motion%20components/53shots_so_wygjpf.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://res.cloudinary.com/algochurn/image/upload/v1700109139/framer%20motion%20components/356shots_so_hwpzvs.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="For Employers">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/hobby">Hobby</HoveredLink>
              <HoveredLink href="/individual">Individual</HoveredLink>
              <HoveredLink href="/team">Team</HoveredLink>
              <HoveredLink href="/enterprise">Enterprise</HoveredLink>
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={null} item="Compensation" />
        </Menu>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
          <button
            type="button"
            className="w-40 rounded-xl dark:border-white border-transparent text-white text-lg"
          >
            Join now
          </button>
          <button type="button">{tailwindCssButton?.component}</button>
        </div>
      </div>
    </div>
  )
}

const GNB = () => {
  return (
    <div className="w-full  flex items-center justify-center">
      <Navbar className="top-0 h-13 bg-gradient-to-r from-slate-900 to-zinc-700 " />
    </div>
  )
}

export default GNB
