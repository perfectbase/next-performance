import { FeatureTags } from "./feature-tags";
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
            This demo uses the App Router. Which is a newer way of developing
            apps with Next.js. It supports nested layouts, provides built-in
            solutions for loading states, error handling and data fetching. It
            defaults to server components and makes it easy to stream additional
            data from the initial page request.
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
            The dynamic content is wrapped in a <code>Suspense</code> component,
            which shows a loading spinner while data is fetched. The page
            doesn&apos;t make an extra request to get the dynamic content—the
            content is streamed from the initial page request itself.
          </Description>
        </>
      )}
      {props.loading && (
        <>
          <FeatureTags loading />
          <Description>
            There is a <code>loading.tsx</code> file in this route segment.
            Loading files are cached and are displayed immediately when
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
            The client cache is enabled. The client cache is a global
            configuration for the app. You can configure how long the cache
            should last for static and dynamic pages in the{" "}
            <code>next.config.ts</code> file. This demo is configured to cache
            dynamic pages for 30 seconds and static pages for 180 seconds, which
            was the default in Next.js 14. (Since Next.js 15, the default is to
            not cache).
          </Description>
        </>
      )}
      {props.serverCache && (
        <>
          <FeatureTags serverCache />
          <Description>
            The dynamic content is being cached on the server-side. The cache is
            shared between all users. Cache revalidation can be scheduled or
            triggered on demand.
          </Description>
        </>
      )}
      {props.ppr && (
        <>
          <FeatureTags ppr />
          <Description>
            This demo has partial prerendering enabled. Partial Prerendering
            allows Next.js to combine static and dynamic content in a single
            page, serving a static shell instantly while streaming in dynamic
            content asynchronously.
          </Description>
        </>
      )}
      {props.prefetch && (
        <>
          <FeatureTags prefetch />
          <Description>
            The <code>Link</code> component is configured with{" "}
            <code>{"prefetch={true}"}</code>, which tells Next.js to prefetch
            the entire page, including the dynamic content.
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
            <code>prefetch-images</code> api route and the custom{" "}
            <code>link.tsx</code> component.
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
