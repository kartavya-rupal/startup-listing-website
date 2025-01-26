import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import 'easymde/dist/easymde.min.css';
import { Toaster } from "@/components/ui/toaster";
// import LoadingBar from "@/components/LoadingBar";
import NextTopLoader from "nextjs-toploader";

const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: 'InnoVault - Showcase Your Ideas',
  description: 'Present your startup, connect with investors, and explore innovation on InnoVault.',
  icons: {
    icon: './public/favicon.ico',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={workSans.variable}
      >
        {/* <LoadingBar /> */}
        <NextTopLoader showSpinner={false} color="rgb(238, 43, 105)" height={3}  />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
