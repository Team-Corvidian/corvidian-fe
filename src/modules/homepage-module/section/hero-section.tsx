import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GradientBar } from "../components/hero/gradient-bar";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section>
      <div className="lg:bg-white max-sm:bg-[#F4F4F4] max-sm:rounded-b-[40px] max-sm:max-h-[460px]">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
          <div>
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-3xl max-sm:max-w-[330px] md:text-3xl lg:text-5xl xl:text-5xl font-extrabold text-corvidian-1 leading-tight max-[350px]:text-2xl max-[350px]:!max-w-[250px]">
                Tingkatkan Bisnismu dengan Solusi Digital{" "}
                <br className="hidden md:block" /> yang{" "}
                <span className="text-corvidian-4">
                  Tepat dan Terintegrasi!
                </span>
              </h1>

              <p className="text-sm max-sm:max-w-[277px] md:text-base lg:text-lg text-corvidian-1 leading-relaxed max-w-2xl font-medium">
                Corvidian siap membantu dari infrastruktur IT, pembuatan
                website, hingga aplikasi bisnis, semua demi operasional lebih
                cepat, aman, dan efisien.
              </p>

              <div>
                <Button
                  asChild
                  size="lg"
                  className="bg-corvidian-2 hover:bg-corvidian-5 text-white hover:text-corvidian-1 font-bold md:my-4 max-md:-translate-y-5 relative z-50 cursor-pointer max-md:mt-8 max-md:max-w-[151px] max-[350px]:!max-w-[130px] max-[350px]:!text-[12px] max-[350px]:!my-10"
                >
                  <Link href="/konsultasi">Konsultasi Gratis</Link>
                </Button>
              </div>
              <div className="max-sm:block hidden">
                <Image
                  src="/hero/monitor-mobile.png"
                  alt="Monitor"
                  width={159}
                  height={160}
                  quality={100}
                  className="md:hidden block ml-auto -translate-x-1 z-0 relative max-[400px]:translate-x-4 -translate-y-30"
                />
                <Image
                  src="/hero/hp-mobile.png"
                  alt="Hp"
                  width={48}
                  height={105}
                  quality={100}
                  className="md:hidden block ml-auto -translate-x-35 z-0 relative max-[400px]:-translate-x-30 -translate-y-50"
                />
              </div>

              <GradientBar className="p-40 max-xl:p-25 max-xl:hidden block relative">
                <Image
                  src="/hero/ngobrol.png"
                  alt="Orang ngobrol"
                  width={800}
                  height={430}
                  quality={100}
                  className="absolute left-0 -top-28 object-contain"
                />
                <Image
                  src="/hero/monitor.png"
                  alt="Monitor dashboard"
                  width={420}
                  height={280}
                  quality={100}
                  className="absolute top-0 right-0 object-contain z-30 max-w-[45%] -translate-y-1/4 xl:translate-x-28 xl:-translate-y-35"
                />
                <Image
                  src="/hero/phone.png"
                  alt="Phone app"
                  width={304}
                  height={296}
                  quality={100}
                  className="absolute right-40 bottom-0 object-contain z-40 xl:translate-y-16"
                />
              </GradientBar>

              <Image
                src="/hero/hero.png"
                alt="Ilustrasi"
                width={700}
                height={400}
                quality={100}
                className="block w-full max-sm:hidden xl:hidden mx-auto lg:-translate-y-22 max-lg:-translate-y-18"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="relative h-64 max-sm:rounded-b-[40px] overflow-visible sm:hidden block">
        <Image
          src="/hero/ngobrol-mobile.png"
          alt="Ilustrasi"
          quality={100}
          fill
          sizes="100vw"
          className="object-contain -top-10 max-w-[333px] mx-auto"
        />
      </div>
    </section>
  );
};
