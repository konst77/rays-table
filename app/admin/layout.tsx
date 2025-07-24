export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className='antialiased mb-16 md:mb-0'
            >
                {children}
            </body>
        </html>
    );
}