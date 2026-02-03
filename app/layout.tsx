import { type FC, type ReactNode } from "react";
import { type Metadata } from "next";
import HeaderComponent from "./components/HeaderComponent";
import FooterComponent from "./components/FooterComponent";
import "./globals.css";

export interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Love",
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen bg-pink-50 dark:bg-gray-900 transition-colors duration-300">
        <HeaderComponent />
        <main className="relative z-10">{children}</main>
        <FooterComponent />
      </body>
    </html>
  );
};

export default RootLayout;
