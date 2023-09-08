import Link from 'next/link';

function Pengumuman() {
  return (
    <section className="overflow-hidden text-gray-600 body-font scroll-mt-24" id="pengumuman">
      <div className="mx-10 my-8 lg:mx-24">
        <div className="flex flex-col mt-16 mb-10">
          <h1 className="mb-1 text-xl font-bold lg:mb-4 lg:text-3xl">
            Pengumuman
          </h1>
          <span className="h-1 ml-8 bg-orange-100 rounded-none w-14 lg:ml-4 lg:h-2"></span>
        </div>
        <article className='grid grid-cols-1 gap-y-4'>
          <div className='px-1 pb-4'>
            <Link href={'/kelulusan'}>
              <p
                className='font-semibold text-xl text-purple-800 border-b-[1px] transition-all underline-from-center'
              >
                Kelulusan Kursus
              </p>
            </Link>
            <p>{'Berita kelulusan peserta kursus SAP, CISCO, & ORACLE'.toUpperCase()}</p>
          </div>
          <div className='px-1 pb-4'>
            <Link
              href={'https://www.linkedin.com/feed/update/urn:li:activity:7033741658588413952/?utm_source=share&utm_medium=member_desktop'}
            >
              <p
                className='font-semibold text-xl text-purple-800 border-b-[1px] transition-all underline-from-center'
              >
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
