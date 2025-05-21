
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const KeluhanKesehatan = () => {
  const [keluhan, setKeluhan] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!keluhan.trim()) {
      toast({ title: "Masukkan keluhan!", description: "Keluhan tidak boleh kosong." });
      return;
    }
    toast({
      title: "Keluhan terkirim.",
      description: "Keluhanmu akan ditindaklanjuti oleh guru.",
    });
    setKeluhan("");
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow animate-fade-in">
      <h2 className="font-bold text-primary text-2xl mb-4">Keluhan Kesehatan</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label>
          Isi keluhanmu di sini
          <textarea className="block w-full mt-1 px-3 py-2 border rounded focus:ring-2 focus:border-primary" rows={4}
            placeholder="Contoh: Saya sering pusing saat pelajaran..." value={keluhan}
            onChange={e => setKeluhan(e.target.value)} required />
        </label>
        <button type="submit" className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors font-bold">Kirim Keluhan</button>
      </form>
    </div>
  );
};

export default KeluhanKesehatan;
