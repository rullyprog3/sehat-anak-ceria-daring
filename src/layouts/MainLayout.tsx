import { useState } from "react";
import { AppSidebar } from "@/components/AppSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

type Role = "siswa" | "guru" | "admin";

interface MainLayoutProps {
  children: (args: { role: Role }) => React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [role, setRole] = useState<Role>("siswa");

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full font-nunito bg-blueSoft">
        <AppSidebar role={role} />
        <main className="flex-1 p-4">
          <div className="flex justify-end gap-2 mb-6">
            <SidebarTrigger />
            <RoleSwitcher role={role} setRole={setRole} />
          </div>
          {children({ role })}
        </main>
      </div>
    </SidebarProvider>
  );
}

function RoleSwitcher({ role, setRole }: { role: string; setRole: (r: Role) => void }) {
  return (
    <div className="inline-flex items-center gap-1 bg-peach rounded-lg px-2 py-1 shadow-sm animate-fade-in">
      <button className={`px-2 py-1 rounded ${role === "siswa" ? "bg-primary text-white" : "hover:bg-primary/30"}`}
        onClick={() => setRole("siswa")}>Siswa</button>
      <span>|</span>
      <button className={`px-2 py-1 rounded ${role === "guru" ? "bg-primary text-white" : "hover:bg-primary/30"}`}
        onClick={() => setRole("guru")}>Guru</button>
      <span>|</span>
      <button className={`px-2 py-1 rounded ${role === "admin" ? "bg-primary text-white" : "hover:bg-primary/30"}`}
        onClick={() => setRole("admin")}>Admin</button>
    </div>
  );
}
