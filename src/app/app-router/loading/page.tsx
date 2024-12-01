import { FeatureTags } from "@/components/feature-tags";
import { Description } from "@/components/description";

export default function Page() {
  return (
    <div>
      <FeatureTags appRouter dynamic suspense loading />
      <Description>
        By adding a <code>loading.tsx</code> file to this route, you&apos;ll
        notice the navigation becomes as fast as the Pages Router. However,
        you&apos;ll see that the static content isn&apos;t displayed instantly.
        Instead, there are two loading phases: one for navigation and another
        for data fetching.
      </Description>
    </div>
  );
}
