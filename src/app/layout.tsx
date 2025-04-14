import type { Metadata, Viewport } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../app/styles/global.css";

export const metadata: Metadata = {
  title: "Tia Rosa's Coffee Shop",
  description: "A cafeteria mais adorada do Brasil!",
  icons: {
    icon: "/coffee_ico.svg",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f0e6" },
    { media: "(prefers-color-scheme: dark)", color: "#331f12" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com/s/winkysans/v1/ll85K2SDUiG1Hpf2p06bN60okw.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Winky+Sans:ital,wght@0,300..900;1,300..900&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <div id="root">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
