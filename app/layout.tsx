import type { Metadata } from "next";
import "./globals.css";

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
        <header className="app-header">
          <div className="container">
            <span className="app-header__logo">FakeStore</span>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
