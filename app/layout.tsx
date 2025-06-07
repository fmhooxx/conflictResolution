import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '冲突管理与化解：化危为机',
  description: '冲突管理与化解：化危为机',
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
