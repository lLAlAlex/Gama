import SiteHeader from "@/components/Navbar";
import { Outlet } from "react-router";

function RootLayout() {
    return (
        <>
            <SiteHeader />
            <div className="relative flex min-h-svh flex-col bg-background">
                <Outlet />
            </div>
        </>
    );
}

export default RootLayout;