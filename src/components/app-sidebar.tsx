import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Pages Router",
    items: [
      {
        title: "Static",
        url: "#",
      },
      {
        title: "Dynamic",
        url: "#",
      },
    ],
  },
  {
    title: "App Router",
    items: [
      {
        title: "Static",
        url: "#",
      },
      {
        title: "Dynamic",
        url: "#",
      },
      {
        title: "Suspense",
        url: "#",
      },
      {
        title: "Loading",
        url: "#",
      },
      {
        title: "Edge Runtime",
        url: "#",
      },
      {
        title: "Client Cache",
        url: "#",
      },
      {
        title: "Server Cache",
        url: "#",
      },
      {
        title: "PPR",
        url: "#",
      },
      {
        title: "Prefetch",
        url: "#",
      },
      {
        title: "Image Prefetch",
        url: "#",
      },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        {items.map((group) => (
          <SidebarGroup key={group.title}>
            <SidebarGroupLabel className="uppercase">
              {group.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  );
}
