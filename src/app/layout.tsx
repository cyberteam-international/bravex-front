import type { Metadata } from "next";
import "./globals.css";
import { helveticaNeue, helveticaNeueCyr } from "./fonts";
import Header from "@/components/Header/Header";
import FooterWrapper from "@/components/Footer/FooterWrapper";
import LenisProvider from "@/providers/LenisProvider";
import ViewportHeightProvider from "@/providers/ViewportHeightProvider";
import { GSAPAnimationsProvider } from "@/providers";
import Preloader from "@/components/Preloader/Preloader";
import Modal from "@/components/Modal/Modal";
import MobileMenu from "@/components/MobileMenu/MobileMenu";

export const metadata: Metadata = {
  title: {
    template: "%s - BRAVEX GROUP",
    default: "BRAVEX GROUP",
  },
  description:
    "Bravex Group provides premium European construction solutions, steel-light-concrete systems, turnkey home building services, and custom interior design. We deliver high-quality materials, fast construction, innovative engineering, and complete project management from planning to installation. Build your modern, energy-efficient home with trusted European expertise.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${helveticaNeue.variable} ${helveticaNeueCyr.variable}`}
    >
      <body>
        <Preloader />
        <ViewportHeightProvider>
          <LenisProvider classesToExclude={["no-scroll", "modal", "popup"]}>
            <GSAPAnimationsProvider>
              <Header />
              <main>{children}</main>
              <FooterWrapper />
              <Modal id="modal1" />
              <MobileMenu id="mobile-menu" />
            </GSAPAnimationsProvider>
          </LenisProvider>
        </ViewportHeightProvider>
      </body>
    </html>
  );
}
