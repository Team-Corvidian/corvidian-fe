import Image from "next/image";
import Link from "next/link";

export const MobileCard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-[linear-gradient(180deg,#FFFFFF_0%,#C5CED5_100%)] rounded-3xl overflow-hidden max-h-[220px]">
        <Image
          src="/hero/modem-mobile.png"
          alt="Modem"
          width={450}
          height={400}
          quality={100}
          className="rounded-t-3xl -translate-y-25 translate-x-20"
        />
        <div className="px-6 py-6 -translate-y-50 max-[330px]:-translate-y-40 max-[376px]:-translate-y-45">
          <p className="text-corvidian-1 font-normal text-[10px] mb-4">
            Konsultasikan supaya bisnis Anda <br /> nggak kena risiko downtime.
          </p>
          <p className="text-corvidian-1 font-extrabold text-md">
            Sistem IT sering error? <br /> Jaringan lambat?
          </p>
          <div className="flex justify-end">
            <Link
              href="/service"
              className="text-corvidian-1 font-bold text-xs underline cursor-pointer"
            >
              Pelajari lebih lanjut
            </Link>
          </div>
        </div>
      </div>

      <div className="bg-[linear-gradient(91.4deg,#1D1F26_1.19%,#1D1F26_53.64%,#1578CB_157.04%)] rounded-3xl px-6 py-6">
        <p className="text-white font-extrabold text-md mb-4">
          Mau buat aplikasi berkualitas dan terjangkau? Konsultasikan dengan
          kami
        </p>
        <Link
          href="/service"
          className="text-white font-bold text-[10px] underline"
        >
          Pelajari lebih lanjut
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-[linear-gradient(339.7deg,#FFFFFF_-14%,#C5CED5_94.78%)] rounded-3xl px-4 pt-4 pb-4 flex flex-col justify-between max-h-[304px]">
          <div>
            <h3 className="font-extrabold text-sm bg-[linear-gradient(90.58deg,#02C2B3_-13.4%,#1D1F26_25.6%,#1D1F26_63.53%,#1578CB_116.56%)] bg-clip-text text-transparent mb-2">
              Website kamu terlihat kurang profesional? dan lambat bikin calon
              klien kabur?
            </h3>
            <p className="text-corvidian-1 font-normal text-[10px] max-w-[135px] leading-snug">
              Saatnya buat website yang cepat, responsif, nyaman dipakai dengan
              tampilan yang lebih meyakinkan dan dipercaya klien.
            </p>
          </div>

          <Link
            href="/service"
            className="text-corvidian-1 font-bold text-[10px] underline self-end"
          >
            Pelajari lebih lanjut
          </Link>
        </div>

        <div
          className="bg-[linear-gradient(18.73deg,#02C2B3_-3.23%,#1D1F26_13.72%,#1D1F26_45.09%,#1578CB_88.93%)] rounded-3xl flex flex-col justify-between overflow-hidden max-h-[304px]"
        >
          <Image
            src="/hero/gradien-biru-mobile.png"
            alt="Building"
            width={400}
            height={100}
            className="w-full h-[100px] object-cover"
          />

          <div className="px-4 py-4 flex flex-col justify-between flex-grow">
            <div>
              <h3 className="text-white font-extrabold text-[15px] mb-2 leading-snug max-[350px]:text-[13px]">
                Tidak punya <br /> waktu & budget buat bangun sistem dari nol?
              </h3>
              <p className="text-white font-normal text-[10px] mb-3 leading-snug">
                Co-Build siap digunakan dalam hitungan minggu, bukan bulan.
              </p>
            </div>

            <Link
              href="/service"
              className="text-white font-bold text-[10px] underline self-end"
            >
              Pelajari lebih lanjut
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
