import "./globals.css";
import { Inter } from 'next/font/google'
import { MainContainer, BarraDeNavegacao } from "./components/NavBar";



const inter = Inter({ subsets: ['latin']})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BarraDeNavegacao />
        <MainContainer>
          {children}
        </MainContainer>
      </body>
    </html>
  );
}
