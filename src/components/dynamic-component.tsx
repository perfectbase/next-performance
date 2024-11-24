import { unstable_noStore } from "next/cache";

export async function DynamicComponent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  unstable_noStore(); // To force this component to be considered dynamic since we are not fetching anything.
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const { id } = await params;
  return <div>Dynamic Component {id}</div>;
}
