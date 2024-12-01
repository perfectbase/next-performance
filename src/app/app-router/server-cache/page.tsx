import { FeatureTags } from "@/components/feature-tags";
import { Description } from "@/components/description";

export default function Page() {
  return (
    <div>
      <FeatureTags appRouter dynamic serverCache />
      <Description>
        This demo is also based on the Dynamic example, but it is caching the
        dynamic content on the server-side. You&apos;ll see faster navigation
        even on your first click because the cache may already be populated by
        other users.
      </Description>
    </div>
  );
}
