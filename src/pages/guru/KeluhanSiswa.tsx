
const dummyKeluhan = [
  { siswa: "Andi", isi: "Saya sering pusing pagi hari.", balasan: "Coba istirahat cukup dan sarapan sehat." },
  { siswa: "Budi", isi: "Perut terasa sakit setelah makan siang", balasan: "Pastikan membawa bekal sehat dan minum air putih." }
];

const KeluhanSiswa = () => (
  <div className="animate-fade-in">
    <h2 className="font-bold text-2xl text-primary mb-4">Keluhan Siswa & Balasan</h2>
    <div className="flex flex-col gap-4">
      {dummyKeluhan.map((k, i) => (
        <div key={i} className="bg-white rounded shadow p-4 border-l-4 border-primary">
          <div className="font-semibold text-purpleDark">{k.siswa}</div>
          <div className="text-grayNeutral italic">&quot;{k.isi}&quot;</div>
          <div className="mt-2 text-green-800 font-medium">Balasan guru: <span className="font-normal">{k.balasan}</span></div>
          <div className="mt-1 text-sm text-grayNeutral">Fitur balas keluhan akan hadir pada update selanjutnya.</div>
        </div>
      ))}
    </div>
  </div>
);

export default KeluhanSiswa;
