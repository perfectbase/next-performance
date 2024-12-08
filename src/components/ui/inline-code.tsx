export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="bg-muted text-xs px-1 rounded whitespace-nowrap">
      {children}
    </code>
  );
}
