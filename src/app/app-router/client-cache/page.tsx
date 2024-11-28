import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function Page() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Client Cache</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mt-4">
          <div>TODO</div>
          <Link href="https://next-performance-git-client-cache-perfectbases-projects.vercel.app/app-router/client-cache">
            <Button>Go To Client Cache</Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
