import { DynamicComponent } from "@/components/dynamic-component";
import { Spinner } from "@/components/ui/spinner";
import { Suspense } from "react";

export const runtime = "edge";

export default function Page(props: { params: Promise<{ id: string }> }) {
  return (
    <div>
      Static Title
      <Suspense fallback={<Spinner />}>
        <DynamicComponent {...props} />
      </Suspense>
    </div>
  );
}
