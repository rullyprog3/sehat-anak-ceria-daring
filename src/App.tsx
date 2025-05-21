
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Pages import
import InformasiKesehatan from "@/pages/siswa/InformasiKesehatan";
import InputDataKesehatan from "@/pages/siswa/InputDataKesehatan";
import KeluhanKesehatan from "@/pages/siswa/KeluhanKesehatan";
import InformasiGuru from "@/pages/guru/InformasiGuru";
import RekapKesehatan from "@/pages/guru/RekapKesehatan";
import KeluhanSiswa from "@/pages/guru/KeluhanSiswa";
import ManajemenAkun from "@/pages/admin/ManajemenAkun";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Siswa */}
          <Route path="/siswa/informasi" element={<InformasiKesehatan />} />
          <Route path="/siswa/input-data" element={<InputDataKesehatan />} />
          <Route path="/siswa/keluhan" element={<KeluhanKesehatan />} />
          {/* Guru */}
          <Route path="/guru/informasi" element={<InformasiGuru />} />
          <Route path="/guru/rekap" element={<RekapKesehatan />} />
          <Route path="/guru/keluhan" element={<KeluhanSiswa />} />
          {/* Admin */}
          <Route path="/admin/akun" element={<ManajemenAkun />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
