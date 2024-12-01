"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Pages Router",
    items: [
      {
        title: "Static",
        url: "/pages-router/static",
      },
      {
        title: "Dynamic",
        url: "/pages-router/dynamic",
      },
    ],
  },
  {
    title: "App Router",
    items: [
      {
        title: "Static",
        url: "/app-router/static",
      },
      {
        title: "Dynamic",
        url: "/app-router/dynamic",
      },
      {
        title: "Suspense",
        url: "/app-router/suspense",
      },
      {
        title: "Loading",
        url: "/app-router/loading",
      },
      {
        title: "Edge Runtime",
        url: "/app-router/edge-runtime",
      },
      {
        title: "Client Cache",
        url: "/app-router/client-cache",
      },
      {
        title: "Server Cache",
        url: "/app-router/server-cache",
      },
      {
        title: "Partial Prerendering",
        url: "/app-router/partial-prerendering",
      },
      {
        title: "Prefetch",
        url: "/app-router/prefetch",
      },
      {
        title: "Almighty",
        url: "/app-router/almighty",
      },
    ],
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        {items.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="uppercase">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname?.startsWith(item.url)}
                    >
                      <Link href={item.url}>{item.title}</Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
