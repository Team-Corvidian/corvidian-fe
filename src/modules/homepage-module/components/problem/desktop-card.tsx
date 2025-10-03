import Image from "next/image";
import Link from "next/link";

export const DesktopCard = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="flex flex-col gap-6">
        <div className="bg-gradient-to-br from-corvidian-3 to-white rounded-3xl">
          <Image
            src="/hero/modem.png"
            alt="Modem"
            width={633}
            height={307}
            className="w-full h-auto rounded-t-3xl"
          />
          <div className="px-8 -mt-20 ">
            <p className="text-corvidian-1 font-normal text-sm mb-4">
              Konsultasikan supaya bisnis Anda nggak <br /> kena risiko
              downtime.
            </p>
            <div className="flex justify-between h-[80px]">
              <p className="text-corvidian-1 font-extrabold text-xl">
                Sistem IT sering error?
                <br />
                Jaringan lambat?
              </p>
              <p className="text-corvidian-1 font-bold text-sm underline translate-y-8 cursor-pointer">
                Pelajari lebih lanjut
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[linear-gradient(91.4deg,#1D1F26_1.19%,#1D1F26_53.64%,#1578CB_157.04%)] rounded-3xl p-8 max-h-[154px]">
          <div className="flex flex-col justify-between">
            <p className="text-white font-extrabold text-lg lg:text-lg whitespace-nowrap">
              Mau buat aplikasi berkualitas dan terjangkau?
              <br />
              Konsultasikan dengan kami
            </p>
            <p className="text-white font-bold text-sm underline text-right cursor-pointer">
              Pelajari lebih lanjut
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[linear-gradient(339.7deg,#FFFFFF_-14%,#C5CED5_94.78%)] rounded-3xl p-8">
        <div className="flex flex-col justify-between h-full min-h-[400px]">
          <div>
            <h3 className="font-extrabold text-2xl 2xl:text-3xl mb-4 bg-[linear-gradient(90.58deg,#02C2B3_-13.4%,#1D1F26_25.6%,#1D1F26_63.53%,#1578CB_116.56%)] bg-clip-text text-transparent">
              Website kamu terlihat kurang profesional? <br /> dan lambat
              bikin calon <br /> klien kabur?
            </h3>
            <p className="text-corvidian-1 font-normal text-sm 2xl:text-lg">
              Saatnya buat website yang cepat, responsif, nyaman dipake
              dengan tampilan yang lebih meyakinkan dan dipersi aja.
            </p>
          </div>
          <Link
            href="/service"
            className="text-corvidian-1 font-bold text-sm underline text-left"
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
            className="w-full max-h-[300px] rounded-t-3xl"
          />
          <div className="p-8 flex flex-col justify-between flex-grow lg:-mt-40">
            <div>
              <h3 className="text-white font-extrabold text-xl 2xl:text-3xl mb-4">
                Tidak punya waktu & budget <br /> buat bangun sistem dari
                nol?
              </h3>
              <p className="text-white font-normal text-sm 2xl:text-xl mb-4">
                Co-Pilot siap digunakan dalam hitungan minggu, bukan bulan.
              </p>
            </div>
            <p
              className="text-white font-bold text-sm underline text-left cursor-pointer"
            >
              Pelajari lebih lanjut
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};