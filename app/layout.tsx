import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import { metaMessages } from "./data/meta";
import { Toaster } from "react-hot-toast";

const karla = Karla({
  variable: "--font-karla",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: metaMessages.title,
  description: metaMessages.description,
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${karla.variable} antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
