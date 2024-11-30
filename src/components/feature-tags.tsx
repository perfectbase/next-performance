import { Tag } from "@/components/ui/tag";

export function FeatureTags(props: {
  pagesRouter?: boolean;
  appRouter?: boolean;
  dynamic?: boolean;
  static?: boolean;
  edgeRuntime?: boolean;
  loading?: boolean;
  clientCache?: boolean;
  serverCache?: boolean;
  suspense?: boolean;
  prefetch?: boolean;
  ppr?: boolean;
  onMouseDown?: boolean;
  imagePrefetch?: boolean;
}) {
  return (
    <div className="flex flex-wrap gap-2">
      {props.pagesRouter && (
        <Tag className="bg-blue-100 text-blue-800 border-blue-200">
          Pages Router
        </Tag>
      )}
      {props.appRouter && (
        <Tag className="bg-green-100 text-green-800 border-green-200">
          App Router
        </Tag>
      )}
      {props.dynamic && (
        <Tag className="bg-purple-100 text-purple-800 border-purple-200">
          Dynamic
        </Tag>
      )}
      {props.static && (
        <Tag className="bg-blue-100 text-blue-800 border-blue-200">Static</Tag>
      )}
      {props.edgeRuntime && (
        <Tag className="bg-red-100 text-red-800 border-red-200">
          Edge Runtime
        </Tag>
      )}
      {props.loading && (
        <Tag className="bg-pink-100 text-pink-800 border-pink-200">Loading</Tag>
      )}
      {props.clientCache && (
        <Tag className="bg-teal-100 text-teal-800 border-teal-200">
          Client Cache
        </Tag>
      )}
      {props.serverCache && (
        <Tag className="bg-indigo-100 text-indigo-800 border-indigo-200">
          Server Cache
        </Tag>
      )}
      {props.suspense && (
        <Tag className="bg-orange-100 text-orange-800 border-orange-200">
          Suspense
        </Tag>
      )}
      {props.prefetch && (
        <Tag className="bg-gray-100 text-gray-800 border-gray-200">
          Prefetch
        </Tag>
      )}
      {props.ppr && (
        <Tag className="bg-cyan-100 text-cyan-800 border-cyan-200">PPR</Tag>
      )}
      {props.onMouseDown && (
        <Tag className="bg-lime-100 text-lime-800 border-lime-200">
          On Mouse Down
        </Tag>
      )}
      {props.imagePrefetch && (
        <Tag className="bg-amber-100 text-amber-800 border-amber-200">
          Image Prefetch
        </Tag>
      )}
    </div>
  );
}
