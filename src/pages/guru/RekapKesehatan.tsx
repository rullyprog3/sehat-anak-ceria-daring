
const dummyData = [
  { nama: "Andi", berat: 35, tinggi: 140, suhu: 36.5 },
  { nama: "Siti", berat: 38, tinggi: 142, suhu: 37 },
  { nama: "Budi", berat: 32, tinggi: 135, suhu: 36.6 }
];

const RekapKesehatan = () => (
  <div className="animate-fade-in">
    <h2 className="font-bold text-2xl text-primary mb-4">Rekap Data Kesehatan Siswa</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded-xl shadow">
        <thead>
          <tr className="bg-blueSoft text-purpleDark">
            <th className="py-2 px-4">Nama</th>
            <th className="py-2 px-4">Berat Badan (kg)</th>
            <th className="py-2 px-4">Tinggi Badan (cm)</th>
            <th className="py-2 px-4">Suhu (&deg;C)</th>
          </tr>
        </thead>
        <tbody>
          {dummyData.map((s, i) => (
            <tr key={i} className="even:bg-peach">
              <td className="py-2 px-4">{s.nama}</td>
              <td className="py-2 px-4">{s.berat}</td>
              <td className="py-2 px-4">{s.tinggi}</td>
              <td className="py-2 px-4">{s.suhu}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default RekapKesehatan;
