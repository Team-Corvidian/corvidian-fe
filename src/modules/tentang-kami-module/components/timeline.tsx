import React from 'react'

const Timeline = () => {
  const timelineData = [
    {
      title: "10 Tahun Pengalaman",
      description: "Tim berpengalaman yang menggabungkan pengetahuan teknis dan strategi bisnis untuk menghasilkan solusi tepat guna.",
    },
    {
      title: "200+ Pengguna",
      description: "Dipercaya oleh ratusan pengguna dari berbagai industri yang mengandalkan solusi digital kami setiap hari.",
    },
    {
      title: "60+ Sistem Dikembangkan",
      description: "Portofolio luas dengan sistem yang dirancang sesuai kebutuhan spesifik, dari skala kecil hingga enterprise.",
    },
    {
      title: "12 Klien Aktif",
      description: "Hubungan jangka panjang dengan klien yang berlanjut melalui inovasi dan dukungan berkelanjutan.",
    },
  ];

  return (
    <div className="w-full mt-8">
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[9px] top-[10px] bottom-0 w-[3px] bg-corvidian-1 h-[85%]"></div>
       
        {/* Timeline items */}
        <div className="space-y-8">
          {timelineData.map((item, index) => (
            <div key={index} className="relative pl-8">
              {/* Blue dot */}
              <div className="absolute left-0 top-1 w-[20px] h-[20px] rounded-full bg-[#2A77BD] border-2 border-white"></div>
              
              {/* Content */}
              <div>
                <h3 className="text-[16px] font-bold text-black mb-2">
                  {item.title}
                </h3>
                <p className="text-[14px] text-gray-700 leading-relaxed w-5/8 text-justify">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Timeline