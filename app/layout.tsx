import type { Metadata } from "next";
import { lato } from "@/libs/Font";
import { baseMetaData } from "@/libs/metadata";
import "@/styles/globals.css";

export const metadataBase: Metadata = baseMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.variable} antialiased`}>{children}</body>
    </html>
  );
}
