import { WawasanCard } from "./wawasan-card";
import { WawasanNews } from "./wawasan-news";

export const WawasanDropdown = () => {
  // dummy data
  const news = [
    {
      image: "/navbar/dummy-1.png",
      date: "Wed, 28 July 2025",
      title: "IT Infrastruktur yang Tidak Tangguh.",
      description:
        "Lorem ipsum dolor sit amet consectetur. Massa pharetra ultrices ac platea sagittis mauris cras tristique risus. Cursus quis consequat et at et egestas. Mi posuere egestas eget turpis aliquet molestie lorem placerat lorem.",
    },
    {
      image: "/navbar/dummy-2.png",
      date: "Wed, 28 July 2025",
      title:
        "Panduan Lengkap Pembuatan dan Instalasi Jaringan LAN, WAN, Wireless, dan VLAN untuk Bisnis",
      description:
        "Lorem ipsum dolor sit amet consectetur. Massa pharetra ultrices ac platea sagittis mauris cras tristique risus. Cursus quis consequat et at et egestas.",
    },
    {
      image: "/navbar/dummy-3.png",
      date: "Wed, 28 July 2025",
      title:
        "Cara Mengatur dan Mengamankan Router, Switch, dan Firewall untuk Jaringan yang Aman",
      description:
        "Lorem ipsum dolor sit amet consectetur. Massa pharetra ultrices ac platea sagittis mauris cras tristique risus. Cursus quis consequat et at et egestas.",
    },
    {
      image: "/navbar/dummy-4.png",
      date: "Wed, 28 July 2025",
      title:
        "Tips Efektif Monitoring, Troubleshooting, dan Maintenance Jaringan agar Tetap Optimal",
      description:
        "Lorem ipsum dolor sit amet consectetur. Massa pharetra ultrices ac platea sagittis mauris cras tristique risus. Cursus quis consequat et at et egestas.",
    },
  ];

  return (
    <div className="flex flex-col max-h-[700px] overflow-hidden rounded-2xl">
      <div className="p-6 pb-4 flex-shrink-0">
        <WawasanCard />
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-6 scrollbar-thin scrollbar-thumb-corvidian-3 scrollbar-track-transparent">
        <h2 className="text-white text-lg font-semibold mb-4">Newest</h2>

        <div className="space-y-6 pr-1">
          {news.map((item, index) => (
            <WawasanNews key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
