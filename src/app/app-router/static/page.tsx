import { Description } from "@/components/description";
import { FeatureDescriptions } from "@/components/feature-descriptions";
import { FeatureTags } from "@/components/feature-tags";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div>
      <FeatureTags appRouter static />
      <Description>
        With Next.js prefetching visible static page links, you won&apos;t
        notice much of a difference compared to the Pages Router Static demo.
      </Description>
      <Separator className="my-4" />
      <FeatureDescriptions appRouter static />
    </div>
  );
}
