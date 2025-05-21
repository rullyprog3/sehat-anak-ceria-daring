
const informasiList = [
  {
    judul: "Pentingnya Cuci Tangan",
    isi: "Selalu cuci tangan dengan sabun sebelum makan untuk mencegah kuman masuk ke tubuh.",
  },
  {
    judul: "Sarapan Sehat",
    isi: "Sarapan pagi membantu kamu lebih semangat belajar dan menjaga kesehatan tubuh.",
  },
  {
    judul: "Rajin Minum Air Putih",
    isi: "Minum air putih minimal 6-8 gelas sehari agar tubuh tetap segar dan sehat.",
  }
];

const InformasiKesehatan = () => (
  <div className="animate-fade-in">
    <h2 className="font-bold text-2xl text-primary mb-4">Informasi & Tips Kesehatan</h2>
    <div className="grid md:grid-cols-2 gap-6">
      {informasiList.map((info, i) => (
        <div key={i} className="bg-white rounded-lg shadow px-5 py-4 border-l-4 border-primary hover:scale-105 transition-transform">
          <div className="font-bold text-purpleDark text-xl mb-1">{info.judul}</div>
          <div className="text-grayNeutral">{info.isi}</div>
        </div>
      ))}
    </div>
  </div>
);

export default InformasiKesehatan;
