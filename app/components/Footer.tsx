"use client"

import Grids from "./grids"
import logo from "@/public/img/main.svg"
import OptimizedImage from "./OptimizedImage"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Shader from "./shader-gradient"
import SubscribeForm from "./email/SubscribeForm"
import Weather from "./motion/landing/component/Weather"
import Time from "./motion/landing/component/Time"

console.log(process.env.SUPABASE_ANON_KEY)
interface NavItem {
  href: string
  label: string
}

interface socialItem {
  href: string
  icon: string
  label: string
}


function Footer() {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      href: "/home",
      label: "Home",
    },
    {
      href: "/recipes",
      label: "Recipes",
    },
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/about",
      label: "About",
    },
  ]

  const socialItems: socialItem[] = [
    {
      href: "/",
      icon: "source",
      label: "Instagram",
    },
    {
      href: "/",
      icon: "source",
      label: "TikTok",
    },
    {
      href: "/",
      icon: "source",
      label: "Threads",
    },
  ]

  return (
      <div className="pb-4 bg-black rounded-t-3xl">
      <div id="newsletter" className="text-white relative rounded-3xl overflow-hidden z-0 shadow-2xl shadow-gray-900">
        <Grids className="bg-black/20 backdrop-blur-lg">
          <div className="p-4 md:p-10 w-full md:col-span-2 md:h-[360px]">
            <p className="text-[24px] md:text-[32px]">
              Want a seat on our table?
            </p>
            <p className="text-[#999]">
              We will minimize our sends to only table stories and invitations.
            </p>

            {/* Form area */}
            <SubscribeForm />
          </div>

          <div className="md:h-[360px] flex flex-col md:flex-row gap-4 md:gap-20 items-start p-4 md:p-10 md:col-span-1">
            <div className="flex flex-col items-start">
            <p className="text-[18px] mb-4">Navigate</p>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="md:text-[16px] p-2 md:p-0"
              >
                <p className={cn(pathname === item.href ? "duration-150 text-orange-500 hover:text-orange-300" : "text-[#767676] hover:text-[#f1f1f5] duration-150")}>{item.label}</p>
              </Link>
            ))}
            </div>
            <div className="flex flex-col items-start">
              <p className="text-[18px] mb-4">Social</p>
              {socialItems.map((socialItems) => (
                <Link
                key={socialItems.label}
                href={socialItems.href}
                className="md:text-[16px] p-2 md:p-0"
                >
                  <p className="text-[#767676] hover:text-[#f1f1f5] duration-150">{socialItems.label}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="p-4 md:p-10 md:col-span-full h-[240px] relative">
            <OptimizedImage
              alt="logo"
              src={logo}
              height={280}
              width={1280}
              className="absolute bottom-0"
              priority={true}
            />
          </div>
        </Grids>
        <Shader className="absolute top-0 h-full w-full -z-10" />
      </div>
      <div className="p-4 md:p-10 text-[#555] flex flex-wrap gap-4 md:flex-row justify-between">
        <p>Made with warmth</p>
        <Time />
        <Weather />
        <p>© K0nst 2025</p>
      </div>
      </div>
  )
}

export default Footer