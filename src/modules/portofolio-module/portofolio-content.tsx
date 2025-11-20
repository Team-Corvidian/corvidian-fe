import React from 'react'
import PortofolioTemplate, { AVAILABLE_TECHNOLOGIES } from './portofolio-template'
// import { section } from 'framer-motion/client'


const PortofolioContent = () => {
  return (
    <section>
      <PortofolioTemplate
        // Judul Section
        titleLine1="Portal Karyawan"
        titleLine2="System"
        // Deskripsi Section
        description="Portal Karyawan Corvidian dikembangkan sebagai solusi digital terpadu untuk mengelola data dan aktivitas karyawan dalam satu platform. Sistem ini mencakup pengelolaan absensi, cuti, regulasi internal, hingga tracking performa yang dapat dipantau secara lebih terukur. Dengan akses yang mudah dan tampilan ramah pengguna, portal ini membantu perusahaan meningkatkan efisiensi operasional, menjaga transparansi, dan menghadirkan pengalaman kerja yang lebih tertata. Informasi yang tersaji secara real-time juga memudahkan manajemen dalam mengambil keputusan berbasis data. Secara teknis, portal ini dibangun menggunakan Laravel sebagai backend yang stabil dan Next.js sebagai frontend yang responsif. MySQL berfungsi sebagai basis data yang aman dan terstruktur, sedangkan TailwindCSS dan Bootstrap menjaga konsistensi antarmuka. Infrastruktur AWS Cloud memastikan sistem berjalan dengan cepat, aman, dan scalable mengikuti kebutuhan perusahaan. Dengan kombinasi ini, Portal Karyawan Corvidian hadir sebagai fondasi digital modern yang membantu organisasi membangun ekosistem kerja yang transparan, efisien, dan berkelanjutan."
        // Environment Technologies (TIDAK DAPAT DIGANTI setelah di-set)
        technologies={[
          AVAILABLE_TECHNOLOGIES.PHP,
          AVAILABLE_TECHNOLOGIES.LARAVEL,
          AVAILABLE_TECHNOLOGIES.MYSQL,
          AVAILABLE_TECHNOLOGIES.BOOTSTRAP,
        ]}
        // Foto Portofolio (DAPAT DIGANTI sesuai kebutuhan)
        portfolioImages={[
          {
            src: "/portofolio/GambarBawahKiri.png",
            alt: "Gambar bawah kiri",
            width: 360,
            height: 210,
            modalWidth: 432,
            modalHeight: 263,
          },
          {
            src: "/portofolio/GambarBawahTengah.png",
            alt: "Gambar bawah tengah",
            width: 360,
            height: 210,
            modalWidth: 432,
            modalHeight: 263,
          },
          {
            src: "/portofolio/GambarBawahKanan.png",
            alt: "Gambar bawah kanan",
            width: 360,
            height: 210,
            modalWidth: 432,
            modalHeight: 263,
          },
        ]}

        // mainImage (OPTIONAL - jika tidak di-set, akan menggunakan laptop.png)
        // mainImage="/portofolio/custom-image.png"
      />
      <PortofolioTemplate
        // Judul Section (2 baris)
        titleLine1="Learning Management"
        titleLine2="System"
        // Deskripsi Section
        description="Learning Management System Binawan dibuat untuk memudahkan perusahaan dalam mengelola pelatihan dan pengembangan kompetensi karyawan. Platform ini mendukung penyusunan materi, pengelolaan kelas, evaluasi pembelajaran, serta pemantauan perkembangan peserta melalui dashboard yang informatif. Sistem ini juga terintegrasi dengan notifikasi WhatsApp sehingga peserta selalu mendapat pengingat terkait jadwal maupun tugas. Dengan fitur ini, proses belajar menjadi lebih terstruktur, efektif, dan mampu membangun budaya belajar berkelanjutan di dalam perusahaan. Dari sisi teknis, sistem menggunakan Laravel pada backend yang andal serta Next.js pada frontend untuk tampilan yang cepat dan interaktif. MySQL dimanfaatkan sebagai basis data yang aman, sementara TailwindCSS dan Bootstrap menjaga konsistensi antarmuka di berbagai perangkat. Infrastruktur AWS Cloud menambah performa, keamanan, dan kemampuan skalabilitas sesuai kebutuhan perusahaan. Dengan dukungan ini, Learning Management System Corvidian hadir sebagai solusi digital modern yang memperkuat pengembangan SDM sekaligus mendukung pertumbuhan bisnis jangka panjang."
        // Environment Technologies (TIDAK DAPAT DIGANTI setelah di-set)
        technologies={[
          AVAILABLE_TECHNOLOGIES.PHP,
          AVAILABLE_TECHNOLOGIES.LARAVEL,
          AVAILABLE_TECHNOLOGIES.MYSQL,
          AVAILABLE_TECHNOLOGIES.BOOTSTRAP,
        ]}
        // Foto Portofolio (DAPAT DIGANTI sesuai kebutuhan)
        portfolioImages={[
          {
            src: "/portofolio/GambarBawahKiri(1).png",
            alt: "Gambar bawah kiri",
            width: 360,
            height: 210,
            modalWidth: 433,
            modalHeight: 263,
          },
          {
            src: "/portofolio/GambarBawahTengah(1).png",
            alt: "Gambar bawah tengah",
            width: 360,
            height: 210,
            modalWidth: 432,
            modalHeight: 263,
          },
          {
            src: "/portofolio/GambarBawahKanan(1).png",
            alt: "Gambar bawah kanan",
            width: 360,
            height: 210,
            modalWidth: 432,
            modalHeight: 263,
          },
        ]}
        // mainImage (OPTIONAL - jika tidak di-set, akan menggunakan laptop.png)
        mainImage="/portofolio/laptop(1).png"
      />

      <PortofolioTemplate
        // Judul Section (2 baris)
        titleLine1="Company Profile"
        titleLine2="Website"
        // Deskripsi Section
        description="Portal Karyawan Corvidian dikembangkan sebagai solusi digital terpadu untuk mengelola data dan aktivitas karyawan dalam satu platform. Sistem ini mencakup pengelolaan absensi, cuti, regulasi internal, hingga tracking performa yang dapat dipantau secara lebih terukur. Dengan akses yang mudah dan tampilan ramah pengguna, portal ini membantu perusahaan meningkatkan efisiensi operasional, menjaga transparansi, dan menghadirkan pengalaman kerja yang lebih tertata. Informasi yang tersaji secara real-time juga memudahkan manajemen dalam mengambil keputusan berbasis data. Secara teknis, portal ini dibangun menggunakan Laravel sebagai backend yang stabil dan Next.js sebagai frontend yang responsif. MySQL berfungsi sebagai basis data yang aman dan terstruktur, sedangkan TailwindCSS dan Bootstrap menjaga konsistensi antarmuka. Infrastruktur AWS Cloud memastikan sistem berjalan dengan cepat, aman, dan scalable mengikuti kebutuhan perusahaan. Dengan kombinasi ini, Portal Karyawan Corvidian hadir sebagai fondasi digital modern yang membantu organisasi membangun ekosistem kerja yang transparan, efisien, dan berkelanjutan."
        // Environment Technologies (TIDAK DAPAT DIGANTI setelah di-set)
        technologies={[
          AVAILABLE_TECHNOLOGIES.PHP,
          AVAILABLE_TECHNOLOGIES.LARAVEL,
          AVAILABLE_TECHNOLOGIES.MYSQL,
          AVAILABLE_TECHNOLOGIES.BOOTSTRAP,
        ]}
        // Foto Portofolio (DAPAT DIGANTI sesuai kebutuhan)
        portfolioImages={[
          {
            src: "/portofolio/GambarBawahKiri(2).png",
            alt: "Gambar bawah kiri",
            width: 360,
            height: 210,
            modalWidth: 432,
            modalHeight: 263,
          },
          {
            src: "/portofolio/GambarBawahTengah(2).png",
            alt: "Gambar bawah tengah",
            width: 360,
            height: 210,
            modalWidth: 433,
            modalHeight: 263,
          },
          {
            src: "/portofolio/GambarBawahKanan(2).png",
            alt: "Gambar bawah kanan",
            width: 360,
            height: 210,
            modalWidth: 432,
            modalHeight: 263,
          },
        ]}
        // mainImage (OPTIONAL - jika tidak di-set, akan menggunakan laptop.png)
        mainImage="/portofolio/laptop(2).png"
      />
      <PortofolioTemplate
        // Judul Section (2 baris)
        titleLine1="Human Capital"
        titleLine2="System / Recruitment"
        // Deskripsi Section
        description="Portal Karyawan Corvidian dikembangkan sebagai solusi digital terpadu untuk mengelola data dan aktivitas karyawan dalam satu platform. Sistem ini mencakup pengelolaan absensi, cuti, regulasi internal, hingga tracking performa yang dapat dipantau secara lebih terukur. Dengan akses yang mudah dan tampilan ramah pengguna, portal ini membantu perusahaan meningkatkan efisiensi operasional, menjaga transparansi, dan menghadirkan pengalaman kerja yang lebih tertata. Informasi yang tersaji secara real-time juga memudahkan manajemen dalam mengambil keputusan berbasis data. Secara teknis, portal ini dibangun menggunakan Laravel sebagai backend yang stabil dan Next.js sebagai frontend yang responsif. MySQL berfungsi sebagai basis data yang aman dan terstruktur, sedangkan TailwindCSS dan Bootstrap menjaga konsistensi antarmuka. Infrastruktur AWS Cloud memastikan sistem berjalan dengan cepat, aman, dan scalable mengikuti kebutuhan perusahaan. Dengan kombinasi ini, Portal Karyawan Corvidian hadir sebagai fondasi digital modern yang membantu organisasi membangun ekosistem kerja yang transparan, efisien, dan berkelanjutan."
        // Environment Technologies (TIDAK DAPAT DIGANTI setelah di-set)
        technologies={[
          AVAILABLE_TECHNOLOGIES.PHP,
          AVAILABLE_TECHNOLOGIES.LARAVEL,
          AVAILABLE_TECHNOLOGIES.MYSQL,
          AVAILABLE_TECHNOLOGIES.BOOTSTRAP,
        ]}
        // Foto Portofolio (DAPAT DIGANTI sesuai kebutuhan)
        portfolioImages={[
          {
            src: "/portofolio/GambarBawahKiri(3).png",
            alt: "Gambar bawah kiri",
            width: 360,
            height: 210,
            modalWidth: 427,
            modalHeight: 240,
          },
          {
            src: "/portofolio/GambarBawahTengah(3).png",
            alt: "Gambar bawah tengah",
            width: 360,
            height: 210,
            modalWidth: 426,
            modalHeight: 240,
          },
          {
            src: "/portofolio/GambarBawahKanan(3).png",
            alt: "Gambar bawah kanan",
            width: 360,
            height: 210,
            modalWidth: 427,
            modalHeight: 240,
          },
        ]}

        // mainImage (OPTIONAL - jika tidak di-set, akan menggunakan laptop.png)
        // mainImage="/portofolio/laptop(3).png"
      />
      <PortofolioTemplate
        // Judul Section (2 baris)
        titleLine1="Project Management"
        titleLine2="System"
        // Deskripsi Section
        description="Portal Karyawan Corvidian dikembangkan sebagai solusi digital terpadu untuk mengelola data dan aktivitas karyawan dalam satu platform. Sistem ini mencakup pengelolaan absensi, cuti, regulasi internal, hingga tracking performa yang dapat dipantau secara lebih terukur. Dengan akses yang mudah dan tampilan ramah pengguna, portal ini membantu perusahaan meningkatkan efisiensi operasional, menjaga transparansi, dan menghadirkan pengalaman kerja yang lebih tertata. Informasi yang tersaji secara real-time juga memudahkan manajemen dalam mengambil keputusan berbasis data. Secara teknis, portal ini dibangun menggunakan Laravel sebagai backend yang stabil dan Next.js sebagai frontend yang responsif. MySQL berfungsi sebagai basis data yang aman dan terstruktur, sedangkan TailwindCSS dan Bootstrap menjaga konsistensi antarmuka. Infrastruktur AWS Cloud memastikan sistem berjalan dengan cepat, aman, dan scalable mengikuti kebutuhan perusahaan. Dengan kombinasi ini, Portal Karyawan Corvidian hadir sebagai fondasi digital modern yang membantu organisasi membangun ekosistem kerja yang transparan, efisien, dan berkelanjutan."
        // Environment Technologies (TIDAK DAPAT DIGANTI setelah di-set)
        technologies={[
          AVAILABLE_TECHNOLOGIES.PHP,
          AVAILABLE_TECHNOLOGIES.LARAVEL,
          AVAILABLE_TECHNOLOGIES.MYSQL,
          AVAILABLE_TECHNOLOGIES.BOOTSTRAP,
        ]}
        // Foto Portofolio (DAPAT DIGANTI sesuai kebutuhan)
        portfolioImages={[
          {
            src: "/portofolio/GambarBawahKiri(4).png",
            alt: "Gambar bawah kiri",
            width: 360,
            height: 210,
            modalWidth: 500,
            modalHeight: 300,
          },
          {
            src: "/portofolio/GambarBawahTengah(4).png",
            alt: "Gambar bawah tengah",
            width: 360,
            height: 210,
            modalWidth: 500,
            modalHeight: 300,
          },
          {
            src: "/portofolio/GambarBawahKanan(4).png",
            alt: "Gambar bawah kanan",
            width: 360,
            height: 210,
            modalWidth: 500,
            modalHeight: 300,
          },
        ]}
        // mainImage (OPTIONAL - jika tidak di-set, akan menggunakan laptop.png)
        mainImage="/portofolio/laptop(4).png"
      />
    </section>
  );
}

export default PortofolioContent
