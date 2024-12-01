import { Description } from "@/components/description";
import { FeatureDescriptions } from "@/components/feature-descriptions";
import { FeatureTags } from "@/components/feature-tags";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <div>
      <FeatureTags appRouter dynamic clientCache />
      <Description>
        This demo is the same as the Dynamic demo, but with the Client Cache
        enabled. You will see that the navigation is slow on the first time you
        click the link, but it becomes instant on the second time. The cache is
        configured to expire after 30 seconds for dynamic pages. It will also
        become slow again if you refresh the page.
      </Description>
      <Separator className="my-4" />
      <FeatureDescriptions appRouter dynamic clientCache />
    </div>
  );
}
