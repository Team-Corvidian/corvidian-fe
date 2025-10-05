import Image from "next/image";
import Link from "next/link";

export const DesktopCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr_1fr] max-lg:grid-cols-[1.4fr_1.2fr_1fr] xl:grid-cols-[2.1fr_1.4fr_1fr] 2xl:grid-cols-[2.4fr_1.4fr_1fr] gap-6 lg:max-h-[480px] max-lg:max-h-[300px]">
      <div className="flex flex-col gap-6">
        <div className="bg-gradient-to-br from-corvidian-3 to-white rounded-3xl lg:max-h-[500px] max-lg:w-full overflow-hidden">
          <Image
            src="/hero/modem.png"
            alt="Modem"
            width={633}
            height={307}
            className="lg:w-full h-[307px] rounded-t-3xl max-lg:w-[270px] max-lg:h-[170px] max-lg:ml-auto max-lg:-translate-y-3"
          />
          <div className="px-8 -mt-28 md:-translate-y-7 max-lg:-mt-14">
            <p className="text-corvidian-1 font-normal text-sm max-lg:text-[10px]">
              Konsultasikan supaya bisnis Anda nggak <br /> kena risiko
              downtime.
            </p>
            <div className="flex justify-between h-[80px] lg:h-[76px] items-end md:h-[40px]">
              <p className="text-corvidian-1 font-extrabold 2xl:text-2xl lg:text-xl max-lg:text-[11px]">
                Sistem IT sering error?
                <br />
                Jaringan lambat?
              </p>
              <p className="text-corvidian-1 font-bold text-md underline cursor-pointer max-lg:text-sm max-lg:text-[11px]">
                Pelajari lebih lanjut
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[linear-gradient(91.4deg,#1D1F26_1.19%,#1D1F26_53.64%,#1578CB_157.04%)] rounded-3xl p-8 max-h-[154px]">
          <div className="flex flex-col justify-between">
            <p className="text-corvidian-3 font-extrabold text-2xl lg:text-lg whitespace-nowrap 2xl:text-3xl max-lg:text-[10px]">
              Mau buat aplikasi berkualitas dan terjangkau?
              <br />
              Konsultasikan dengan kami
            </p>
            <p className="text-corvidian-5 font-bold text-md underline text-right cursor-pointer max-lg:text-[10px] max-lg:mt-2">
              Pelajari lebih lanjut
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[linear-gradient(339.7deg,#FFFFFF_-14%,#C5CED5_94.78%)] rounded-3xl p-8 max-lg:p-4">
        <div className="flex flex-col justify-between lg:h-full min-h-[400px] max-lg:min-h-[200px]">
          <div>
            <h3 className="font-extrabold max-lg:text-sm lg:text-xl text-2xl 2xl:text-3xl mb-4 bg-[linear-gradient(90.58deg,#02C2B3_-13.4%,#1D1F26_25.6%,#1D1F26_63.53%,#1578CB_116.56%)] bg-clip-text text-transparent">
              Website kamu terlihat kurang profesional? <br /> dan lambat bikin
              calon <br /> klien kabur?
            </h3>
            <p className="text-corvidian-1 font-normal text-sm 2xl:text-lg mt-8 max-lg:text-[10px]">
              Saatnya buat website yang cepat, responsif, nyaman dipake dengan
              tampilan yang lebih meyakinkan dan dipersi aja.
            </p>
          </div>
          <Link
            href="/service"
            className="text-corvidian-1 font-bold text-lg underline text-left translate-y-2 max-lg:text-[10px] max-lg:pt-20"
          >
            Pelajari lebih lanjut
          </Link>
        </div>
      </div>

      <div className="bg-[linear-gradient(18.73deg,#02C2B3_-3.23%,#1D1F26_13.72%,#1D1F26_45.09%,#1578CB_88.93%)] rounded-3xl overflow-hidden">
        <div className="relative h-full max-h-[480px] flex flex-col">
          <Image
            src="/hero/gradien-biru.png"
            alt="Building"
            width={263}
            height={200}
            className="w-full max-h-[300px] max-lg:max-h-[100px] rounded-t-3xl"
          />
          <div className="px-8 max-lg:px-6 flex flex-col justify-between flex-grow -translate-y-16 max-lg:-translate-y-4">
            <div>
              <h3 className="text-white font-extrabold text-2xl lg:text-xl mb-4 max-lg:text-sm">
                Tidak punya <br className="2xl:block hidden" /> waktu & budget{" "}
                <br /> buat bangun sistem dari nol?
              </h3>
              <p className="text-white font-normal text-sm 2xl:text-md mb-8 max-lg:text-[10px]">
                Co-Pilot siap digunakan dalam hitungan minggu, bukan bulan.
              </p>
            </div>
            <p className="text-white font-bold text-md underline text-left cursor-pointer lg:pt-11 xl:pt-3 max-lg:text-[10px] max-lg:mb-4">
              Pelajari lebih lanjut
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};