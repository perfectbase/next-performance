export const SUSPENSE_CODE = `
export default function Page(props: { params: Promise<{ id: string }> }) {
  return (
    <div>
      Static Title
      <Suspense fallback={<Spinner />}>
        <DynamicComponent {...props} />
      </Suspense>
    </div>
  );
}
`.trim();

export const CLIENT_CACHE_CODE = `
const nextConfig: NextConfig = {
  experimental: {
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
};
`.trim();

export const SERVER_CACHE_CODE = `
const getCachedDynamicData = unstable_cache(getDynamicData);
`.trim();

export const PPR_CODE = `
const nextConfig: NextConfig = {
  experimental: {
    ppr: true,
  },
};
`.trim();
