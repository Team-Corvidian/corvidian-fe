import { ProjectSlider } from "../components/project/project-slider";

export const ProjectSection = () => {
  return (
    <section className="bg-corvidian-5 relative pb-0 xl:max-w-[1512px]">
      <div className="container mx-auto pt-7">
        <div className="flex flex-col lg:flex-row justify-between mb-12 px-6 lg:px-20 gap-6 text-center lg:text-left lg:items-end max-lg:text-center">
          <div className="">
            <p className="text-corvidian-1 font-bold mb-2 flex justify-center lg:justify-start items-center gap-2 lg:text-2xl">
              <span
                className="w-[14px] h-[14px] rounded-full"
                style={{
                  backgroundColor: "var(--Corvidian-2, #1578CB)",
                  border: "2px solid var(--Corvidian-3, #C5CED5)",
                }}
              ></span>
              Project Kami
            </p>
            <h2 className="lg:text-2xl xl:text-4xl sm:text-3xl font-extrabold text-corvidian-1 leading-snug max-md:text-[20px]">
              Optimalkan Bisnis Anda <br />
              dengan Solusi IT yang Tepat.
            </h2>
          </div>

          <p className="text-corvidian-1 text-sm sm:text-base lg:text-md xl:text-[17px] max-w-[320px] leading-relaxed lg:text-right max-lg:mx-auto">
            Mengembangkan aplikasi khusus <br className="hidden max-md:block" />{" "}
            dan layanan cloud untuk bisnis Anda
          </p>
        </div>
      </div>

      <div className="px-4 sm:px-6 lg:px-20">
        <ProjectSlider />
      </div>
    </section>
  );
};
