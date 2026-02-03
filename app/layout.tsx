import { type FC, type ReactNode } from "react";
import { type Metadata } from "next";
import "./globals.css";

export interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Create Next App",
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
