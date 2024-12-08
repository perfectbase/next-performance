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
        url: "https://nextperformance.vercel.app/pages-router/static",
        description: "Static pages with pages router.",
      },
      {
        title: "Dynamic",
        url: "https://nextperformance.vercel.app/pages-router/dynamic",
        description: "Dynamic pages with pages router.",
      },
    ],
  },
  {
    title: "App Router",
    items: [
      {
        title: "Static",
        url: "https://nextperformance.vercel.app/app-router/static",
        description: "Static pages with app router.",
      },
      {
        title: "Dynamic",
        url: "https://nextperformance.vercel.app/app-router/dynamic",
        description: "Dynamic pages with app router.",
      },
      {
        title: "Suspense",
        url: "https://nextperformance.vercel.app/app-router/suspense",
        description: "Using Suspense for loading state.",
      },
      {
        title: "Loading",
        url: "https://nextperformance.vercel.app/app-router/loading",
        description: "Adding a loading.tsx file.",
      },
      {
        title: "Edge Runtime",
        url: "https://nextperformance.vercel.app/app-router/edge-runtime",
        description: "Using the faster Edge Runtime.",
      },
      {
        title: "Client Cache",
        url: "/app-router/client-cache",
        description: "Client-side router caching.",
      },
      {
        title: "Server Cache",
        url: "https://nextperformance.vercel.app/app-router/server-cache",
        description: "Caching the dynamic content on the server-side.",
      },
      {
        title: "Partial Prerendering",
        url: "https://nextperformance.vercel.app/app-router/partial-prerendering",
        description: "Combining static and dynamic rendering.",
      },
      {
        title: "Prefetch",
        url: "https://nextperformance.vercel.app/app-router/prefetch",
        description: "Prefetching pages for instant navigation.",
      },
      {
        title: "Almighty",
        url: "https://nextperformance.vercel.app/app-router/almighty",
        description: "Combining multiple optimizations for best performance.",
      },
    ],
  },
];
