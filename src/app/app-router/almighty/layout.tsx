import { Tabs } from "@/components/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Almighty 😎</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs tabs={[{ id: "1" }, { id: "2" }, { id: "3" }]} prefetch />
          <div className="mt-4">{children}</div>
        </CardContent>
      </Card>
    </>
  );
}
