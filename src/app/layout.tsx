import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google"; // Premium fonts
import "./globals.css";
import "./animations.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold for headings
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"], // Light, Regular, Bold for body
});

export const metadata: Metadata = {
  title: "ZAPHIR | Alta Joyería y Diseño 3D",
  description: "Zaphir ofrece joyería exclusiva en oro de 18k y plata ley 925, diseños personalizados 3D, reparación de joyas y relojería de alta gama.",
  keywords: ["joyería", "oro 18k", "plata 925", "diseño 3d joyas", "anillos compromiso", "relojería"],
  icons: {
    icon: '/assets/logo.jpg', // Using the uploaded logo as favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${cinzel.variable} ${lato.variable}`}>
        {children}
      </body>
    </html>
  );
}
