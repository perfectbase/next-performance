import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { demos } from "@/lib/demos";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Card className="max-w-screen-md w-full">
        <CardHeader>
          <CardTitle>About</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            I was testing some Next.js features and how they affect navigation
            performance. I decided to create this demo project to share it and
            make it easier to understand the differences.
          </p>
        </CardContent>
        <div className="mx-6">
          <Separator />
        </div>
        <CardHeader>
          <CardTitle>Demos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-8">
            {demos.map((group) => (
              <div key={group.title}>
                <h2 className="text-xs uppercase font-bold text-muted-foreground mb-4">
                  {group.title}
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {group.items.map((item) => (
                    <Link
                      key={item.title}
                      href={item.url}
                      className="block bg-muted/80 px-5 py-3 rounded-md hover:bg-muted/60"
                    >
                      <div className="font-bold">{item.title}</div>
                      <div className="text-muted-foreground text-sm mt-1.5">
                        {item.description}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
