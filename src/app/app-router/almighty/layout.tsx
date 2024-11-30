import { Tabs } from "@/components/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "@/components/ui/link";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Card>
        <CardHeader>
          <CardTitle>Almighty 🚀</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs
            tabs={[{ id: "1" }, { id: "2" }, { id: "3" }]}
            prefetch
            linkComponent={Link}
          />
          <div className="mt-4">{children}</div>
        </CardContent>
      </Card>
    </>
  );
}
