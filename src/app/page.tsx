import Alur from "@/components/alur";
import Beranda from "@/components/beranda";
import Kursus from "@/components/kursus";
import Pengumuman from "@/components/pengumuman";
import Tentang from "@/components/tentang";

export default function Home() {
  return (
    <main>
      <Beranda />
      <Alur />
      <Kursus />
      <Tentang />
      <Pengumuman />
    </main>
  );
}
