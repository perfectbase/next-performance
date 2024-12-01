import { FeatureTags } from "@/components/feature-tags";
import { Description } from "@/components/description";
import { Separator } from "@/components/ui/separator";
import { FeatureDescriptions } from "@/components/feature-descriptions";

export default function Page() {
  return (
    <div>
      <FeatureTags appRouter dynamic suspense />
      <Description>
        You might expect adding a <code>Suspense</code> component would make
        navigation as fast as the Pages Router, but it&apos;s not quite the
        same. While navigation does become faster than in the previous demo,
        there’s still a slight delay between clicking the link and seeing the
        rendered page.
      </Description>
      <Separator className="my-4" />
      <FeatureDescriptions appRouter dynamic suspense />
    </div>
  );
}
