"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Image from "next/image";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  lazyLoad: true,
  fade: true,
};

const fadeInFromLeft = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.9,
    },
  },
};

const fadeInFromRight = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2,
      duration: 0.9,
    },
  },
};

const Tentang = () => {
  return (
    <section
      className="body-font scroll-mt-96 lg:scroll-mt-24 overflow-hidden text-gray-600"
      id="tentang"
    >
      <div>
        <div className="flex flex-row">
          <div className="flex flex-col">
            <Image
              width={100}
              height={100}
              src="/image/vector4.png"
              className="left-0 h-auto w-11 lg:w-28"
              alt="vector flower"
            />
          </div>
          <div className="mx-0 mb-8 mt-14 flex flex-col lg:mx-8 lg:mt-24">
            <h1 className="mb-1 text-xl font-bold lg:mb-4 lg:text-3xl">
              Tentang
            </h1>
            <span className="ml-6 h-1 w-7 rounded-none bg-orange-100 lg:h-2 lg:w-14"></span>
          </div>
        </div>
        <div className="mx-8 mb-0 flex flex-wrap justify-between lg:mx-24 lg:mb-10">
          <motion.div
            initial={"initial"}
            whileInView={"animate"}
            variants={fadeInFromLeft}
            viewport={{
              once: true,
            }}
            className="flex w-full items-center justify-center lg:-mx-14 lg:w-1/2"
          >
            <Image
              width={624}
              height={901}
              className="mb-6 h-80 w-auto object-cover object-left lg:h-auto lg:w-full"
              src="/image/tentang.png"
              alt="content"
            />
          </motion.div>

          <motion.div
            initial={"initial"}
            whileInView={"animate"}
            variants={fadeInFromRight}
            viewport={{
              once: true,
            }}
            className="w-full lg:w-1/2"
          >
            <Slider {...settings}>
              <div className="h-full rounded-xl border-2 border-gray-100 bg-white p-4 lg:p-12">
                <p className="text-left text-sm leading-loose tracking-wider lg:text-xl">
                  Lembaga Pengembangan Universitas Gunadarma merupakan unit
                  struktural yang berada di tingkat universitas. Tugas dan
                  tanggung jawabnya adalah melakukan koordinasi pelaksanaan
                  kegiatan pendidikan dan pelatihan berbasis TIK yang
                  diperuntukkan untuk mahasiswa di luar kegiatan perkuliahan di
                  kelas, atau untuk masyarakat umum dengan berkoordinasi dengan
                  unit terkait.
                </p>
              </div>
              <div className="h-full rounded-xl border-2 border-gray-100 bg-white p-4 lg:p-12">
                <p className="text-left text-sm leading-loose tracking-wider lg:text-xl">
                  Lembaga Pengembangan ini membawahi lembaga pengembangan di
                  tingkat fakultas, yaitu Lembaga Pengembangan Komputerisasi
                  (LePKom) , Lembaga Pengembangan Teknologi (LePTek), Lembaga
                  Pengembangan Manajemen dan AKuntansi (LePMA), Lembaga
                  Pengembangan Sastra dan Bahasa (LePSaB), Lembaga Pengembangan
                  Teknik Sipil dan Perencanaan (LePTSP), Lembaga Pengembangan
                  Psikologi (LePPsi). Selain kegiatan pelatihan bersertifikasi
                  nasional, lembaga pengembangan juga melaksanakan kegiatan
                  pelatihan bersertifikat Regional dan Internasional. Pelatihan
                  bersertifikat Regional yang diselenggarakan adalah pelatihan
                  Value Plus, sedangkan pelatihan bersertifikat Internasional
                  adalah Oracle, Cisco, Java dan SAP.
                </p>
              </div>
            </Slider>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
