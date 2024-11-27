import { getAppUrl } from "@/lib/utils";
import { unstable_noStore } from "next/cache";

export async function DynamicComponent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>{await getDynamicData(id)}</div>;
}

export async function getDynamicData(id: string) {
  unstable_noStore(); // force dynamic
  const res = await fetch(`${getAppUrl()}/api/dynamic/${id}`);
  return res.text();
}
