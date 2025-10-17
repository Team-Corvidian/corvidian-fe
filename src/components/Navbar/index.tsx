import React from "react";
import { NavbarDesktop } from "./navbar-desktop";
import { NavbarMobile } from "./navbar-mobile";


// Gunakan export default untuk mencegah masalah import
export default function Navbar() {
  return (
    <div>
      <div className="hidden lg:block">
        <NavbarDesktop />
      </div>
      <div className="block lg:hidden">
        <NavbarMobile />
      </div>
    </div>
  );
}

// Tambahkan export named juga untuk backward compatibility
export { Navbar };