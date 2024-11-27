import { useEffect, useState } from "react";
import { DynamicPageLayout } from "..";
import { useRouter } from "next/router";
import { Spinner } from "@/components/ui/spinner";

export default function Page() {
  const router = useRouter();
  return (
    <DynamicPageLayout>
      Static Title
      <DynamicComponent key={router.query.id as string} />
    </DynamicPageLayout>
  );
}

function DynamicComponent() {
  const router = useRouter();
  const [data, setData] = useState<string>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>();

  // Usually you would use react-query, tRPC or other data fetching library
  // But for this simple demo, `useEffect` is enough
  useEffect(() => {
    const { id } = router.query;
    if (id) {
      getDynamicData(id as string)
        .then((data) => setData(data))
        .catch((error) => setError(error))
        .finally(() => setIsLoading(false));
    }
  }, [router.query]);

  if (isLoading) return <Spinner />;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data</div>;

  return <div>{data}</div>;
}

async function getDynamicData(id: string) {
  const res = await fetch(`/api/dynamic/${id}`);
  return res.text();
}
