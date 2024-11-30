import { cn } from "@/lib/utils";

function Tag({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "border inline-block px-2 py-0.5 text-xs lowercase rounded-full",
        className
      )}
      {...props}
    />
  );
}

export { Tag };
