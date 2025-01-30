"use client";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import NextAuthProvider from "@/providers/NextAuthProvider";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My Duka</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Toaster position="top-center" />
        <NextAuthProvider>
          <TanstackQueryProvider>
            {children}
            </TanstackQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
