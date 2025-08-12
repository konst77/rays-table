"use client"

import type React from "react"
import { Home, UtensilsCrossed, Info, Newspaper } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { motion, useScroll, useTransform, useSpring } from 'motion/react'
import Call from "./motion/landing/component/Call"

interface NavItem {
  icon: React.ReactNode
  href: string
  label: string
}

const SHOW_MIN = 0.01
const SHOW_MAX = 0.99

export function BottomNavbar() {
  const pathname = usePathname()

  const { scrollYProgress } = useScroll();

  const rawY = useTransform(
    scrollYProgress,
    [0, SHOW_MIN, SHOW_MAX, 1],
    [80, 0, 0, 80]
  )

  const y = useSpring(rawY, { stiffness: 400, damping: 36 })

  const navItems: NavItem[] = [
    {
      icon: <Home className="h-5 w-5" />,
      href: "/home",
      label: "Home",
    },
    {
      icon: <UtensilsCrossed className="h-5 w-5" />,
      href: "/recipes",
      label: "Recipes",
    },
    {
      icon: <Newspaper className="h-5 w-5" />,
      href: "/blog",
      label: "Blog",
    },
    {
      icon: <Info className="h-5 w-5" />,
      href: "/about",
      label: "About",
    },
  ]

  return (
    <motion.div 
      initial={{ y: 80 }}
      style={{ y }}
      transition={{ type: "spring", stiffness: 400, damping: 36 }}
      className="fixed bottom-6 left-0 right-0 z-50 hidden md:flex justify-center">
      <nav className="flex items-center gap-1 rounded-[8px] border-gray-800 bg-black/80 px-4 py-2 shadow-lg backdrop-blur-xl border border-black/20">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            size="sm"
            className={cn(
              "flex flex-row items-center gap-1 px-3 py-2 rounded-[8px]",
              pathname === item.href ? "text-white" : "text-muted-foreground",
            )}
            asChild
          >
            <Link href={item.href}>
              {item.icon}
              <p className="text-[14px]">{item.label}</p>
            </Link>
          </Button>
        ))}
        <Call />
      </nav>
    </motion.div>
  )
}
