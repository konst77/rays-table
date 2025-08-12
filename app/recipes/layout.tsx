import { BottomNavbar } from "../components/bottom-nav";
import Footer from "../components/Footer";
import { MobileNav } from "../components/mobile-nav";

export default function RecipesLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            <BottomNavbar />
            <MobileNav /> 
            {children}
            <Footer />
        </div>
    );
}