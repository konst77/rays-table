import AdminNav from "./component/AdminNav";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-row bg-[#131313]">
            <AdminNav />
            {children}
        </div>

    );
}