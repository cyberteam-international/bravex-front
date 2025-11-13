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
    "«Bravex Group — европейская компания по поставке и производству высококачественных инженерно-строительных решений и оборудования: стальные конструкции, отделка «под ключ», шоурумы, строительные и технологические разработки. Мы обеспечиваем комплексный сервис от проектирования до монтажа, работаем с объектами любой сложности и гарантируем надёжность и качество. Оперативные сроки, европейские стандарты, индивидуальные решения — доверяйте профессионалам.»",
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
