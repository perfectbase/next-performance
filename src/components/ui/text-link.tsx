import Link from "next/link";
import React, { forwardRef } from "react";

export const TextLink = forwardRef<
  HTMLAnchorElement,
  React.ComponentProps<typeof Link>
>(({ children, ...props }, ref) => {
  return (
    <Link
      {...props}
      ref={ref}
      className="border-b border-dotted border-muted-foreground hover:text-muted-foreground"
    >
      {children}
    </Link>
  );
});

TextLink.displayName = "TextLink";
