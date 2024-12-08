import { FeatureTags } from "@/components/feature-tags";
import { Description } from "@/components/description";
import { TextLink } from "@/components/ui/text-link";
import { Separator } from "@/components/ui/separator";
import { FeatureDescriptions } from "@/components/feature-descriptions";
import { InlineCode } from "@/components/ui/inline-code";

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
        <InlineCode>{"prefetch={true}"}</InlineCode> with server-side caching
        and includes a custom link implementation that prefetches images on link
        hover and triggers navigation on mouse down (as soon as you click
        instead of waiting for release).
      </Description>
      <Description>
        The mock data was generated with a{" "}
        <TextLink href="https://blog.perfectbase.dev/building-an-ai-script-to-generate-mock-data-with-realistic-images">
          custom script
        </TextLink>{" "}
        using <InlineCode>gpt-4o-mini</InlineCode> and{" "}
        <InlineCode>dall-e-3</InlineCode>. Images are stored and served from{" "}
        <TextLink href="https://edgestore.dev">Edge Store</TextLink>.
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
