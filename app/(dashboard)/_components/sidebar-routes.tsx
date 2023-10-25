import { Compass, Layout } from "lucide-react"
import SidebarItem from "./sidebar-item";

const guestRoutes = [
  {
    icon: <Layout size={22}/>,
    label: "Dashboard",
    href: '/'
  },
  {
    icon: <Compass size={22}/>,
    label: "Browse",
    href: '/search'
  }
]

function SidebarRoutes() {
  const routes = guestRoutes;

  return (
    <div className="flex flex-col w-full">
      {routes.map((route) => (
        <SidebarItem 
          key={route.href}
          icon={route.icon}
          label={route.label}
          href={route.href}
        />
      ))}
    </div>
  )
}

export default SidebarRoutes