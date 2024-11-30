import { getAppUrl } from "@/lib/utils";
import { unstable_cache, unstable_noStore } from "next/cache";
import Image from "next/image";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  return (
    <div>
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
  const data = await getCachedDynamicData(id);

  return (
    <div className="grid grid-cols-3 gap-4">
      {data.map((item, index) => (
        <div key={index}>
          <Image
            src={item.image}
            alt={item.name}
            loading="eager"
            decoding="sync"
            width={200}
            height={200}
            className="w-full rounded-sm"
          />
          <div>{item.name}</div>
        </div>
      ))}
    </div>
  );
}

const getCachedDynamicData = unstable_cache(getDynamicData);

async function getDynamicData(id: string) {
  unstable_noStore(); // force dynamic
  const res = await fetch(`${getAppUrl()}/api/dynamic-with-images/${id}`);
  const data = await res.json();
  return data as { name: string; image: string }[];
}
