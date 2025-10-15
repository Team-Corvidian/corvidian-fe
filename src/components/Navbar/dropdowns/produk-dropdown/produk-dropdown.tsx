import ProdukSolusiLayanan from "./produk-solusi-layanan";
import ProdukAplikasiSiap from "./produk-aplikasi-siap";

export const ProdukDropdown = () => {
  return (
    <div className="flex flex-col max-h-[700px] overflow-hidden rounded-2xl">

      <div className="flex-1 overflow-y-auto w-full px-6 mt-[10px] pb-6 scrollbar-thin scrollbar-thumb-corvidian-3 scrollbar-track-transparent">
        {/* Solusi Berdasarkan Layanan */}
        <h2 className="text-white text-lg font-semibold mb-[7px] text-center text-[14px]">Solusi Berdasarkan Layanan</h2>
        <ProdukSolusiLayanan />

        {/* Aplikasi Siap Pakai */}
        <h2 className="text-white text-lg font-semibold mt-8 mb-2 text-center text-[14px]">Aplikasi Siap Pakai</h2>
        <ProdukAplikasiSiap />
       

      </div>
    </div>
  );
};
