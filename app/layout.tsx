import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Intranet Sotrigo",
  description: "Portal Corporativo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${inter.className} bg-gray-50 text-gray-900`}>
        <Sidebar />
        <main className="min-h-screen w-full">
          {children}
        </main>
      </body>
    </html>
  );
}