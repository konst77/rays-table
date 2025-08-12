'use client'

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import OptimizedImage from "./OptimizedImage"
import main from "@/public/img/main.svg"
import { motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface NavItem {
  href: string
  label: string
}

const THRESHOLD = 0.01;

export function MobileNav() {
  const pathname = usePathname()

  const { scrollYProgress } = useScroll();
  const [show, setShow] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setShow(v >= THRESHOLD);
  });

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

  return (
    <motion.div 
      initial={{ y: -80 }}
      animate={{ y: show ? 0 : -80 }}
      transition={{ type: "spring", stiffness: 400, damping: 36 }}
      className="fixed top-4 left-4 right-4 z-50 bg-[#131313]/70 backdrop-blur-sm md:hidden rounded-[18px] overflow-hidden">
      <div className="grid grid-cols-4 h-16">
        {/* View Recipes Button - spans 3 columns */}
        <Button
          variant="ghost"
          className="col-span-3 h-full rounded-none justify-start pl-4 hover:bg-[#555]"
        >
          <a href="/home" className="flex items-center justify-start gap-2">
            <OptimizedImage
                src={main.src}
                height={24}
                width={80}
                alt="dummy-photo"
                className="w-full h-full"
                priority={true}
            />
          </a>
        </Button>

        {/* Menu Sheet - spans 1 column */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="col-span-1 h-full rounded-none flex items-center justify-center text-white hover:bg-[#555] hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="h-auto bg-black text-white border-none">
            <SheetHeader className="text-start">
              <SheetTitle className="">
                <OptimizedImage
                src={main.src}
                height={24}
                width={80}
                alt="dummy-photo"
                className="w-full h-full"
                priority={true}
                />
              </SheetTitle>
            </SheetHeader>
            <div className="grid mt-4">
            {navItems.map((item) => (
                <Link 
                key={item.href} 
                href={item.href} 
                className={cn(
                  "flex flex-row w-full h-full items-start gap-1 px-3 py-4 text-start hover:bg-[#131313] rounded-[16px]",
                  pathname === item.href ? "text-white" : "text-muted-foreground",
                )}>
                  <h4 className="text-[40px] leading-[1.15]">{item.label}</h4>
                </Link> 
            ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.div>
  )
}
