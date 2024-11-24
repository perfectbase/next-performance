import { AppSidebar } from "./app-sidebar";
import { SidebarProvider } from "./ui/sidebar";

export function AppFrame({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-4 w-full flex justify-center">
        <div className="max-w-screen-md w-full">{children}</div>
      </main>
    </SidebarProvider>
  );
}
