import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import AdminNav from "./component/AdminNav";

export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <SidebarProvider>
            <AdminNav />
            <div className="w-full">
                <SidebarTrigger className="w-10 h-10" />
                {children}
            </div>
        </SidebarProvider>

    );
}