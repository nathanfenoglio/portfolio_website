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
  title: "Web Developer Portfolio", // sets the title of the page
  description: "Web Developer Portfolio with nextjs, react, and tailwindcss",
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
        className={`${font.className} bg-gradient-to-r from-black via-purple-500 to-grey-500`}>
        <ResponsiveNav />
        {children}
        {/* idk for some reason unable to get Footer to display at bottom of screen, it ends up behind the Services section, putting it in Home.tsx */}
        {/* oh it was because you had a hardcoded height in the page.tsx file, removed it and it's sitting at the bottom of the screen now */}
        <Footer />
        {/* button to scroll to top of page */}
        <ScrollToTop />
      </body>
    </html>
  );
}

