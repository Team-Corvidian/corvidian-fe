import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section>
      <div className="lg:bg-white bg-[#F4F4F4]">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
          <div>
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-2xl md:text-3xl lg:text-5xl xl:text-5xl font-extrabold text-corvidian-1 leading-tight">
                Tingkatkan Bisnismu dengan Solusi Digital{" "}
                <br className="hidden md:block" /> yang{` `}
                <span className="text-corvidian-4">
                  Tepat dan Terintegrasi!!
                </span>
              </h1>

              <p className="text-sm md:text-base lg:text-lg text-corvidian-1 leading-relaxed max-w-2xl font-medium">
                Corvidian siap membantu dari infrastruktur IT, pembuatan
                website, hingga aplikasi bisnis, semua demi operasional lebih
                cepat, aman, dan efisien.
              </p>

              <div>
                <Button
                  asChild
                  size="lg"
                  className="bg-corvidian-2 hover:bg-corvidian-5 text-white hover:text-corvidian-1 font-bold my-4 relative z-50 cursor-pointer max-md:mt-8 max-md:max-w-[151px]"
                >
                  <Link href="/konsultasi">Konsultasi Gratis</Link>
                </Button>
              </div>

              <div className="hidden md:block relative w-full">
                <Image
                  src="/hero/hero.png"
                  alt="Hero Image"
                  width={1277}
                  height={370}
                  quality={100}
                  className="w-full h-auto -translate-y-1/5 z-20"
                />
              </div>

              <div className="md:hidden relative w-full flex justify-end">
                <Image
                  src="/hero/monitor.png"
                  alt="Gradient Blue"
                  width={286}
                  height={222}
                  quality={100}
                  className="max-w-[220px] max-h-[222px] -translate-y-30"
                />
              </div>
              <div className="md:hidden relative w-full flex justify-end">
                <Image
                  src="/hero/phone.png"
                  alt="Phone"
                  width={150}
                  height={147}
                  quality={100}
                  className="w-auto h-auto -translate-y-30"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full md:hidden flex justify-center p-8">
        <Image
          src="/hero/hero-mobile.png"
          alt="People Talking"
          width={380}
          height={216}
          quality={100}
          className="w-full max-w-md h-auto"
        />
      </div>
    </section>
  );
};
