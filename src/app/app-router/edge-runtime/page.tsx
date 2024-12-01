import { FeatureTags } from "@/components/feature-tags";
import { Description } from "@/components/description";
import { Separator } from "@/components/ui/separator";
import { FeatureDescriptions } from "@/components/feature-descriptions";

export default function Page() {
  return (
    <div>
      <FeatureTags appRouter dynamic suspense edgeRuntime />
      <Description>
        This demo has the same implementation of the Suspense demo, but with
        Edge Runtime enabled. You should notice significantly faster navigation.
        The main drawback is that Edge Runtime doesn&apos;t support all Node.js
        features, which can cause compatibility issues with some libraries.
      </Description>
      <Separator className="my-4" />
      <FeatureDescriptions appRouter dynamic suspense edgeRuntime />
    </div>
  );
}
