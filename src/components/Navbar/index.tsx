import { fetchWawasanPreviews } from "@/lib/api/wawasan-api";
import { NavbarDesktop } from "./navbar-desktop";
import { NavbarMobile } from "./navbar-mobile";

export async function Navbar() {
  const articles = await fetchWawasanPreviews();
  return (
    <div>
      <div className="hidden lg:block">
        <NavbarDesktop articles={articles} />
      </div>
      <div className="block lg:hidden">
        <NavbarMobile articles={articles} />
      </div>
    </div>
  );
}

export default Navbar;
