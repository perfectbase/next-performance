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
  useSidebar,
} from "@/components/ui/sidebar";
import { demos } from "@/lib/demos";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import XIcon from "./svgs/x";
import BlueskyIcon from "./svgs/bluesky";
import GitHubIcon from "./svgs/github";
import YouTubeIcon from "./svgs/youtube";
import { Button } from "./ui/button";
import { SidebarCloseIcon, X } from "lucide-react";

export function AppSidebar() {
  const pathname = usePathname();
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar>
      <SidebarHeader>
        <Link href="/" className="relative w-full h-8 mt-3">
          <Image src="/next-performance.svg" alt="Logo" fill sizes="100px" />
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-0 right-0 md:hidden"
            onClick={(e) => {
              e.preventDefault();
              toggleSidebar();
            }}
          >
            <SidebarCloseIcon width={20} height={20} />
          </Button>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {demos.map((group) => (
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
      <SidebarFooter>
        <div className="flex gap-2 justify-evenly items-start">
          <Image
            src="/ravi.webp"
            alt="Ravi"
            width={30}
            height={30}
            className="rounded-full border border-gray-700"
          />
          <Link
            href="https://github.com/perfectbase/next-performance"
            aria-label="GitHub"
            className="hover:text-gray-400 transition-colors rounded"
          >
            <GitHubIcon width={30} height={30} />
          </Link>
          <Link
            href="https://x.com/RaviCoding"
            aria-label="X"
            className="hover:text-gray-400 transition-colors rounded"
          >
            <XIcon width={30} height={30} />
          </Link>
          <Link
            href="https://bsky.app/profile/ravicoding.bsky.social"
            aria-label="Bluesky"
            className="hover:text-gray-400 transition-colors rounded"
          >
            <BlueskyIcon width={30} height={30} className="px-0.5" />
          </Link>
          <Link
            href="https://www.youtube.com/@perfectbase"
            aria-label="YouTube"
            className="hover:text-gray-400 transition-colors rounded"
          >
            <YouTubeIcon width={30} height={30} />
          </Link>
        </div>
        <p className="text-xs text-center font-semibold">by: Ravi</p>
      </SidebarFooter>
    </Sidebar>
  );
}
