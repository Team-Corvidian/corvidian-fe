"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { submitSubscription } from "@/lib/api/customer-api";

export const Footer = () => {
  const [isLarge, setIsLarge] = useState(false);
  const [isMedium, setIsMedium] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = async () => {
    if (!email) {
      toast.error("Masukkan email");
      return;
    }
    const result = await submitSubscription({ email, source: "footer" });
    if (!result.ok) {
      toast.error(result.error || "Gagal subscribe");
      return;
    }
    toast.success(result.data?.message || "Berhasil subscribe");
    setEmail("");
  };

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsLarge(width >= 1024);
      setIsMedium(width >= 768 && width < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const blueZ = isLarge ? 30 : isMedium ? 25 : 10;
  const darkZ = isLarge ? 20 : isMedium ? 15 : 10;
  const grayZ = isLarge ? 10 : isMedium ? 5 : 10;
  const contentZ = isLarge || isMedium ? 35 : 20;

  return (
    <footer className="relative overflow-hidden w-full  max-w-[1550px]">
      {/* Background vectors for large screens with proper z-index */}
      <div className="md:block hidden">
        {/* Blue background - always top layer on medium and large screens */}
        <div
          className="absolute top-[19.35px] w-[900px] h-[500px] left-[-100px] bg-no-repeat bg-cover bg-center"
          style={{
            zIndex: blueZ,
            backgroundImage: "url('/footer/footer_blue.png')",
          }}
        />
        <div
          className="absolute top-[30px] left-[20%] right-0 h-[450px] bg-[#1D1F26]"
          style={{
            zIndex: darkZ,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%)",
          }}
        />
        <div
          className="absolute top-[200px] left-0 right-0 h-[400px] bg-[#B1BCC3]"
          style={{
            zIndex: grayZ,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%)",
          }}
        />
      </div>
      
      {/* Background vectors for large screens with proper z-index for mobile */}

      <div className="block md:hidden">
        {/* Blue background - always top layer on medium and large screens */}
        <div 
          className="absolute  w-[170%] h-1/2  bg-no-repeat bg-cover bg-center" 
          style={{ 
            zIndex: 10,
            backgroundImage: "url('/footer/footer_blue.png')",
          }}
        />
        <div
          className="absolute top-1/2 w-full h-1/2 bg-[#1D1F26]"
          style={{
            zIndex: 20,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        />
        <div
          className="absolute bottom-2/5 w-[220px] right-[-130px] h-2/5 bg-[#B1BCC3]"
          style={{
            zIndex: 5,
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 15% 100%)",
          }}
        />
      </div>


      <div
        className="relative w-full px-4 pt-8 pb-8"
        style={{ zIndex: contentZ }}
      >
        <div className="max-w-[1388px]  mx-[50px] lg:mx-auto">
          <div className="flex flex-col mt-[60px] lg:mt-0 lg:flex-row gap-4 lg:gap-8">
            <div className="w-full lg:w-1/2 text-white">
              <div className="mb-6 flex justify-start">
                <Image
                  src="/footer/CordovaWhite.png"
                  alt="Corvidian Logo"
                  width={190}
                  height={38}
                  className="lg:mt-[100px]"
                />
              </div>
              <div className="mt-6 mx-auto lg:mx-0 max-w-[362px]">
                <h3 className="font-bold text-[12px] mb-[10px] lg:mb-2 ">Kantor</h3>
                <p className="font-normal text-[12px] leading-tight">
                  MUC Building, Jl. TB Simatupang No.15, RT.10/RW.3, Tj. Bar.,
                  Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota
                  Jakarta 12530
                </p>
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-white lg:mt-[100px]">
              <div className="flex flex-col gap-4 max-w-[600px] mx-auto lg:mx-0">
                <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 my-[10px] lg:my-0">
                  <p className="text-[12px] text-[#F4F4F4] lg:w-1/2">
                    Dapatkan info penawaran menarik lebih awal dengan{" "}
                    <span className="font-bold">
                      cantumkan email kamu di samping!
                    </span>
                  </p>
                  <div className="w-4/5 lg:w-1/2 mt-[5px] lg:mt-0">
                    <input
                      type="email"
                      placeholder="Email"
                      className="bg-white text-black px-6 py-2 rounded-4xl w-full h-[44px]"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
                    />
                  </div>
                </div>

                <div className="flex flex-col mt-[25px] lg:mt-0 lg:flex-row gap-6 lg:gap-4">
                  <div className="w-full lg:w-1/2">
                    <div className="flex gap-4 lg:gap-8">
                      <div className="flex-1">
                        <ul className="space-y-1">
                          <li>
                            <Link href="#" className="text-[12px]">
                              Produk & Layanan
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="text-[12px]">
                              Solusi
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="text-[12px]">
                              Sumber Daya
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="text-[12px]">
                              Harga
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="text-[12px]">
                              Tentang Kami
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="flex-1">
                        <ul className="space-y-1">
                          <li>
                            <Link href="#" className="text-[12px]">
                              Testimoni Klien
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="text-[12px]">
                              Telpon Resmi
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="text-[12px]">
                              Klien Kami
                            </Link>
                          </li>
                          <li>
                            <Link href="#" className="text-[12px]">
                              Portofolio Kami
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2">
                    <p className="text-[12px] mb-[8px]">
                      Ingin bertanya lebih rinci? hubungi kami melalui kanal
                      berikut:
                    </p>
                    <div className="mb-[8px] space-y-1">
                      <div className="flex flex-row gap-[6px] items-center">
                        <Image
                          src="/footer/office.png"
                          alt="Office Icon"
                          width={15}
                          height={15}
                        />
                        <p className="text-[12px] font-bold">
                          ask@corvidian.io
                        </p>
                      </div>
                      <div className="flex flex-row gap-[6px] items-center">
                        <Image
                          src="/footer/telephone.png"
                          alt="Telephone Icon"
                          width={15}
                          height={15}
                        />
                        <p className="text-[12px] font-bold">
                          +62 812 2191 5478
                        </p>
                      </div>
                    </div>

                    <div>
                      <p className="text-[12px] mb-[8px]">
                        Ikut media sosial kami{" "}
                        <span className="font-bold">@corvidian</span>
                      </p>
                      <div className="flex space-x-4">
                        <Link href="#">
                          <div className="bg-[#000000] w-8 h-8 flex items-center justify-center rounded-full">
                            <Image
                              src="/footer/facebook.png"
                              alt="Facebook Icon"
                              width={32}
                              height={32}
                            />
                          </div>
                        </Link>
                        <Link href="#">
                          <div className="bg-[#000000] w-8 h-8 flex items-center justify-center rounded-full">
                            <Image
                              src="/footer/linkedin.png"
                              alt="LinkedIn Icon"
                              width={32}
                              height={32}
                            />
                          </div>
                        </Link>
                        <Link href="#">
                          <div className="bg-[#000000] w-8 h-8 flex items-center justify-center rounded-full">
                            <Image
                              src="/footer/instagram.png"
                              alt="Instagram Icon"
                              width={32}
                              height={32}
                            />
                          </div>
                        </Link>
                        <Link href="#">
                          <div className="bg-[#000000] w-8 h-8 flex items-center justify-center rounded-full">
                            <Image
                              src="/footer/youtube.png"
                              alt="YouTube Icon"
                              width={32}
                              height={32}
                            />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-[12px] font-extralight text-white">
              | www.corvidian.io | © Corvidian. All right reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
