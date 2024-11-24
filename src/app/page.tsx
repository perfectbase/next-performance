import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Card className="max-w-screen-md w-full">
        <CardHeader>
          <CardTitle>Home</CardTitle>
        </CardHeader>
        <CardContent>Welcome to the home page.</CardContent>
      </Card>
    </div>
  );
}
