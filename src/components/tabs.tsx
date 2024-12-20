"use client";

import NextLink from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { raise } from "@/lib/utils";

export function Tabs({
  tabs,
  prefetch,
  linkComponent,
}: {
  tabs: {
    id: string;
    label?: string;
  }[];
  prefetch?: boolean;
  linkComponent?: typeof NextLink;
}) {
  const pathname = usePathname();
  const pathSegments = pathname?.split("/") ?? raise("No pathname");
  const pathId = pathSegments[3];
  const pathPrefix = pathSegments.slice(0, 3).join("/");
  const Link = linkComponent ?? NextLink;

  return (
    <div className="flex gap-2">
      <Link href={pathPrefix} prefetch={prefetch}>
        <Button variant={!pathId ? "default" : "secondary"}>Home</Button>
      </Link>
      {tabs.map((tab) => (
        <Link key={tab.id} href={`${pathPrefix}/${tab.id}`} prefetch={prefetch}>
          <Button variant={tab.id === pathId ? "default" : "secondary"}>
            {tab.label ?? `Page ${tab.id}`}
          </Button>
        </Link>
      ))}
    </div>
  );
}
