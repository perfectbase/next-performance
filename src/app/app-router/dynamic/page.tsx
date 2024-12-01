import { FeatureTags } from "@/components/feature-tags";
import { Description } from "@/components/description";
import { Separator } from "@/components/ui/separator";
import { FeatureDescriptions } from "@/components/feature-descriptions";

export default function Page() {
  return (
    <div>
      <FeatureTags appRouter dynamic />
      <Description>
        This demo has a noticeable difference from the Dynamic Pages Router.
        Navigation won&apos;t proceed until the data is fetched and the page is
        fully rendered server-side.
      </Description>
      <Separator className="my-4" />
      <FeatureDescriptions appRouter dynamic />
    </div>
  );
}
