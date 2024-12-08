import { FeatureTags } from "@/components/feature-tags";
import { Description } from "@/components/description";
import { Separator } from "@/components/ui/separator";
import { FeatureDescriptions } from "@/components/feature-descriptions";
import { InlineCode } from "@/components/ui/inline-code";

export default function Page() {
  return (
    <div>
      <FeatureTags appRouter dynamic prefetch />
      <Description>
        This one is the same as the Dynamic demo, but with{" "}
        <InlineCode>{"prefetch={true}"}</InlineCode> in the{" "}
        <InlineCode>Link</InlineCode> component. This tells Next.js to prefetch
        the entire page, including dynamic content. If you wait at least one
        second before clicking the link, navigation should be instant without
        any loading visible. If you combine this with caching to minimize API
        calls, navigation becomes super smooth.
      </Description>
      <Separator className="my-4" />
      <FeatureDescriptions appRouter dynamic prefetch />
    </div>
  );
}
