import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hashir Ali | Portfolio',
  description: 'Personal portfolio website of Hashir Ali - Computer Science student and software developer',
  generator: 'v0.dev',
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
