"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { raise } from "@/lib/utils";

export function Tabs({
  tabs,
  prefetch,
}: {
  tabs: {
    id: string;
    label?: string;
  }[];
  prefetch?: boolean;
}) {
  const pathname = usePathname();
  const pathSegments = pathname?.split("/") ?? raise("No pathname");
  const pathId = pathSegments[3];
  const pathPrefix = pathSegments.slice(0, 3).join("/");

  return (
    <div className="flex gap-2">
      <Link href={pathPrefix} passHref prefetch={true}>
        <Button variant={!pathId ? "default" : "secondary"}>Home</Button>
      </Link>
      {tabs.map((tab) => (
        <Link key={tab.id} href={`${pathPrefix}/${tab.id}`} passHref>
          <Button variant={tab.id === pathId ? "default" : "secondary"}>
            {tab.label ?? `Page ${tab.id}`}
          </Button>
        </Link>
      ))}
    </div>
  );
}
