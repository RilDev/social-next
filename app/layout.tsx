import { Roboto } from "next/font/google";
import "./globals.css";
import Nav from "./Nav";

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${roboto.className}`}>
      <body>
        <Nav />
        {children}
      </body>
    </html>
  );
}
