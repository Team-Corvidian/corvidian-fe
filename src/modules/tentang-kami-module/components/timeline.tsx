import React from "react";

const Timeline = () => {
  const timelineData = [
    {
      title: "10 Tahun Pengalaman",
      description:
        "Tim berpengalaman yang menggabungkan pengetahuan teknis dan strategi bisnis untuk menghasilkan solusi tepat guna.",
    },
    {
      title: "200+ Pengguna",
      description:
        "Dipercaya oleh ratusan pengguna dari berbagai industri yang mengandalkan solusi digital kami setiap hari.",
    },
    {
      title: "60+ Sistem Dikembangkan",
      description:
        "Portofolio luas dengan sistem yang dirancang sesuai kebutuhan spesifik, dari skala kecil hingga enterprise.",
    },
    {
      title: "12 Klien Aktif",
      description:
        "Hubungan jangka panjang dengan klien yang berlanjut melalui inovasi dan dukungan berkelanjutan.",
    },
  ];

  return (
    <div className="w-full max-w-3xl pl-4 py-8">
      <div className="relative">
        <div className="absolute left-[9px] md:left-[11px] top-[10px] w-[2px] md:w-[3px] bg-[#1578CB] h-[calc(100%-40px)]"></div>

        <div className="space-y-6 md:space-y-8">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              <div
                className="absolute left-0 top-1 w-5 h-5 md:w-6 md:h-6 rounded-full bg-[#1578CB]"
                style={{
                  border: "2px solid #C5CED5",
                }}
              ></div>

              <div>
                <h3 className="text-base md:text-lg font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify pr-0 md:pr-8">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
