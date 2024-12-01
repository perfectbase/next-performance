import { FeatureTags } from "@/components/feature-tags";
import { Description } from "@/components/description";

export default function Page() {
  return (
    <div>
      <FeatureTags appRouter dynamic suspense ppr />
      <Description>
        Here&apos;s a demo that matches the navigation speed of the Pages Router
        without caching. With Partial Prerendering (PPR) enabled, the static
        parts of the page are pre-rendered, allowing Next.js to prefetch and
        instantly display the static content.
      </Description>
    </div>
  );
}
