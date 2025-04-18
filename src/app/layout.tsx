import type { Metadata, Viewport } from "next";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../app/styles/global.css";

export const metadata: Metadata = {
  title: "Tia Rosa's Coffee Shop",
  description: "A cafeteria mais adorada do Brasil!",
  keywords: ["cafeteria", "café", "Tia Rosa", "coffee shop", "Brasil"],

  icons: {
    icon: [
      { url: "/icon.ico", sizes: "any", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        sizes: "192x192",
        url: "/android-chrome-192x192.png",
        type: "image/png",
      },
      {
        rel: "icon",
        sizes: "512x512",
        url: "/android-chrome-512x512.png",
        type: "image/png",
      },
    ],
  },

  metadataBase: new URL("https://tia-rosa-coffee-shop.vercel.app/"),
  openGraph: {
    title: "Tia Rosa's Coffee Shop",
    description: "A cafeteria mais adorada do Brasil!",
    url: "https://tia-rosa-coffee-shop.vercel.app/",
    type: "website",
    images: [
      {
        url: "/preview.jpg",
        width: 1200,
        height: 630,
        alt: "Tia Rosa's Coffee Shop",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#331f12" },
    { media: "(prefers-color-scheme: dark)", color: "#331f12" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta
          name="apple-mobile-web-app-title"
          content="Tia Rosa's Coffee shop"
        />
        <link rel="manifest" href="/manifest.json" />
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
