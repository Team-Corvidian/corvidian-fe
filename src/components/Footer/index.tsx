import { FooterDesktop } from "./footer-desktop";
import { FooterMobile } from "./footer-mobile";

export const Footer = () => {
  return (
    <div className="w-full">
      <div className="hidden lg:block">
        <FooterDesktop />
      </div>
      <div className="block lg:hidden">
        <FooterMobile />
      </div>
    </div>
  );
};
