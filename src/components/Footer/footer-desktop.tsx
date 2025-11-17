"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import { submitSubscription } from "@/lib/api/customer-api";
import {
  primaryLinks,
  secondaryLinks,
  CONTACT,
  SOCIAL_ICONS,
  SUBSCRIBE,
} from "@/components/Footer/constant";

export const FooterDesktop = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async () => {
    if (!email.trim()) {
      toast.error(SUBSCRIBE.errorEmpty);
      return;
    }

    try {
      setIsSubmitting(true);
      const result = await submitSubscription({ email, source: "footer" });
      if (!result.ok) {
        toast.error(result.error || SUBSCRIBE.errorFail);
        return;
      }
      toast.success(result.data?.message || SUBSCRIBE.successMessage);
      setEmail("");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="relative mx-auto w-full max-w-[1512px] min-h-[400px] overflow-hidden">
      <div className="absolute bottom-0 right-0 z-10 h-[400px] w-[1000px] bg-corvidian-1 max-xl:w-[900px]" />

      <div className="relative z-30 container mx-auto grid h-full min-h-[420px] grid-cols-12 text-white overflow-hidden">
        <div className="col-span-6 flex pl-16 pb-12 pt-12">
          <div className="ml-36 mt-16 space-y-6 max-xl:ml-8 xl:translate-y-8">
            <div className="flex items-center">
              <Image
                src="/footer/CordovaWhite.png"
                alt="Corvidian Logo"
                width={165}
                height={30}
              />
            </div>
            <div className="max-w-xs space-y-2 text-xs leading-5">
              <p className="font-semibold uppercase tracking-wide">Kantor</p>
              <p>
                MUC Building, Jl. TB Simatupang No.15, RT.10/RW.3, Tj. Bar.,
                Kec. Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota
                Jakarta 12530
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-6 flex flex-col justify-between pl-24 lg:translate-x-8 pr-16 translate-y-10 pt-24 pb-20 max-xl:pl-10 max-xl:pr-12 max-xl:pt-16 max-xl:pb-14">
          <div className="flex items-center justify-between gap-6 max-xl:gap-5">
            <p className="w-[360px] text-xs leading-5 text-[#F4F4F4] whitespace-pre-line max-xl:w-[300px] max-xl:text-[11px] max-xl:leading-[18px]">
              Dapatkan info penawaran menarik lebih awal dengan{" "}
              <span className="font-semibold">
                cantumkan email kamu di samping!
              </span>
            </p>
            <div className="w-[300px] max-xl:w-[260px]">
              <input
                type="email"
                placeholder="Email"
                className="h-11 w-full rounded-2xl bg-white px-4 text-sm text-black placeholder:text-[#8A8A8A]"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    handleSubscribe();
                  }
                }}
                disabled={isSubmitting}
              />
            </div>
          </div>

          <div className="flex gap-16 max-xl:gap-10">
            <div className="flex w-[300px] gap-12 text-xs text-[#F4F4F4] max-xl:w-[260px] max-xl:gap-8">
              <div className="flex flex-col space-y-2 leading-5 max-xl:text-[11px] max-xl:leading-[18px]">
                {primaryLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition-colors hover:text-[#15C0C4] whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-2 leading-5 max-xl:text-[11px] max-xl:leading-[18px]">
                {secondaryLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition-colors hover:text-[#15C0C4] whitespace-nowrap"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="w-[300px] space-y-3 text-xs text-[#F4F4F4] max-xl:w-[260px] max-xl:text-[11px] max-xl:leading-[18px]">
              <p className="leading-5 max-xl:leading-[18px]">
                Ingin bertanya lebih rinci? hubungi kami melalui kanal berikut:
              </p>
              <div className="space-y-2">
                <Link 
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-center gap-2 hover:text-[#15C0C4] transition-colors cursor-pointer"
                >
                  <Image
                    src="/footer/office.png"
                    alt="Email Icon"
                    width={16}
                    height={16}
                  />
                  <span className="font-semibold text-white hover:text-[#15C0C4] transition-colors">
                    {CONTACT.email}
                  </span>
                </Link>
                <Link 
                  href={`https://wa.me/${CONTACT.phoneDesktop.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-[#15C0C4] transition-colors cursor-pointer"
                >
                  <Image
                    src="/footer/telephone.png"
                    alt="Telephone Icon"
                    width={16}
                    height={16}
                  />
                  <span className="font-semibold text-white hover:text-[#15C0C4] transition-colors">
                    {CONTACT.phoneDesktop}
                  </span>
                </Link>
              </div>
              <div className="space-y-2">
                <p className="leading-5">
                  Ikut media sosial kami{" "}
                  <span className="font-semibold text-white">@corvidian</span>
                </p>
                <div className="flex gap-3">
                  {SOCIAL_ICONS.map((social) => (
                    <Link
                      href={social.href}
                      aria-label={social.label}
                      key={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black transition-transform hover:scale-105">
                        <Image
                          src={social.src}
                          alt={social.alt}
                          width={22}
                          height={22}
                        />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-12 text-center text-[10px] translate-y-8 max-xl:translate-y-4 max-xl:text-[9px]">
          | www.corvidian.io | © Corvidian. All right reserved
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 z-20 overflow-y-hidden">
          <Image
            src="/footer/footer-biru.png"
            alt="Footer blue accent"
            width={1000}
            height={400}
            priority
            className="w-[900px] h-auto translate-y-10 max-xl:-translate-x-62 max-2xl:-translate-x-14"
          />
        </div>

        <div className="absolute bottom-0 left-24 z-10">
          <Image
            src="/footer/footer-abu-abu.png"
            alt="Footer gray accent"
            width={800}
            height={400}
            priority
            className="w-[800px] h-auto max-xl:-translate-x-54 max-2xl:-translate-x-12"
          />
        </div>
      </div>
    </footer>
  );
};
