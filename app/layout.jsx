"use client";
import NextAuthProvider from "@/providers/NextAuthProvider";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import TanstackQueryProvider from "@/providers/TanstackQueryProvider";
import { ModalProvider } from "@/providers/modalProvider";

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
            <ModalProvider/>
            {children}
          </TanstackQueryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
