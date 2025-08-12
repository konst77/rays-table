import { BottomNavbar } from "../components/bottom-nav";
import Footer from "../components/Footer";
import { MobileNav } from "../components/mobile-nav";
import About from "../components/motion/landing/About";
import Hero from "../components/motion/landing/Hero";
import Phrase from "../components/motion/landing/Phrase";
import Recipes from "../components/motion/landing/Recipes";
import Why from "../components/motion/landing/Why";


export default function Home() {
    return (
        <>
            <BottomNavbar />
            <MobileNav /> 
            {/* Landing header */}
            <Hero />

            {/* Value Proposition */}
            <Phrase />

            {/* The Real Value, Why? */}
            <Why />

            {/* Recipe overlooking */}
            <Recipes />

            {/* About Ray */}
            <About />

            {/* Newsletter? */}

            {/* Footer */}
            <Footer />

        </>
    );
}
