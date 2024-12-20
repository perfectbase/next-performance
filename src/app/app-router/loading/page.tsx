import { FeatureTags } from "@/components/feature-tags";
import { Description } from "@/components/description";
import { Separator } from "@/components/ui/separator";
import { FeatureDescriptions } from "@/components/feature-descriptions";
import { InlineCode } from "@/components/ui/inline-code";

export default function Page() {
  return (
    <div>
      <FeatureTags appRouter dynamic suspense loading />
      <Description>
        By adding a <InlineCode>loading.tsx</InlineCode> file to this route,
        you&apos;ll notice the navigation becomes as fast as the Pages Router.
        However, you&apos;ll see that the static content isn&apos;t displayed
        instantly. Instead, there are two loading phases: one for navigation and
        another for data fetching.
      </Description>
      <Description>
        A workaround would be to make the loading component match the static
        part of the page, but then you would need to build one loading for each
        page layout you have.
      </Description>
      <Separator className="my-4" />
      <FeatureDescriptions appRouter dynamic suspense loading />
    </div>
  );
}
