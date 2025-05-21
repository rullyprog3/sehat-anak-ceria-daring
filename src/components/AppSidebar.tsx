
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from "@/components/ui/sidebar";
import { User, Book, Info, Users, Calendar, Clipboard, Home, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const siswaItems = [
  {
    title: "Informasi Kesehatan",
    url: "/siswa/informasi",
    icon: Info
  },
  {
    title: "Input Data Kesehatan",
    url: "/siswa/input-data",
    icon: Clipboard
  },
  {
    title: "Keluhan Kesehatan",
    url: "/siswa/keluhan",
    icon: Book
  }
];

const guruItems = [
  {
    title: "Beri Tips Kesehatan",
    url: "/guru/informasi",
    icon: Info
  },
  {
    title: "Rekap Data Siswa",
    url: "/guru/rekap",
    icon: Clipboard
  },
  {
    title: "Keluhan Siswa",
    url: "/guru/keluhan",
    icon: Users
  }
];

const adminItems = [
  {
    title: "Manajemen Akun",
    url: "/admin/akun",
    icon: Settings
  }
];

export function AppSidebar({ role = "siswa" }: { role: "siswa" | "guru" | "admin" }) {
  let menu: { title: string, url: string, icon: any }[] = [];
  if (role === "siswa") menu = siswaItems;
  if (role === "guru") menu = guruItems;
  if (role === "admin") menu = adminItems;

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            {role === "siswa" && "Menu Siswa"}
            {role === "guru" && "Menu Guru"}
            {role === "admin" && "Menu Admin"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menu.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link to={item.url} className="flex gap-2 items-center">
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
