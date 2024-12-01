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
        url: "https://nextperformance.vercel.app/pages-router/static",
      },
      {
        title: "Dynamic",
        url: "https://nextperformance.vercel.app/pages-router/dynamic",
      },
    ],
  },
  {
    title: "App Router",
    items: [
      {
        title: "Static",
        url: "https://nextperformance.vercel.app/app-router/static",
      },
      {
        title: "Dynamic",
        url: "https://nextperformance.vercel.app/app-router/dynamic",
      },
      {
        title: "Suspense",
        url: "https://nextperformance.vercel.app/app-router/suspense",
      },
      {
        title: "Loading",
        url: "https://nextperformance.vercel.app/app-router/loading",
      },
      {
        title: "Edge Runtime",
        url: "https://nextperformance.vercel.app/app-router/edge-runtime",
      },
      {
        title: "Client Cache",
        url: "/app-router/client-cache",
      },
      {
        title: "Server Cache",
        url: "https://nextperformance.vercel.app/app-router/server-cache",
      },
      {
        title: "Partial Prerendering",
        url: "https://nextperformance.vercel.app/app-router/partial-prerendering",
      },
      {
        title: "Prefetch",
        url: "https://nextperformance.vercel.app/app-router/prefetch",
      },
      {
        title: "Almighty",
        url: "https://nextperformance.vercel.app/app-router/almighty",
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
