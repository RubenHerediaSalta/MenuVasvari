import { Playfair_Display, Lato } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const lato = Lato({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-lato',
  display: 'swap',
})

export const metadata = {
  title: 'Casa Vasvari | Café + Arte | Animaná, Salta',
  description: 'Menú digital interactivo de Casa Vasvari Café + Arte en Animaná, Salta. Fusión entre cafetería de especialidad y galería de arte.',
  keywords: 'cafetería, arte, Animaná, Salta, menú digital, vinos, pastelería',
  openGraph: {
    title: 'Casa Vasvari | Café + Arte',
    description: 'Menú digital interactivo de Casa Vasvari Café + Arte',
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${playfair.variable} ${lato.variable}`}>
      <body className="min-h-screen bg-cream text-charcoal font-sans">
        {children}
      </body>
    </html>
  )
}