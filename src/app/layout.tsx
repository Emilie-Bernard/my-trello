import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";


const trelloFont = localFont({
  src: './fonts/trellicons-regular.ttf',
  variable: '--font-surt-bold',
})
export const metadata: Metadata = {
  title: "Next Trello",
  description: "Web site created using create-react-app",
  icons: {
    icon: '/trello-favicon.png',
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={trelloFont.className}>{children}</body>
    </html>
  );
}
