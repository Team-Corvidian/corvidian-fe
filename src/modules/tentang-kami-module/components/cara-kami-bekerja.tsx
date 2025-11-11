import React from "react";

const CaraKamiBekerja = () => {
  return (
    <section className="pb-12">
      <div className="relative mt-10 w-full max-w-screen-xl px-4 sm:px-6 lg:px-12 z-10 mb-10 mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center pb-12 justify-center">
          <div className="w-full lg:w-auto max-w-[341px] space-y-4">
            <h1 className="text-[32px] font-extrabold text-black leading-tight max-lg:text-center">
              Cara Kami Bekerja
            </h1>
            <p className="text-[14px] text-black leading-relaxed max-lg:text-center">
              Bagi Corvidian, Think Fast, Fly High bukan sekadar jargon,
              melainkan landasan cara kami berpikir, mengambil keputusan, dan
              memberikan solusi.
            </p>
          </div>
          <div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4 items-end max-md:gap-2">
                <div className="px-8 py-3 rounded-xl shadow-lg bg-white max-w-[176px] max-md:max-w-[110px] max-h-[53px] flex items-center justify-center">
                  <span
                    className="text-[32px] font-extrabold max-md:text-[18px]"
                    style={{ color: "#1578CB" }}
                  >
                    Clarity
                  </span>
                </div>
                <div className="px-8 py-3 rounded-xl shadow-lg bg-white max-w-[186px] max-h-[34px] flex items-center justify-center">
                  <span
                    className="text-[20px] font-extrabold whitespace-nowrap max-md:text-[18px]"
                    style={{ color: "#1578CB" }}
                  >
                    Human-Friendly
                  </span>
                </div>
              </div>

              <div className="flex gap-4 items-center max-md:gap-2">
                <div className="px-8 py-3 rounded-xl shadow-lg bg-white max-w-[134px] max-h-[67px] flex items-center justify-center">
                  <span
                    className="text-[34px] font-extrabold max-md:text-[18px]"
                    style={{ color: "#1578CB" }}
                  >
                    Agile
                  </span>
                </div>
                <div className="px-8 py-3 rounded-xl shadow-lg bg-white max-w-[233px] max-h-[57px] flex items-center justify-center">
                  <span
                    className="text-[28px] font-extrabold max-md:text-[18px]"
                    style={{ color: "#1578CB" }}
                  >
                    Collaboration
                  </span>
                </div>
              </div>

              <div className="flex gap-4 justify-center max-md:gap-2">
                <div className="px-8 py-3 rounded-xl shadow-lg bg-white max-w-[119px] max-h-39px] flex items-center justify-center">
                  <span
                    className="text-[20px] font-extrabold max-md:text-[18px]"
                    style={{ color: "#1578CB" }}
                  >
                    Impact
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaraKamiBekerja;
