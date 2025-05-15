import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./app.css";
import "./layout.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SPG Analytics",
  description: "SPG Analytics Dashboard",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="app-header">
          <nav>
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/anomalies" className="nav-link">Anomalies</Link>
          </nav>
        </header>
        <main className="app-main">
          {children}
        </main>
      </body>
    </html>
  );
}