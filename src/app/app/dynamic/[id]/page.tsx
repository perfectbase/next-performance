import { DynamicComponent } from "@/components/dynamic-component";

export default async function Page(props: { params: Promise<{ id: string }> }) {
  return (
    <div>
      Static Title
      <DynamicComponent {...props} />
    </div>
  );
}
