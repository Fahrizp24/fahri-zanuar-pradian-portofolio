import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../index.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fahri Zanuar Pradian - Portofolio",
  description: "Junior Web Developer & Mahasiswa Teknik Informatika",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-inter">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
