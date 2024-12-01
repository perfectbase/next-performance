import { FeatureTags } from "@/components/feature-tags";
import { Description } from "@/components/description";
import { TextLink } from "@/components/ui/text-link";
import { Separator } from "@/components/ui/separator";
import { FeatureDescriptions } from "@/components/feature-descriptions";

export default function Page() {
  return (
    <div>
      <FeatureTags
        appRouter
        dynamic
        serverCache
        prefetch
        imagePrefetch
        onMouseDown
      />
      <Description>
        This demo takes inspiration from the{" "}
        <TextLink href="https://github.com/ethanniser/NextFaster">
          NextFaster
        </TextLink>{" "}
        project. Here, navigation feels instantaneous—there&apos;s no visible
        loading, not even for images on the first click. The demo combines{" "}
        <code>{"prefetch={true}"}</code> with server-side caching and includes a
        custom link implementation that prefetches images on link hover and
        triggers navigation on mouse down (as soon as you click instead of
        waiting for release).
      </Description>
      <Separator className="my-4" />
      <FeatureDescriptions
        appRouter
        dynamic
        serverCache
        prefetch
        imagePrefetch
        onMouseDown
      />
    </div>
  );
}
