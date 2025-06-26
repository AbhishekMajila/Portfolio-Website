import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '  Abhsihek Majila Portfolio',
  description: "Portfolio of Abhishek Majila - Projects, Skills, Contact and More.",
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
