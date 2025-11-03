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
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/consultation/submit/`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Terjadi kesalahan");
        return;
      }

      toast.success("Berhasil, kami akan menghubungi anda segera");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full bg-transparent border-0 border-b border-black pb-[8px] font-normal text-[18px] text-[#1D1F26] placeholder-[#1D1F26] focus:border-[#02C2B3] focus-visible:ring-0 rounded-none";

  return (
    <section id="konsultasi" className="relative w-full py-20">
      <div className="max-w-[1388px] mx-auto relative flex flex-col md:flex-row px-4 md:px-0">
        <div className="md:w-[500px] w-full md:ml-[120px] mb-16 md:mb-0">
          <div className="mb-[20px]">
            <h2 className="font-extrabold text-[33px] text-[#1D1F26] mb-[10px] whitespace-nowrap">
              Jadwalkan Konsultasi Gratis
            </h2>
            <p className="font-medium text-[18px] text-[#1D1F26]">
              Lengkapi data di bawah, akan kami hubungi segera!
            </p>
          </div>

          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-[30px]"
            >
              <FormField
                name="name"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
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
                  <FormItem>
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
                  <FormItem>
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
                  <FormItem>
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
                  <FormItem>
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
                  <FormItem className="flex items-start gap-[10px]">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-[14px] text-[#1D1F26]">
                      Dengan mengirimkan formulir ini, saya setuju untuk
                      menerima email dari Corvidian*
                    </FormLabel>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                disabled={loading}
                className="w-[221px] h-[44px] bg-[#1578CB] hover:bg-[#1568BB] rounded-[7px] text-white font-bold text-[18px]"
              >
                {loading ? "Mengirim..." : "Kirim"}
              </Button>
            </form>
          </Form>
        </div>

        <div className="md:ml-auto w-full md:w-2/3 overflow-hidden relative">
          <KataMereka />
        </div>
      </div>
    </section>
  );
}
