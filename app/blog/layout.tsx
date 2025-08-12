import { BottomNavbar } from "../components/bottom-nav";
import Footer from "../components/Footer";
import { MobileNav } from "../components/mobile-nav";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className='antialiased mb-16 md:mb-0'
        >
            <BottomNavbar />
            <MobileNav /> 
            {children}
            <Footer />
        </div>
    );
}