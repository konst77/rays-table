"use client"

import type React from "react"
import { Home, UtensilsCrossed, Info, Newspaper } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import Link from "next/link"

interface NavItem {
  icon: React.ReactNode
  href: string
  label: string
}

export function BottomNavbar() {
  const pathname = usePathname()

  const navItems: NavItem[] = [
    {
      icon: <Home className="h-5 w-5" />,
      href: "/",
      label: "Main",
    },
    {
      icon: <UtensilsCrossed className="h-5 w-5" />,
      href: "/recipes",
      label: "Recipes",
    },
    {
      icon: <Newspaper className="h-5 w-5" />,
      href: "/articles",
      label: "Articles",
    },
    {
      icon: <Info className="h-5 w-5" />,
      href: "/about",
      label: "About",
    },
  ]

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 hidden md:flex justify-center">
      <nav className="flex items-center gap-1 rounded-[8px] border-gray-800 bg-black/80 px-4 py-2 shadow-lg backdrop-blur-xl border border-black/20">
        {navItems.map((item) => (
          <Button
            key={item.href}
            variant="ghost"
            size="sm"
            className={cn(
              "flex flex-row items-center gap-1 px-3 py-2",
              pathname === item.href ? "text-white" : "text-muted-foreground",
            )}
            asChild
          >
            <Link href={item.href}>
              {item.icon}
              <span className="text-xs">{item.label}</span>
            </Link>
          </Button>
        ))}
      </nav>
    </div>
  )
}
