import React from "react";
import Image from "next/image";

const TimKami = () => {
  const teamMembers = [
    {
      name: "Fauzan Abdurrahman",
      position: "Chief Executive Officer",
      image: "/tentangkami/people/fauzan-abdurrahman.png",
    },
    {
      name: "Budhi Kurniawan",
      position: "Chief Operating Officer",
      image: "/tentangkami/people/budhi-kurniawa.png",
    },
    {
      name: "Mahrizal",
      position: "Chief Technology Officer",
      image: "/tentangkami/people/mahrizal.png",
    },
    {
      name: "Al Faqih",
      position: "Chief Creative Officer",
      image: "/tentangkami/people/Al-Faqih.png",
    },
  ];

  return (
    <section className="pb-12">
      <div className="relative mt-[40px] mx-auto px-4 sm:px-6 lg:px-12 z-10 mb-[40px] w-full">
        <div className="space-y-4 lg:space-y-6 w-full max-w-[1000px] mx-auto">
          <h1 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-extrabold text-corvidian-1 leading-tight max-lg:text-center max-lg:items-center">
            Tim Kami
          </h1>
          <div className="w-full lg:w-3/4 xl:w-2/3 flex flex-col gap-[20px]">
            <p className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[14px] leading-relaxed max-lg:text-center max-lg:items-center">
              Corvidian terinspirasi dari keluarga burung corvidae, hewan yang
              dikenal cerdas, adaptif, dan mampu memecahkan masalah secara
              strategis. Filosofi kami, Think Fast. Fly High., mencerminkan
              kemampuan berpikir cepat untuk menemukan solusi, serta visi untuk
              membantu bisnis terbang lebih tinggi.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[90px] max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6 xl:gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              <div
                className="relative rounded-[12px] sm:rounded-[14px] md:rounded-[16px] lg:rounded-[18px] xl:rounded-[20px] overflow-hidden w-full"
                style={{
                  aspectRatio: "260/380",
                  backgroundColor: "#F4F4F4",
                }}
              >
                <div className="w-full h-full relative">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-contain pt-[30px] sm:pt-[35px] md:pt-[40px] lg:pt-[50px] xl:pt-[60px]"
                  />
                </div>
                <div
                  className="absolute bottom-2 sm:bottom-2.5 md:bottom-3 lg:bottom-3.5 xl:bottom-4 left-1/2 transform -translate-x-1/2 bg-white text-center overflow-hidden"
                  style={{
                    width: "calc(100% - 16px)",
                    maxWidth: "251px",
                    borderRadius: "8px",
                  }}
                >
                  <div className="px-2 sm:px-2.5 md:px-3 lg:px-3.5 xl:px-4 py-2 sm:py-2.5 md:py-3">
                    <h3 className="text-[10px] sm:text-[11px] md:text-[12px] lg:text-[13px] xl:text-[14px] font-bold text-black leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[8px] sm:text-[9px] md:text-[10px] lg:text-[11px] xl:text-[12px] text-black mt-0.5 sm:mt-1 leading-tight">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimKami;
