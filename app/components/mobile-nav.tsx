import { Menu, ChefHat, Home, BookOpen, Mail, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-t border-white/20 md:hidden">
      <div className="grid grid-cols-4 h-16">
        {/* View Recipes Button - spans 3 columns */}
        <Button
          variant="ghost"
          className="col-span-3 h-full rounded-none border-r border-white/20 flex items-center justify-center gap-2 text-white hover:text-white/90 hover:bg-orange-500/50 active:bg-white/20 font-medium"
        >
            <a href="/recipes" className="flex items-center jusitfy-center gap-2">
                <ChefHat className="h-5 w-5" />
                <span className="font-medium">View Recipes</span>
            </a>
        </Button>

        {/* Menu Sheet - spans 1 column */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="col-span-1 h-full rounded-none flex items-center justify-center text-white hover:text-white/90 hover:bg-orange-500/50 active:bg-white/20"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="h-auto">
            <SheetHeader>
              <SheetTitle>Navigation Menu</SheetTitle>
              <SheetDescription>Choose where you'd like to go</SheetDescription>
            </SheetHeader>
            <div className="grid gap-4 py-6">
              <Button variant="ghost" className="justify-start h-12 text-left" asChild>
                <a href="/" className="flex items-center gap-3">
                  <Home className="h-5 w-5" />
                  <span className="text-base">Main</span>
                </a>
              </Button>
              <Button variant="ghost" className="justify-start h-12 text-left" asChild>
                <a href="/recipes" className="flex items-center gap-3">
                  <BookOpen className="h-5 w-5" />
                  <span className="text-base">Recipes</span>
                </a>
              </Button>
              <Button variant="ghost" className="justify-start h-12 text-left" asChild>
                <a href="/contact" className="flex items-center gap-3">
                  <Mail className="h-5 w-5" />
                  <span className="text-base">Contact</span>
                </a>
              </Button>
              <Button variant="ghost" className="justify-start h-12 text-left" asChild>
                <a href="/articles" className="flex items-center gap-3">
                  <FileText className="h-5 w-5" />
                  <span className="text-base">Articles</span>
                </a>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
