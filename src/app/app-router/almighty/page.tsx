import { FeatureTags } from "@/components/feature-tags";
import { Description } from "@/components/description";

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
        <a href="https://github.com/ethanniser/NextFaster">NextFaster</a>{" "}
        project. Here, navigation feels instantaneous—there&apos;s no visible
        loading, not even for images on the first click. The demo combines{" "}
        <code>{"prefetch={true}"}</code> with server-side caching and includes a
        custom link implementation that prefetches images on link hover and
        triggers navigation on mouse down (as soon as you click instead of
        waiting for release).
      </Description>
    </div>
  );
}
