import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/src/shared/context/CartContext";
import Header from "@/src/shared/components/Header";

export const metadata: Metadata = {
  title: "Fake Store",
  description: "Loja de produtos com Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
        </CartProvider>
      </body>
    </html>
  );
}
