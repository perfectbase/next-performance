import { unstable_noStore } from "next/cache";

export async function DynamicComponent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>{await getDynamicData(id)}</div>;
}

async function getDynamicData(id: string) {
  unstable_noStore(); // To force this function to be considered dynamic since we are not fetching anything.
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return `Dynamic Data ${id}`;
}
