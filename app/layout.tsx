// the main wrapper for each page of the project
import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Footer from "@/components/Home/Footer/Footer";
import ScrollToTop from "@/components/Helper/ScrollToTop";

const font = Sora({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

// says important for SEO Search Engine Optimization purposes
export const metadata: Metadata = {
  title: "Nathan Fenoglio", // sets the title of the page
  description: "Nathan Fenoglio Portfolio with nextjs, react, and tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // can remove the bg-gradient-to-r from-black via-purple-500 to-grey-500 if you want to have different backgrounds for each page
        // className={`${font.className} bg-gradient-to-r from-black via-purple-500 to-grey-500`}>
        className={`${font.className} bg-gradient-to-r from-black via-purple-500 to-grey-500 overflow-x-hidden`}>
        <ResponsiveNav />
        {children}
        <Footer />
        {/* button to scroll to top of page */}
        <ScrollToTop />
      </body>
    </html>
  );
}

