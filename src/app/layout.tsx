import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Sourav's | Portfolio",
  description: "A portfolio website for Sourav",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`relative bg-gray-50 p-28 font-sans text-gray-950 sm:p-32 ${inter.variable}`}
      >
        <div className="absolute right-[10rem] top-[-4rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] md:right-[-15rem] md:h-[40rem] md:w-[40rem]" />
        <div className="absolute left-[10rem] top-[-1rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#dbd7fb] blur-[10rem] md:left-[-15rem] md:h-[40rem] md:w-[40rem]" />

        <Navbar />
        {children}
      </body>
    </html>
  );
}
