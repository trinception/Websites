import { Inter } from "next/font/google";
import { Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "trinception.dev",
  description: "Portfolio website for AI/ML researcher and software engineer Trinity Evans",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
