import { FeatureTags } from "@/components/feature-tags";
import { Description } from "@/components/description";
import { Separator } from "@/components/ui/separator";
import { FeatureDescriptions } from "@/components/feature-descriptions";

export default function Page() {
  return (
    <div>
      <FeatureTags appRouter dynamic serverCache />
      <Description>
        This demo is also based on the Dynamic example, but it is caching the
        dynamic content on the server-side. You&apos;ll see faster navigation
        even on your first click because the cache may already be populated by
        other users.
      </Description>
      <Separator className="my-4" />
      <FeatureDescriptions appRouter dynamic serverCache />
    </div>
  );
}
