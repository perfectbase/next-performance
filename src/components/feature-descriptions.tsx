import {
  CLIENT_CACHE_CODE,
  PPR_CODE,
  SERVER_CACHE_CODE,
  SUSPENSE_CODE,
} from "./feature-code-blocks";
import { FeatureTags } from "./feature-tags";
import { CodeBlock } from "./ui/code-block";
import { InlineCode } from "./ui/inline-code";
import { TextLink } from "./ui/text-link";

export function FeatureDescriptions(props: {
  pagesRouter?: boolean;
  appRouter?: boolean;
  static?: boolean;
  dynamic?: boolean;
  suspense?: boolean;
  loading?: boolean;
  edgeRuntime?: boolean;
  clientCache?: boolean;
  serverCache?: boolean;
  ppr?: boolean;
  prefetch?: boolean;
  imagePrefetch?: boolean;
  onMouseDown?: boolean;
}) {
  return (
    <div>
      {props.pagesRouter && (
        <>
          <FeatureTags pagesRouter />
          <Description>
            This demo uses the Pages Router. The traditional way of developing
            apps with Next.js. It can feel more straightforward to use.
            Especially if you&apos;re used to writing apps with vanilla React.
            However, it can get complicated when you start to use some features
            like caching, SSR, streaming, etc.
          </Description>
        </>
      )}
      {props.appRouter && (
        <>
          <FeatureTags appRouter />
          <Description>
            This demo uses the{" "}
            <TextLink href="https://nextjs.org/docs/app">App Router</TextLink>.
            Which is a newer way of developing apps with Next.js. It supports
            nested layouts, provides built-in solutions for loading states,
            error handling and data fetching. It defaults to server components
            and makes it easy to stream additional data from the initial page
            request.
          </Description>
        </>
      )}
      {props.static && (
        <>
          <FeatureTags static />
          <Description>
            All the content on this demo is static. No additional data is being
            fetched.
          </Description>
        </>
      )}
      {props.dynamic && (
        <>
          <FeatureTags dynamic />
          <Description>
            The page includes dynamic content fetched through an API, which
            takes about one second to load. With the Pages Router, data fetching
            logic needs to be handled client-side. For the App Router, data can
            be fetched directly within the server component, simplifying the
            code a bit.
          </Description>
        </>
      )}
      {props.suspense && (
        <>
          <FeatureTags suspense />
          <Description>
            The dynamic content is wrapped in a{" "}
            <InlineCode>Suspense</InlineCode> component, which shows a loading
            spinner while data is fetched. The page doesn&apos;t make an extra
            request to get the dynamic content—the content is streamed from the
            initial page request itself.
            <CodeBlock language="tsx" highlightLines={[5, 7]}>
              {SUSPENSE_CODE}
            </CodeBlock>
          </Description>
        </>
      )}
      {props.loading && (
        <>
          <FeatureTags loading />
          <Description>
            There is a <InlineCode>loading.tsx</InlineCode> file in this route
            segment. Loading files are cached and are displayed immediately when
            navigating to dynamic routes.
          </Description>
        </>
      )}
      {props.edgeRuntime && (
        <>
          <FeatureTags edgeRuntime />
          <Description>
            This demo uses the Edge Runtime, which is a faster runtime compared
            to the default Node.js runtime. It does not support all the node.js
            features and some libraries might not work as expected.
          </Description>
        </>
      )}
      {props.clientCache && (
        <>
          <FeatureTags clientCache />
          <Description>
            The{" "}
            <TextLink href="https://nextjs.org/docs/app/api-reference/next-config-js/staleTimes">
              client cache
            </TextLink>{" "}
            is enabled. You might have noticed that the domain in this demo is
            different. This is because the client cache is a global
            configuration for the app. You can configure how long the cache
            should last for static and dynamic pages in the{" "}
            <InlineCode>next.config.ts</InlineCode> file. This demo is
            configured to cache dynamic pages for 30 seconds and static pages
            for 180 seconds, which was the default in Next.js 14. (Since Next.js
            15, the default is to not cache).
            <CodeBlock language="ts" highlightLines={["3-6"]}>
              {CLIENT_CACHE_CODE}
            </CodeBlock>
          </Description>
        </>
      )}
      {props.serverCache && (
        <>
          <FeatureTags serverCache />
          <Description>
            The dynamic content is being cached on the server-side. The cache is
            shared between all users. Cache revalidation can be scheduled or
            triggered on demand. This demo is using{" "}
            <InlineCode>unstable_cache</InlineCode> to cache the dynamic
            content, but you might want to use the new experimental{" "}
            <TextLink href="https://nextjs.org/docs/canary/app/api-reference/directives/use-cache">
              <InlineCode>use cache</InlineCode>
            </TextLink>{" "}
            feature.
            <CodeBlock language="tsx">{SERVER_CACHE_CODE}</CodeBlock>
          </Description>
        </>
      )}
      {props.ppr && (
        <>
          <FeatureTags ppr />
          <Description>
            This demo has{" "}
            <TextLink href="https://nextjs.org/docs/app/building-your-application/rendering/partial-prerendering">
              partial prerendering
            </TextLink>{" "}
            enabled. Partial Prerendering allows Next.js to combine static and
            dynamic content in a single page, serving a static shell instantly
            while streaming in dynamic content asynchronously.
            <CodeBlock language="ts" highlightLines={[3]}>
              {PPR_CODE}
            </CodeBlock>
          </Description>
        </>
      )}
      {props.prefetch && (
        <>
          <FeatureTags prefetch />
          <Description>
            The <InlineCode>Link</InlineCode> component is configured with{" "}
            <TextLink href="https://nextjs.org/docs/app/api-reference/components/link#prefetch">
              <InlineCode>{"prefetch={true}"}</InlineCode>
            </TextLink>
            , which tells Next.js to prefetch the entire page, including the
            dynamic content.
          </Description>
        </>
      )}
      {props.imagePrefetch && (
        <>
          <FeatureTags imagePrefetch />
          <Description>
            There is a custom login on this demo that prefetches the images of
            the next page on link hover. It was originally implemented in the{" "}
            <TextLink href="https://github.com/ethanniser/NextFaster">
              NextFaster
            </TextLink>{" "}
            project. The main code you will want to check is the{" "}
            <InlineCode>prefetch-images</InlineCode> api route and the custom{" "}
            <InlineCode>link.tsx</InlineCode> component.
          </Description>
        </>
      )}
      {props.onMouseDown && (
        <>
          <FeatureTags onMouseDown />
          <Description>
            The links on this demo trigger navigation on mouse down (as soon as
            you click instead of waiting for release). This makes navigation
            feel a little faster.
          </Description>
        </>
      )}
    </div>
  );
}

function Description(props: { children: React.ReactNode }) {
  return (
    <div className="ml-2 mt-2 mb-6 text-sm last:mb-0">{props.children}</div>
  );
}
