import Alur from "@/components/alur";
import Beranda from "@/components/beranda";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Kursus from "@/components/kursus";
import Pengumuman from "@/components/pengumuman";
import Tentang from "@/components/tentang";

export default function Home() {
  return (
    <main>
      <Header />
      <Beranda />
      <Alur />
      <Kursus />
      <Tentang />
      <Pengumuman />
      <Footer />
    </main>
  );
}
