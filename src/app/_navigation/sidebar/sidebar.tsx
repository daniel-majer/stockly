import { useAppSelector } from "@/app/redux";
import { Separator } from "@/components/ui/separator";
import ExpandButton from "../components/expand-button";
import Logo from "../navbar/logo";
import { routes } from "./routes";
import SidebarItem from "./sidebar-item";

const Sidebar = () => {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed,
  );

  const collapsedClassName = isSidebarCollapsed
    ? "w-0 md:w-20"
    : "w-72 md:w-64";

  return (
    <aside
      className={`bg-sidebar flex min-h-full flex-col gap-y-4 border-r border-r-gray-200 p-4 transition-all duration-500 '${collapsedClassName}`}
    >
      <div className="flex items-center justify-between gap-x-2">
        <Logo />
        <ExpandButton className="md:hidden" />
      </div>

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
