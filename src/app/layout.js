import "./globals.css";
import { Montserrat } from 'next/font/google';
import { Providers } from "./home/providers";
import Header from "./components/header";
import Footer from "./components/footer";

export const metadata = {
  title: "Conexão Brigada",
};

const font = Montserrat({
  weight: ['500'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={font.className}>
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
