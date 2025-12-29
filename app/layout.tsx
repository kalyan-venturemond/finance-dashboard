import type { Metadata } from "next";
import "../css/main.css";
import StoreProvider from "./_stores/StoreProvider";
import Script from "next/script";

const title = `FinVertex Systems Dashboard`;

const description = "FinVertex Systems financial analytics & investment intelligence platform";

const url = "/";

const image = "/logo.png";

const imageWidth = "1920";

const imageHeight = "960";

export const metadata: Metadata = {
  title,
  description,
  icons: "/favicon.png",
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: {
      url: image,
      width: imageWidth,
      height: imageHeight,
    },
  },
  openGraph: {
    url,
    title,
    images: {
      url: image,
      width: imageWidth,
      height: imageHeight,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en" className="style-basic">
        <body className={`bg-gray-50 antialiased dark:bg-slate-800 dark:text-slate-100`}>
          {children}
        </body>
      </html>
    </StoreProvider>
  );
}
