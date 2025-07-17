"use client"

import Grids from "./grids"
import logo from "@/public/img/main.svg"
import OptimizedImage from "./OptimizedImage"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Shader from "./shader-gradient"
import SubscribeForm from "./email/SubscribeForm"

console.log(process.env.SUPABASE_ANON_KEY)
interface NavItem {
  href: string
  label: string
}


function Footer() {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      href: "/",
      label: "Main",
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

  return (
    <div className="text-white relative">
      <Grids className="bg-black/20 backdrop-blur-3xl">
        <div className="p-4 md:p-10 w-full md:col-span-2">
          <p className="text-[24px] md:text-[32px]">
            Want a seat on our table?
          </p>
          <p className="text-[#999]">
            We will minimize our sends to only table stories and invitations.
          </p>

          {/* Form area */}
          <SubscribeForm />
        </div>

        <div className="md:h-[400px] flex flex-col items-start p-4 md:p-10 md:col-span-1">
          <p className="text-[18px] mb-4">Navigate</p>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="md:text-[16px]"
            >
              <span className={cn(pathname === item.href ? "duration-150 text-orange-500 hover:text-orange-300" : "text-[#767676] hover:text-[#f1f1f5] duration-150")}>{item.label}</span>
            </Link>
          ))}
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
  )
}

export default Footer