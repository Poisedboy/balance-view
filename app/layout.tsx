import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import { cn } from "../lib/utils"
import { NextProvider } from './components/next-provider'
import './globals.css'
import { Navigation } from './components/Navigation'
import { ThemeProvider } from './components/theme-provider'

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: 'Balance',
  description: 'Manage your money',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
      )}>
        <NextProvider>
          <ThemeProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextProvider>
      </body>
    </html>
  )
}
