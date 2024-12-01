import { Description } from "@/components/description";
import { FeatureDescriptions } from "@/components/feature-descriptions";
import { FeatureTags } from "@/components/feature-tags";
import { Tabs } from "@/components/tabs-pages";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function Page() {
  return (
    <DynamicPageLayout>
      <FeatureTags pagesRouter dynamic />
      <Description>
        Even with dynamic content, the navigation remains nearly instant. The
        static parts of the page load instantly, while dynamic parts are
        rendered after the data is fetched.
      </Description>
      <Separator className="my-4" />
      <FeatureDescriptions pagesRouter dynamic />
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
