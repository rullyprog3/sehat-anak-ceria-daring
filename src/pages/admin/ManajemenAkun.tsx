
const dummyGuru = [
  { nama: "Bu Siti", kelas: "4A" },
  { nama: "Pak Budi", kelas: "5B" }
];

const dummySiswa = [
  { nama: "Andi", kelas: "4A" },
  { nama: "Budi", kelas: "5B" },
  { nama: "Siti", kelas: "4A" }
];

const ManajemenAkun = () => (
  <div className="animate-fade-in">
    <h2 className="font-bold text-2xl text-primary mb-6">Manajemen Akun Guru & Siswa</h2>
    <div className="grid md:grid-cols-2 gap-10">
      <div>
        <h3 className="font-bold text-xl mb-3 text-purpleDark">Akun Guru</h3>
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-blueSoft text-purpleDark">
              <th className="py-2 px-4">Nama</th>
              <th className="py-2 px-4">Kelas</th>
            </tr>
          </thead>
          <tbody>
            {dummyGuru.map((g, i) => (
              <tr key={i} className="even:bg-peach">
                <td className="py-2 px-4">{g.nama}</td>
                <td className="py-2 px-4">{g.kelas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h3 className="font-bold text-xl mb-3 text-purpleDark">Akun Siswa</h3>
        <table className="w-full bg-white rounded shadow">
          <thead>
            <tr className="bg-blueSoft text-purpleDark">
              <th className="py-2 px-4">Nama</th>
              <th className="py-2 px-4">Kelas</th>
            </tr>
          </thead>
          <tbody>
            {dummySiswa.map((g, i) => (
              <tr key={i} className="even:bg-peach">
                <td className="py-2 px-4">{g.nama}</td>
                <td className="py-2 px-4">{g.kelas}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="mt-8 text-grayNeutral">Fitur tambah, edit, hapus akun tersedia di versi berikutnya.</div>
  </div>
);

export default ManajemenAkun;
