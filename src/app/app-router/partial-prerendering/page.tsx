import { FeatureTags } from "@/components/feature-tags";

export default function Page() {
  return (
    <div>
      <FeatureTags appRouter dynamic suspense ppr />
    </div>
  );
}
