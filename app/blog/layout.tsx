import Footer from "../components/Footer";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div
            className='antialiased mb-16 md:mb-0'
        >
            {children}
            <Footer />
        </div>
    );
}