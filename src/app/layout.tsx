import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/navbar";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Toaster from "@/provider/toaster";

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
      <ActiveSectionContextProvider>
        <body
          className={`relative bg-gray-50 p-2 font-sans text-gray-950 sm:pt-20 md:pt-32 ${inter.variable}`}
        >
          <Toaster />
          <div className="absolute right-[11rem] top-[-6rem] -z-10 h-[31.25rem] w-[31.25rem] rounded-full bg-[#fbe2e3] blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]" />
          <div className="absolute left-[-35rem] top-[-1rem] -z-10 h-[31.25rem] w-[50rem] rounded-full bg-[#dbd7fb] blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]" />

          <Navbar />
          {children}
        </body>
      </ActiveSectionContextProvider>
    </html>
  );
}
