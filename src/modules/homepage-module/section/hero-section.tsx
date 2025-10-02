import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const HeroSection = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div>
          
          <div className="space-y-4 lg:space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-extrabold text-corvidian-1 leading-tight whitespace-nowrap">
              Tingkatkan Bisnismu dengan Solusi Digital <br /> yang{` `}
              <span className="text-corvidian-4">Tepat dan Terintegrasi!!</span>
            </h1>
            
            <p className="text-base sm:text-lg text-corvidian-1 leading-relaxed max-w-2xl font-medium">
              Corvidian siap membantu dari infrastruktur IT, pembuatan website, hingga aplikasi bisnis, semua demi operasional lebih cepat, aman, dan efisien.
            </p>
            
            <div>
              <Button 
                asChild
                size="lg"
                className="bg-corvidian-2 hover:bg-corvidian-5 hover:text-corvidian-1 text-corvidian-5 font-bold my-4"
              >
                <Link href="/konsultasi">
                  Konsultasi Gratis
                </Link>
              </Button>
            </div>

            <div className="relative w-full">
                <Image
                    src="/hero/hero.png"
                    alt="Hero Image"
                    width={1277}
                    height={370}
                    quality={100}
                    className="w-full h-auto rounded-br-[20px] rounded-bl-[20px] rounded-tr-[20px]"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};