import { unstable_noStore } from "next/cache";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  unstable_noStore(); // force dynamic
  const { id } = await params;
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return new Response(`Dynamic Data: ${id}`);
}
