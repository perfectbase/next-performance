import { unstable_cache, unstable_noStore } from "next/cache";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  return (
    <div>
      Static Title
      <CachedDynamicComponent {...props} />
    </div>
  );
}

async function CachedDynamicComponent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <div>{await getCachedDynamicData(id)}</div>;
}

async function getDynamicData(id: string) {
  unstable_noStore(); // To force this function to be considered dynamic since we are not fetching anything.
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return `Dynamic Data ${id}`;
}

const getCachedDynamicData = unstable_cache(getDynamicData);
