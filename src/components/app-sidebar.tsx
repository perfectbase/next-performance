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
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Pages Router",
    items: [
      {
        title: "Static",
        url: "/pages/static",
      },
      {
        title: "Dynamic",
        url: "/pages/dynamic",
      },
    ],
  },
  {
    title: "App Router",
    items: [
      {
        title: "Static",
        url: "/app/static",
      },
      {
        title: "Dynamic",
        url: "/app/dynamic",
      },
      {
        title: "Suspense",
        url: "/app/suspense",
      },
      {
        title: "Loading",
        url: "/app/loading",
      },
      {
        title: "Edge Runtime",
        url: "/app/edge-runtime",
      },
      {
        title: "Client Cache",
        url: "/app/client-cache",
      },
      {
        title: "Server Cache",
        url: "/app/server-cache",
      },
      {
        title: "Partial Prerendering",
        url: "/app/partial-prerendering",
      },
      {
        title: "Prefetch",
        url: "/app/prefetch",
      },
      {
        title: "Image Prefetch",
        url: "/app/image-prefetch",
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
                      <a href={item.url}>{item.title}</a>
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
