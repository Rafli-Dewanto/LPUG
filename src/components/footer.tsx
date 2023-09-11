import Link from "next/link";
import Image from "next/image";
import { TfiLinkedin } from "react-icons/tfi";

function Footer() {
  return (
    <footer
      className="w-full bg-[#42194E] px-4 pb-8 pt-12 sm:px-12 md:py-14"
      id="kontak"
    >
      <section className="grid grid-cols-1 gap-x-12 gap-y-4 sm:grid-cols-3">
        {/* top row / left col */}
        <div className="grid grid-cols-1 content-center justify-items-center">
          <Image
            width={427}
            height={212}
            src="/image/logofooter.png"
            className="h-auto w-full max-w-lg"
            alt="logo"
          />
        </div>

        {/* 2nd col / mid row (alamat & ug direktori) */}
        <div className="mt-2 grid max-w-md grid-cols-1 gap-y-8 px-4">
          {/* alamat */}
          <div>
            <h2 className="font-bold text-white lg:text-xl">Alamat</h2>
            <span className="block h-1 w-14 bg-[#FDC89E] lg:w-16"></span>
            <p className="mt-4 font-extralight tracking-wider text-white lg:text-xl">
              Jl. Margonda Raya No.100, Pondok Cina, Beji, Kota Depok, Jawa
              Barat 16424
            </p>
          </div>
          {/* ug direktori */}
          <nav className="flex flex-col space-y-2 font-extralight tracking-wider text-white lg:space-y-4 lg:text-xl">
            <h2 className="font-bold text-white lg:text-xl">UG Direktori</h2>
            <span className="!mt-0 block h-1 w-24 bg-[#FDC89E] lg:w-32"></span>
            <Link
              className="underline-from-center !mt-[1.3rem]"
              href={"https://baak.gunadarma.ac.id"}
            >
              BAAK
            </Link>
            <Link
              className="underline-from-center"
              href={"https://studentsite.gunadarma.ac.id"}
            >
              STUDENTSITE
            </Link>
            <Link
              className="underline-from-center"
              href={"https://library.gunadarma.ac.id"}
            >
              LIBRARY
            </Link>
            <Link
              className="underline-from-center"
              href={"https://v-class.gunadarma.ac.id"}
            >
              V-CLASS
            </Link>
          </nav>
        </div>

        {/* 3rd col / bottom row */}
        <div className="mt-2 flex flex-col px-4">
          <h2 className="font-bold text-white lg:text-xl">Kontak</h2>
          <span className="h-1 w-16 bg-[#FDC89E]"></span>
          <article className="mt-4 font-extralight text-white lg:text-xl">
            <p>Phone : 062 - 21 - 78881070</p>
            <p className="mt-4">Fax : 062 - 21 - 78881071</p>
            <p className="mt-4">E-mail : lpug@gunadarma.ac.id</p>
          </article>
        </div>
      </section>
      <div className="mt-12 h-[0.10rem] w-full bg-slate-200 px-8"></div>

      {/* copyrights & linkedin */}
      <div className="mt-12 flex justify-between">
        <p className="text-white lg:text-xl">&copy; 2023 LPUG</p>
        {/* Linkedin container */}
        <div className="flex items-center justify-center space-x-3 sm:py-4">
          <Link
            href={`https://www.linkedin.com/company/lembaga-pengembangan-universitas-gunadarma/`}
          >
            <TfiLinkedin className="h-8 w-8 rounded-md bg-[#0B66C2] p-1 text-white" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/lembaga-pengembangan-universitas-gunadarma/"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-bold text-white hover:underline lg:text-xl"
          >
            Linkedin
          </Link>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
