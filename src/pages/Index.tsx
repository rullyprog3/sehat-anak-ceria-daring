
import MainLayout from "@/layouts/MainLayout";
import { User, Users, Settings } from "lucide-react";

const roleIntro = {
  siswa: {
    title: "Selamat Datang, Siswa SD!",
    desc: "Ayo jaga kesehatanmu dengan mudah.<br />Dapatkan informasi penting, catat datamu, dan sampaikan keluhan di sini."
  },
  guru: {
    title: "Selamat Datang, Guru!",
    desc: "Bagikan tips kesehatan, pantau data siswa, dan tanggapi keluhan secara langsung. Bersama kita sehatkan generasi bangsa."
  },
  admin: {
    title: "Selamat Datang, Admin!",
    desc: "Kelola akun guru & siswa dengan mudah. Pastikan semua data dan pengguna terhubung dengan baik."
  }
};

const roleIcon = {
  siswa: User,
  guru: Users,
  admin: Settings,
};

const Index = () => (
  <MainLayout>
    {({ role }: { role: "siswa" | "guru" | "admin" }) => {
      const Icon = roleIcon[role];
      return (
        <div className="flex flex-col gap-6 items-center justify-center h-[70vh] animate-fade-in">
          <span className="inline-flex items-center bg-greenSoft px-6 py-2 rounded-xl shadow">
            <Icon size={36} className="text-primary mr-2" />
            <h1 className="text-3xl md:text-4xl font-bold text-purpleDark">{roleIntro[role].title}</h1>
          </span>
          <div className="text-lg md:text-xl text-grayNeutral max-w-2xl text-center"
            dangerouslySetInnerHTML={{ __html: roleIntro[role].desc }} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-6">
            {role === "siswa" && (
              <>
                <FeatureCard title="Informasi Kesehatan" icon="Info" to="/siswa/informasi"
                  desc="Baca tips dan info seputar kesehatan di sekolah." />
                <FeatureCard title="Input Data Kesehatan" icon="Clipboard" to="/siswa/input-data"
                  desc="Catat kesehatan harianmu dengan mudah." />
                <FeatureCard title="Keluhan Kesehatan" icon="Book" to="/siswa/keluhan"
                  desc="Sampaikan keluhan supaya segera dibantu guru." />
              </>
            )}
            {role === "guru" && (
              <>
                <FeatureCard title="Beri Tips Kesehatan" icon="Info" to="/guru/informasi"
                  desc="Bagikan info dan edukasi kesehatan ke siswa." />
                <FeatureCard title="Rekap Data Siswa" icon="Clipboard" to="/guru/rekap"
                  desc="Lihat data kesehatan terkini dari murid-murid Anda." />
                <FeatureCard title="Keluhan Siswa" icon="Users" to="/guru/keluhan"
                  desc="Balas dan pantau keluhan siswa Anda." />
              </>
            )}
            {role === "admin" && (
              <FeatureCard title="Manajemen Akun" icon="Settings" to="/admin/akun"
                desc="Kelola semua akun guru & siswa untuk kelancaran sistem." />
            )}
          </div>
        </div>
      );
    }}
  </MainLayout>
);

function FeatureCard({ title, desc, icon, to }: { title: string; desc: string; icon: keyof typeof iconMap; to: string; }) {
  const IconComp = iconMap[icon];
  return (
    <a href={to} className="block bg-white rounded-2xl shadow-lg p-6 hover:scale-105 transition-transform border-t-4 border-primary min-h-[170px] group">
      <IconComp size={40} className="text-primary mb-3 group-hover:animate-pulse" />
      <div className="font-bold text-xl text-purpleDark mb-2">{title}</div>
      <div className="text-grayNeutral text-base">{desc}</div>
    </a>
  );
}

// Ikon usable (lucide-react)
const iconMap = {
  Info: require("lucide-react").Info,
  Clipboard: require("lucide-react").Clipboard,
  Book: require("lucide-react").Book,
  Users: require("lucide-react").Users,
  Settings: require("lucide-react").Settings
};

export default Index;
