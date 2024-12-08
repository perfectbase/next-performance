export const demos: {
  title: string;
  items: {
    title: string;
    url: string;
    description: string;
  }[];
}[] = [
  {
    title: "Pages Router",
    items: [
      {
        title: "Static",
        url: "/pages-router/static",
        description: "Static pages with pages router.",
      },
      {
        title: "Dynamic",
        url: "/pages-router/dynamic",
        description: "Dynamic pages with pages router.",
      },
    ],
  },
  {
    title: "App Router",
    items: [
      {
        title: "Static",
        url: "/app-router/static",
        description: "Static pages with app router.",
      },
      {
        title: "Dynamic",
        url: "/app-router/dynamic",
        description: "Dynamic pages with app router.",
      },
      {
        title: "Suspense",
        url: "/app-router/suspense",
        description: "Using Suspense for loading state.",
      },
      {
        title: "Loading",
        url: "/app-router/loading",
        description: "Adding a loading.tsx file.",
      },
      {
        title: "Edge Runtime",
        url: "/app-router/edge-runtime",
        description: "Using the faster Edge Runtime.",
      },
      {
        title: "Client Cache",
        url: "/app-router/client-cache",
        description: "Client-side router caching.",
      },
      {
        title: "Server Cache",
        url: "/app-router/server-cache",
        description: "Caching the dynamic content on the server-side.",
      },
      {
        title: "Partial Prerendering",
        url: "/app-router/partial-prerendering",
        description: "Combining static and dynamic rendering.",
      },
      {
        title: "Prefetch",
        url: "/app-router/prefetch",
        description: "Prefetching pages for instant navigation.",
      },
      {
        title: "Almighty",
        url: "/app-router/almighty",
        description: "Combining multiple optimizations for best performance.",
      },
    ],
  },
];
