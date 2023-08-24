import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-[#42194E]" id="kontak">
      <div className="mx-6 max-w-xl pb-4 pt-16 md:max-w-full md:px-8 lg:mx-12 lg:max-w-5xl lg:px-8 xl:max-w-screen-2xl">
        <div className="grid gap-0 space-x-4 lg:grid-cols-3 lg:space-x-20">
          <div className="justify-left col-span-1 flex items-center">
            <Image
              width={427}
              height={212}
              src="/image/logofooter.png"
              className="h-auto w-full max-w-lg "
              alt="logo"
            />
          </div>

          <div className="ml-10 flex w-72 flex-col lg:mx-auto">
            <div>
              <div className="mb-2 flex flex-col lg:mb-4">
                <h2 className="title-font text-md font-bold text-white lg:text-xl">
                  Alamat
                </h2>
                <span className="mt-1 h-1 w-14 rounded-none bg-orange-100 lg:w-16"></span>
              </div>
              <p className="text-md font-extralight tracking-wider text-white lg:text-xl">
                Jl. Margonda Raya No.100, Pondok Cina, Beji, Kota Depok, Jawa
                Barat 16424
              </p>
            </div>

            <div className="my-8 mb-2 flex flex-col lg:mb-4">
              <h2 className="title-font text-md font-bold text-white lg:text-xl">
                UG Direktori
              </h2>
              <span className="mt-1 h-1 w-24 rounded-none bg-orange-100 lg:w-28"></span>
            </div>
            <nav className="text-md flex list-none flex-col space-y-1 font-extralight tracking-wider text-white lg:space-y-4 lg:text-xl">
              <a
                className="underline-from-center"
                href="https://baak.gunadarma.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                BAAK
              </a>
              <a
                className="underline-from-center"
                href="https://studentsite.gunadarma.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                STUDENTSITE
              </a>
              <a
                className="underline-from-center"
                href="https://library.gunadarma.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                LIBRARY
              </a>
              <a
                className="underline-from-center"
                href="https://v-class.gunadarma.ac.id/"
                target="_blank"
                rel="noreferrer"
              >
                V-CLASS
              </a>
            </nav>
          </div>

          <div className="col-span-1 mt-8 lg:mt-0 lg:max-w-xl">
            <div className="mb-2 flex flex-col lg:mb-4">
              <h2 className="title-font text-md font-bold text-white lg:text-xl">
                Kontak
              </h2>
              <span className="mt-1 h-1 w-14 rounded-none bg-orange-100 lg:w-16"></span>
            </div>
            <nav className="text-md list-none font-extralight tracking-wider text-white lg:text-xl">
              <p>Phone : 062 - 21 - 78881070</p>
              <p className="mt-4">Fax : 062 - 21 - 78881071</p>
              <p className="mt-4">E-mail : lpug@gunadarma.ac.id</p>
            </nav>
          </div>
        </div>
        <div className="py-6">
          <div className="flex flex-col">
            <span className="h-0.5 w-full rounded-none bg-white"></span>
            <div className="mt-4 flex flex-row justify-between text-white">
              <p className="text-sm lg:text-xl">© 2023 LPUG</p>
              <div className="flex items-center justify-center space-x-3">
                <Image
                  width={36}
                  height={34}
                  src="/image/linkedin.svg"
                  alt="linkedin"
                />
                <a
                  href="https://www.linkedin.com/company/lembaga-pengembangan-universitas-gunadarma/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-bold underline lg:text-xl"
                >
                  Linkedin
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
