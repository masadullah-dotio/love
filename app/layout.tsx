import { type FC, type ReactNode } from "react";
import { type Metadata } from "next";
import "./globals.css";

export interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Create Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
