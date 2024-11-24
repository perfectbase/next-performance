import { AppSidebar } from "./app-sidebar";
import { Card, CardContent } from "./ui/card";
import { SidebarProvider } from "./ui/sidebar";

export function AppFrame({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="p-4 w-full">
        <div className="flex justify-center">
          <Card className="max-w-screen-md w-full">
            <CardContent className="py-4">{children}</CardContent>
          </Card>
        </div>
      </main>
    </SidebarProvider>
  );
}
