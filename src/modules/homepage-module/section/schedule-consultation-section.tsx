"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import KataMereka from "../components/schedule-consultation/kata-mereka";
import { submitConsultation } from "@/lib/api/customer-api";
import KataMerekaMobile from "../components/schedule-consultation/kata-mereka-mobile";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  company: z.string().min(1),
  question: z.string().min(1),
  agreement: z.boolean().refine((v) => v === true),
});

type FormValues = z.infer<typeof schema>;

export default function ConsultationSchedule() {
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      question: "",
      agreement: false,
    },
  });

  const onSubmit = async (values: FormValues) => {
    setLoading(true);
    try {
      const result = await submitConsultation(values);
      if (!result.ok) {
        toast.error(result.error || "Terjadi kesalahan");
        return;
      }

      toast.success(
        result.data?.message || "Berhasil, kami akan menghubungi anda segera"
      );
      form.reset();
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full max-w-[383px] bg-transparent border-0 border-b border-black pb-[8px] font-normal text-[14px] md:text-[18px] text-[#1D1F26] placeholder-[#1D1F26] focus:border-[#02C2B3] focus-visible:ring-0 rounded-none";

  return (
    <section
      id="konsultasi"
      className="relative w-full max-w-[1512px] mx-auto overflow-hidden py-12 md:py-20"
    >
      <div className="w-full max-w-[1388px] mx-auto lg:ms-auto lg:px-0">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[500px] lg:ml-[50px]">
            <div className="mb-8 md:mb-[20px] text-center lg:text-left">
              <h2 className="font-extrabold text-[24px] md:text-[33px] leading-tight md:leading-[100%] text-[#1D1F26] mb-3 md:mb-[10px]">
                Jadwalkan Konsultasi Gratis
              </h2>
              <p className="font-normal md:font-medium text-[14px] md:text-[18px] text-[#1D1F26]">
                Isi data sebentar, tim kami akan langsung hubungi!
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 md:space-y-[30px] flex flex-col items-start max-lg:items-center lg:items-start"
              >
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full max-w-[383px]">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Nama*"
                          className={inputStyle}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="email"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full max-w-[383px]">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Email*"
                          className={inputStyle}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="phone"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full max-w-[383px]">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Nomor Telepon*"
                          className={inputStyle}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="company"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full max-w-[383px]">
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Perusahaan*"
                          className={inputStyle}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="question"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="w-full max-w-[383px]">
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Pertanyaan*"
                          className={`${inputStyle} h-[90px] resize-none`}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="agreement"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start gap-3 space-y-0 w-full max-w-[383px]">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          className="mt-1"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-[12px] md:text-[14px] text-[#1D1F26] font-normal leading-snug">
                          Dengan mengirimkan formulir ini, saya setuju untuk
                          menerima email dari Corvidian*
                        </FormLabel>
                        <FormMessage />
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  disabled={loading}
                  className="w-full max-lg:max-w-[151px] max-w-[221px] h-[44px] bg-[#1578CB] hover:bg-[#1568BB] rounded-[7px] text-white font-bold text-[16px] md:text-[18px]"
                >
                  {loading ? "Mengirim..." : "Kirim"}
                </Button>
              </form>
            </Form>
          </div>

          <div className="lg:hidden block mt-10">
            <KataMerekaMobile />
          </div>

          <div className="hidden lg:block lg:ml-auto w-full min-[1100px]:w-2/3 overflow-hidden relative">
            <KataMereka />
          </div>
        </div>
      </div>
    </section>
  );
}
