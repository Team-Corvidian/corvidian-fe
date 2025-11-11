import React from "react";
import Image from "next/image";

const Solusi = () => {
  const solutions = [
    {
      id: 1,
      title: "IT Infrastructure",
      description:
        "Jaringan, keamanan, dan pengaturan sistem untuk menjaga kelancaran operasional.",
      image: "/tentangkami/kabel.png",
      position: "left-top",
      gradient: "linear-gradient(to bottom, #FFFFFF, #C5CED5)",
    },
    {
      id: 2,
      title: "Web Design & Development",
      description:
        "Aplikasi kustom dan alat otomasi yang menyederhanakan kompleksitas.",
      position: "left-bottom",
      gradient: "linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)",
    },
    {
      id: 3,
      title: "Digital Software Solutions",
      description:
        "Website yang memadukan fungsi dan pengalaman pengguna terbaik.",
      position: "right-top",
      gradient: "linear-gradient(to right, #02C2B3, #1D1F26, #1D1F26, #1578CB)",
    },
    {
      id: 4,
      title: "CoBuild",
      description:
        "Layanan pengembangan kolaboratif bagi klien yang ingin membangun solusi bersama kami dengan memanfaatkan perangkat lunak siap pakai.",
      position: "right-bottom",
      gradient: "linear-gradient(to bottom, #FFFFFF, #C5CED5)",
    },
  ];

  return (
    <section className="w-full relative">
      <div className="relative py-8 md:py-12 lg:py-16 z-10 mx-auto px-4 sm:px-6 lg:px-12">
        <div className="space-y-4 lg:space-y-6 w-full max-w-[1000px] mx-auto">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold text-corvidian-1 leading-tight max-lg:text-center">
            Solusi
          <span className="text-[#2A77BD] mx-1">Corvidian.</span>
          </h1>
          <div className="w-full lg:w-3/4">
            <p className="text-xs md:text-sm lg:text-[14px] text-corvidian-1 max-lg:text-center">
              Kami rancang untuk menjawab tantangan dan mengubahnya menjadi
              peluang
            </p>
          </div>

          <div className="hidden lg:grid grid-cols-2 gap-6 mt-8">
            <div className="flex flex-col gap-6">
              <div
                className="rounded-3xl w-full h-80 flex flex-col justify-between overflow-hidden"
                style={{
                  background: solutions[0].gradient,
                }}
              >
                <div className="flex-1 flex items-start justify-end pt-4">
                  <Image
                    src={solutions[0].image!}
                    alt={solutions[0].title}
                    width={300}
                    height={150}
                    className="object-contain scale-x-[-1] w-auto h-auto max-w-full"
                  />
                </div>
                <div className="px-6 -translate-y-10">
                  <h3 className="text-xl xl:text-2xl font-bold text-black mb-2">
                    {solutions[0].title}
                  </h3>
                  <p className="text-xs xl:text-sm text-black">
                    {solutions[0].description}
                  </p>
                </div>
              </div>

              <div
                className="rounded-3xl p-6 flex flex-col justify-center w-full h-36"
                style={{
                  background: solutions[1].gradient,
                }}
              >
                <div>
                  <h3 className="text-xl xl:text-2xl font-bold text-white mb-2">
                    {solutions[1].title}
                  </h3>
                  <p className="text-xs xl:text-sm text-white">
                    {solutions[1].description}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div
                className="rounded-3xl p-6 flex flex-col justify-center w-full h-56"
                style={{
                  background: solutions[2].gradient,
                }}
              >
                <div>
                  <h3 className="text-xl xl:text-2xl font-bold text-white mb-2">
                    {solutions[2].title}
                  </h3>
                  <p className="text-xs xl:text-sm text-white">
                    {solutions[2].description}
                  </p>
                </div>
              </div>

              <div
                className="rounded-3xl p-6 flex flex-col justify-end w-full h-60"
                style={{
                  background: solutions[3].gradient,
                }}
              >
                <div>
                  <h3 className="text-xl xl:text-2xl font-bold text-black mb-2">
                    {solutions[3].title}
                  </h3>
                  <p className="text-xs xl:text-sm text-black">
                    {solutions[3].description}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex lg:hidden flex-col gap-4 mt-6 px-4">
            <div
              className="rounded-2xl flex flex-col justify-between w-full overflow-hidden"
              style={{
                minHeight: "200px",
                background: solutions[0].gradient,
              }}
            >
              <div className="flex-1 flex items-start justify-end pt-2">
                <Image
                  src={solutions[0].image!}
                  alt={solutions[0].title}
                  width={180}
                  height={90}
                  className="object-contain scale-x-[-1] w-auto h-auto max-w-[60%]"
                />
              </div>
              <div className="p-4">
                <h3 className="text-base md:text-lg font-bold text-black mb-1">
                  {solutions[0].title}
                </h3>
                <p className="text-xs md:text-sm text-black">
                  {solutions[0].description}
                </p>
              </div>
            </div>

            <div
              className="rounded-2xl p-4 flex flex-col justify-center w-full"
              style={{
                minHeight: "120px",
                background: solutions[1].gradient,
              }}
            >
              <div>
                <h3 className="text-base md:text-lg font-bold text-white mb-1">
                  {solutions[1].title}
                </h3>
                <p className="text-xs md:text-sm text-white">
                  {solutions[1].description}
                </p>
              </div>
            </div>

            <div
              className="rounded-2xl p-4 flex flex-col justify-center w-full"
              style={{
                minHeight: "140px",
                background: solutions[2].gradient,
              }}
            >
              <div>
                <h3 className="text-base md:text-lg font-bold text-white mb-1">
                  {solutions[2].title}
                </h3>
                <p className="text-xs md:text-sm text-white">
                  {solutions[2].description}
                </p>
              </div>
            </div>

            <div
              className="rounded-2xl p-4 flex flex-col justify-center w-full"
              style={{
                minHeight: "160px",
                background: solutions[3].gradient,
              }}
            >
              <div>
                <h3 className="text-base md:text-lg font-bold text-black mb-1">
                  {solutions[3].title}
                </h3>
                <p className="text-xs md:text-sm text-black">
                  {solutions[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Solusi;
