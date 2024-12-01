import { FeatureTags } from "@/components/feature-tags";
import { Description } from "@/components/description";

export default function Page() {
  return (
    <div>
      <FeatureTags appRouter dynamic />
      <Description>
        This demo has a noticeable difference from the Dynamic Pages Router.
        Navigation won&apos;t proceed until the data is fetched and the page is
        fully rendered server-side.
      </Description>
    </div>
  );
}
