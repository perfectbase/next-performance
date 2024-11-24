import { getDynamicData } from "@/components/dynamic-component";
import { unstable_cache } from "next/cache";

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

const getCachedDynamicData = unstable_cache(getDynamicData);
