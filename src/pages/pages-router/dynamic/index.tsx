import { FeatureTags } from "@/components/feature-tags";
import { Tabs } from "@/components/tabs-pages";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Page() {
  return (
    <DynamicPageLayout>
      <FeatureTags pagesRouter dynamic />
    </DynamicPageLayout>
  );
}

export function DynamicPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dynamic</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs tabs={[{ id: "1" }, { id: "2" }, { id: "3" }]} />
        <div className="mt-4">{children}</div>
      </CardContent>
    </Card>
  );
}
