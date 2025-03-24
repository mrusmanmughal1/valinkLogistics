import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/UI/Footer";
import FloatQuote from "@/UI/FloatQuote";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vanlink Logitics",
  description: "Vanlink Logitics",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col h-full">
          <Navbar />

          <div className="">{children}</div>
          <FloatQuote />
          <Footer />
        </div>
      </body>
    </html>
  );
}
