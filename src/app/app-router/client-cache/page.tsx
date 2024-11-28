export default function Page() {
  return (
    <div>
      {
        // client cache needs to be a global configuration at `next.config.ts`
        // in the production deployment I'll use Vercel's rewrite rules to show the other branch.
        'Implemented at the branch "client-cache".'
      }
    </div>
  );
}
