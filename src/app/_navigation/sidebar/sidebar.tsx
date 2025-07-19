import { Separator } from "@/components/ui/separator";
import Logo from "../navbar/logo";
import { routes } from "./routes";
import SidebarItem from "./sidebar-item";

const Sidebar = () => {
  return (
    <aside className="bg-sidebar flex min-h-full w-64 flex-col gap-y-4 p-4">
      <Logo />
      <Separator />
      <div className="flex flex-col gap-y-2">
        {routes.map((route) => (
          <SidebarItem
            key={route.href}
            href={route.href}
            label={route.label}
            icon={route.icon}
          />
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
