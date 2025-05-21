
const contohTips = [
  {
    judul: "Tips Makan Sehat",
    isi: "Konsumsi buah dan sayur setiap hari. Hindari jajanan yang tidak bersih.",
  },
  {
    judul: "Aktif Bergerak",
    isi: "Olahraga ringan seperti senam atau bermain selama 30 menit setiap hari sangat baik untuk tubuh.",
  }
];

const InformasiGuru = () => (
  <div className="animate-fade-in">
    <h2 className="font-bold text-2xl text-primary mb-4">Berikan Informasi / Tips</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {contohTips.map((tips, i) => (
        <div key={i} className="bg-white rounded-lg shadow px-5 py-4 border-l-4 border-primary hover:scale-105 transition-transform">
          <div className="font-bold text-purpleDark text-xl mb-1">{tips.judul}</div>
          <div className="text-grayNeutral">{tips.isi}</div>
        </div>
      ))}
    </div>
    <p className="mt-8 text-grayNeutral">Fitur tambah/edit tips akan tersedia dalam pengembangan berikutnya.</p>
  </div>
);

export default InformasiGuru;
