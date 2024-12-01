import { FeatureTags } from "@/components/feature-tags";
import { Description } from "@/components/description";
import { Separator } from "@/components/ui/separator";
import { FeatureDescriptions } from "@/components/feature-descriptions";

export default function Page() {
  return (
    <div>
      <FeatureTags appRouter dynamic suspense ppr />
      <Description>
        Here&apos;s a demo that matches the navigation speed of the Pages Router
        without caching. With PPR enabled, the static parts of the page are
        pre-rendered, allowing Next.js to prefetch and instantly display the
        static content.
      </Description>
      <Separator className="my-4" />
      <FeatureDescriptions appRouter dynamic suspense ppr />
    </div>
  );
}
