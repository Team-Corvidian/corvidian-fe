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

export const FooterMobile = () => {
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
    <section className="overflow-hidden text-white">
      <div className="relative flex min-h-[550px] items-center justify-center px-6 py-16">
        <Image
          src="/footer/footer-biru-mobile.png"
          alt="Footer blue accent"
          width={800}
          height={550}
          priority
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex w-full max-w-[300px] flex-col gap-6 translate-y-16">
          <Image
            src="/footer/CordovaWhite.png"
            alt="Corvidian Logo"
            width={200}
            height={48}
            priority
            className="h-auto w-[160px]"
          />
          <div className="space-y-3 text-sm">
            <h3 className="text-xs font-semibold uppercase tracking-wide">
              Kantor
            </h3>
            <p className="text-xs leading-5 text-[#E4E8EC]">
              MUC Building, Jl. TB Simatupang No.15, RT.10/RW.3, Tj. Bar., Kec.
              Jagakarsa, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta
              12530
            </p>
          </div>
          <div className="space-y-3">
            <p className="text-xs leading-6 text-[#F4F4F4]">
              Dapatkan info penawaran menarik lebih awal dengan{" "}
              <span className="font-semibold">
                cantumkan email kamu di samping!
              </span>
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder={SUBSCRIBE.placeholder}
                className="h-11 w-full rounded-full bg-white px-4 text-sm text-black placeholder:text-[#8A8A8A]"
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
        </div>
      </div>

      <div className="flex flex-col gap-10 px-6 py-12 bg-[#1D1F26]">
        <nav className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
          {primaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-[#15C0C4]"
            >
              {link.label}
            </Link>
          ))}
          {secondaryLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-[#15C0C4]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="space-y-4 text-sm text-[#F4F4F4]">
          <p>Ingin bertanya lebih rinci? hubungi kami melalui kanal berikut:</p>
          <div className="space-y-3">
            <Link
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-2 hover:text-[#15C0C4] transition-colors cursor-pointer"
            >
              <Image
                src="/footer/office.png"
                alt="Email Icon"
                width={18}
                height={18}
              />
              <span className="font-semibold text-white hover:text-[#15C0C4] transition-colors">
                {CONTACT.email}
              </span>
            </Link>
            <Link
              href={`https://wa.me/${CONTACT.phoneMobile.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-[#15C0C4] transition-colors cursor-pointer"
            >
              <Image
                src="/footer/telephone.png"
                alt="Telephone Icon"
                width={18}
                height={18}
              />
              <span className="font-semibold text-white hover:text-[#15C0C4] transition-colors">
                {CONTACT.phoneMobile}
              </span>
            </Link>
          </div>
          <div>
            <p>
              Ikut media sosial kami{" "}
              <span className="font-semibold text-white">@corvidian</span>
            </p>
            <div className="mt-4 flex items-center gap-4">
              {SOCIAL_ICONS.map((s) => (
                <Link
                  href={s.href}
                  aria-label={s.label}
                  key={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black transition-transform hover:scale-105">
                    <Image src={s.src} alt={s.alt} width={32} height={32} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <p className="text-center text-xs font-extralight text-white">
          | www.corvidian.io | © Corvidian. All right reserved
        </p>
      </div>
    </section>
  );
};
