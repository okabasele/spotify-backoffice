
import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import Sidebar from "@/components/Sidebar";
import {Inter} from "next/font/google"

const inter = Inter({
  subsets: [
    "latin",

  ],
});

export const metadata = {
  title: "Spotify Portal",
  description: "Generated by create next app",
  icons: {
    icon: "/spotify_logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`w-screen h-screen ${inter.className}`}
      >
        <header className="px-6 h-12 flex border-b border-gray-500">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="logo" width={32} height={32} />
            <b>Spotify Portal</b>
          </Link>
        </header>
        <main className="flex min-w-full">
          <Sidebar />

          <section className="flex-1 p-6">{children}</section>
        </main>
      </body>
    </html>
  );
}
