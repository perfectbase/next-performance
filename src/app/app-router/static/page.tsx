import { Description } from "@/components/description";
import { FeatureTags } from "@/components/feature-tags";

export default function Page() {
  return (
    <div>
      <FeatureTags appRouter static />
      <Description>
        With Next.js prefetching visible static page links, you won&apos;t
        notice much of a difference compared to the Pages Router Static demo.
      </Description>
    </div>
  );
}
