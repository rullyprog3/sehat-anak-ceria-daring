
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const InputDataKesehatan = () => {
  const [data, setData] = useState({ berat: "", tinggi: "", suhu: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setData({ ...data, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    toast({
      title: "Data berhasil disimpan!",
      description: "Terima kasih sudah mencatat data kesehatanmu.",
    });
    setData({ berat: "", tinggi: "", suhu: "" });
  }

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow animate-fade-in">
      <h2 className="font-bold text-primary text-2xl mb-4">Input Data Kesehatan</h2>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <label>
          Berat Badan (kg)
          <input name="berat" type="number" min="15" max="80"
            className="block w-full mt-1 px-3 py-2 border rounded focus:ring-2 focus:border-primary"
            placeholder="Misal: 35"
            value={data.berat} onChange={handleChange} required />
        </label>
        <label>
          Tinggi Badan (cm)
          <input name="tinggi" type="number" min="100" max="170"
            className="block w-full mt-1 px-3 py-2 border rounded focus:ring-2 focus:border-primary"
            placeholder="Misal: 140"
            value={data.tinggi} onChange={handleChange} required />
        </label>
        <label>
          Suhu Tubuh (&deg;C)
          <input name="suhu" type="number" step="0.1" min="35" max="41"
            className="block w-full mt-1 px-3 py-2 border rounded focus:ring-2 focus:border-primary"
            placeholder="Misal: 36.5"
            value={data.suhu} onChange={handleChange} required />
        </label>
        <button type="submit"
          className="mt-2 bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors font-bold">Simpan Data</button>
      </form>
    </div>
  );
};

export default InputDataKesehatan;
