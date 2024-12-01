import { Description } from "@/components/description";
import { FeatureDescriptions } from "@/components/feature-descriptions";
import { FeatureTags } from "@/components/feature-tags";
import { Tabs } from "@/components/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <StaticPageLayout>
      <FeatureTags pagesRouter static />
      <Description>
        In this demo, you&apos;ll see that the navigation between pages is
        practically instant.
      </Description>
      <Separator className="my-4" />
      <FeatureDescriptions pagesRouter static />
    </StaticPageLayout>
  );
}

export function StaticPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Static</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs tabs={[{ id: "1" }, { id: "2" }, { id: "3" }]} />
        <div className="mt-4">{children}</div>
      </CardContent>
    </Card>
  );
}
