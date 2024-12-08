import { FeatureTags } from "@/components/feature-tags";
import { Description } from "@/components/description";
import { Separator } from "@/components/ui/separator";
import { FeatureDescriptions } from "@/components/feature-descriptions";
import { InlineCode } from "@/components/ui/inline-code";

export default function Page() {
  return (
    <div>
      <FeatureTags appRouter dynamic suspense />
      <Description>
        You might expect that wrapping the dynamic content with{" "}
        <InlineCode>Suspense</InlineCode> would make navigation as fast as the
        Pages Router, but that&apos;s not what happens. While navigation does
        become faster than in the previous demo, there&apos;s still a slight
        delay between clicking the link and seeing the rendered page.
      </Description>
      <Separator className="my-4" />
      <FeatureDescriptions appRouter dynamic suspense />
    </div>
  );
}
