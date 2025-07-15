import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const mockUsers = [
  { username: "admin", password: "admin123" },
];

const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [form, setForm] = useState({ username: "", password: "" });

  const handleLogin = () => {
    const user = mockUsers.find(
      (u) => u.username === form.username && u.password === form.password
    );
    if (user) setIsLoggedIn(true);
    else alert("Login gagal, cek username/password.");
  };

  const attendanceStats = [
    { name: "VII-A", hadir: 28 },
    { name: "VII-B", hadir: 27 },
    { name: "VII-C", hadir: 26 },
    { name: "VII-D", hadir: 30 },
  ];

  const latestScores = [
    { name: "Ayu Lastari", kelas: "VII-A", pelajaran: "Matematika", nilai: 92 },
    { name: "Budi Santoso", kelas: "VII-A", pelajaran: "Indonesia", nilai: 88 },
    { name: "Citra Dewi", kelas: "VII-B", pelajaran: "Matematika", nilai: 85 },
    { name: "Dewi Kartika", kelas: "VII-C", pelajaran: "Sman", nilai: 90 },
  ];

  if (!isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center h-screen space-y-4">
        <h1 className="text-2xl font-bold">Login Admin Q-Siswa</h1>
        <Input
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <Input
          placeholder="Password"
          type="password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <Button onClick={handleLogin}>Login</Button>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Jumlah Siswa</p>
            <p className="text-xl font-bold">350</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Presensi Hari Ini</p>
            <p className="text-xl font-bold">321</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Tidak Hadir</p>
            <p className="text-xl font-bold text-red-500">29</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-sm text-gray-500">Kelas</p>
            <p className="text-xl font-bold">12</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Presensi Siswa</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={attendanceStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="hadir" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">Pengumuman</h3>
            <ul className="space-y-2">
              <li>
                <strong>20 April 2024:</strong> Jadwal penilaian tengah semester
              </li>
              <li>
                <strong>18 April 2024:</strong> Pengumpulan tugas akhir
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-4">
          <h3 className="text-lg font-semibold mb-4">Nilai Terbaru</h3>
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="text-left">Nama</th>
                <th className="text-left">Kelas</th>
                <th className="text-left">Pelajaran</th>
                <th className="text-left">Nilai</th>
              </tr>
            </thead>
            <tbody>
              {latestScores.map((score, idx) => (
                <tr key={idx} className="border-t">
                  <td>{score.name}</td>
                  <td>{score.kelas}</td>
                  <td>{score.pelajaran}</td>
                  <td>{score.nilai}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
