import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import "./globals.css";


const montserrat = Montserrat({
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "Education Day'24",
  description: "BVICAM Education Day",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrat.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
