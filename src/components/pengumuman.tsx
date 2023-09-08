import Link from "next/link";

function Pengumuman() {
  return (
    <section
      className="body-font scroll-mt-24 overflow-hidden pb-8 text-gray-600"
      id="pengumuman"
    >
      <div className="mx-10 my-8 lg:mx-24">
        <div className="mb-10 mt-16 flex flex-col">
          <h1 className="mb-1 text-xl font-bold lg:mb-4 lg:text-3xl">
            Pengumuman
          </h1>
          <span className="h-1 w-52 bg-[#FDC89E] lg:h-2"></span>
        </div>
        <article className="grid grid-cols-1 gap-y-4">
          <div className="px-1 pb-4">
            <Link href={"/kelulusan"}>
              <p className="underline-from-center border-b-[1px] text-xl font-semibold text-purple-800 transition-all">
                Kelulusan Kursus
              </p>
            </Link>
            <p>
              {"Berita kelulusan peserta kursus SAP, CISCO, & ORACLE".toUpperCase()}
            </p>
          </div>
          <div className="px-1 pb-4">
            <Link
              href={
                "https://www.linkedin.com/feed/update/urn:li:activity:7033741658588413952/?utm_source=share&utm_medium=member_desktop"
              }
            >
              <p className="underline-from-center border-b-[1px] text-xl font-semibold text-purple-800 transition-all">
                Open Recruitment
              </p>
            </Link>
            <p>OPEN RECRUITMENT ASISTEN LPUG 2023</p>
          </div>
        </article>
      </div>
    </section>
  );
}

export default Pengumuman;
