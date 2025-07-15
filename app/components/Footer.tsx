"use client"

import Grids from "./grids"
import logo from "@/public/img/main.svg"
import OptimizedImage from "./OptimizedImage"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import Link from "next/link"
import Shader from "./shader-gradient"

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
        <div className="p-4 md:p-10 w-full">
          <p className="text-[24px] md:text-[32px] lg:text-[40px]">
            Want a seat on our table?
          </p>
          <p className="text-[#767676]">
            We will minimize our sends to only table invitations.
          </p>
        </div>
        <form className="col-span-2">

        </form>

        <div className="h-[320px] flex flex-col gap-4 text-[24px] p-4 md:p-10 items-start justify-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}>
              <span className={cn(pathname === item.href ? "text-white duration-150 hover:text-orange-500" : "text-[#767676] hover:text-[#f1f1f5] duration-150")}>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className="p-4 md:p-10 md:col-span-full self-end">
          <OptimizedImage
            alt="logo"
            src={logo}
            height={200}
            width={1280}
            className="w-full"
            priority={true}
          />
        </div>
      </Grids>
      <Shader className="absolute top-0 h-full w-full -z-10" />
    </div>
  )
}

export default Footer