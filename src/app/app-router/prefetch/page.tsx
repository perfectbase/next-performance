import { FeatureTags } from "@/components/feature-tags";
import { Description } from "@/components/description";

export default function Page() {
  return (
    <div>
      <FeatureTags appRouter dynamic prefetch />
      <Description>
        This one is the same as the Dynamic demo, but with{" "}
        <code>{"prefetch={true}"}</code> in the <code>Link</code> component.
        This tells Next.js to prefetch the entire page, including dynamic
        content. If you wait at least one second before clicking the link,
        navigation should be instant without any loading visible. If you combine
        this with caching to minimize API calls, navigation becomes super
        smooth.
      </Description>
    </div>
  );
}
