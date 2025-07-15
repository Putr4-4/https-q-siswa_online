import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <header className="bg-blue-600 text-white py-6 px-8 shadow-md">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Q-Siswa</h1>
          <nav className="space-x-4">
            <a href="#fitur" className="hover:underline">Fitur</a>
            <a href="#manfaat" className="hover:underline">Manfaat</a>
            <a href="#harga" className="hover:underline">Harga</a>
            <a href="#testimoni" className="hover:underline">Testimoni</a>
            <a href="#kontak" className="hover:underline">Kontak</a>
          </nav>
        </div>
      </header>

      <main className="px-8 py-16 max-w-6xl mx-auto">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Digitalisasi Sekolah Lebih Mudah</h2>
          <p className="text-lg mb-6">
            Q-Siswa adalah sistem informasi sederhana dan efektif untuk membantu sekolah
            mengelola presensi, nilai, dan komunikasi dengan orang tua.
          </p>
          <Button className="text-lg">Coba Demo</Button>
        </section>

        <section id="fitur" className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Fitur Utama</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="p-4 border rounded-xl">Presensi harian berbasis QR & laporan otomatis</li>
            <li className="p-4 border rounded-xl">Input nilai & cetak raport PDF</li>
            <li className="p-4 border rounded-xl">Pengumuman ke orang tua via dashboard</li>
            <li className="p-4 border rounded-xl">Manajemen data siswa & guru</li>
          </ul>
        </section>

        <section id="manfaat" className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">Manfaat Q-Siswa</h3>
          <ul className="list-disc list-inside text-lg space-y-2">
            <li>Meningkatkan transparansi ke orang tua</li>
            <li>Menghemat waktu administrasi guru</li>
            <li>Mudah digunakan tanpa perlu instalasi</li>
            <li>Dapat diakses dari HP atau komputer</li>
          </ul>
        </section>

        <section id="harga" className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-center">Paket Harga</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="border p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Basic</h4>
              <p className="mb-2">Rp 200.000 / bulan</p>
              <p className="text-sm mb-4">Untuk sekolah hingga 100 siswa</p>
              <Button>Pesan Sekarang</Button>
            </div>
            <div className="border p-6 rounded-xl bg-blue-50">
              <h4 className="text-xl font-bold mb-2">Standar</h4>
              <p className="mb-2">Rp 350.000 / bulan</p>
              <p className="text-sm mb-4">Untuk sekolah hingga 300 siswa</p>
              <Button>Pesan Sekarang</Button>
            </div>
            <div className="border p-6 rounded-xl">
              <h4 className="text-xl font-bold mb-2">Premium</h4>
              <p className="mb-2">Rp 500.000 / bulan</p>
              <p className="text-sm mb-4">Untuk sekolah tak terbatas + fitur lanjutan</p>
              <Button>Pesan Sekarang</Button>
            </div>
          </div>
        </section>

        <section id="testimoni" className="mb-16">
          <h3 className="text-2xl font-semibold mb-4 text-center">Apa Kata Mereka?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border p-4 rounded-xl">
              <p className="italic">"Q-Siswa sangat membantu kami dalam rekap kehadiran dan laporan ke orang tua. Sangat praktis dan mudah dipahami."</p>
              <p className="mt-2 font-semibold">- Ibu Rina, Kepala Sekolah SD Harapan</p>
            </div>
            <div className="border p-4 rounded-xl">
              <p className="italic">"Kami tidak butuh sistem mahal, cukup Q-Siswa yang ringan dan langsung bisa dipakai. Anak-anak juga senang."</p>
              <p className="mt-2 font-semibold">- Pak Andi, Guru Madrasah Al-Amin</p>
            </div>
          </div>
        </section>

        <section id="kontak" className="text-center">
          <h3 className="text-2xl font-semibold mb-4">Tertarik Menggunakan?</h3>
          <p className="mb-4">Daftarkan sekolah Anda untuk coba gratis atau tanya langsung lewat WhatsApp.</p>
          <div className="max-w-md mx-auto space-y-4">
            <Input placeholder="Nama Sekolah" />
            <Input placeholder="Nama PIC / Guru" />
            <Input placeholder="Nomor WhatsApp" />
            <Button className="w-full">Daftar Sekarang</Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6 text-center text-sm text-gray-600">
        © 2025 Q-Siswa. Semua Hak Dilindungi.
      </footer>
    </div>
  );
}
