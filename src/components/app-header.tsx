import { SidebarTrigger } from "./ui/sidebar";

export function AppHeader() {
  return (
    <header className="bg-card h-12 border-b items-center justify-between w-full fixed md:hidden flex">
      <SidebarTrigger />
    </header>
  );
}
