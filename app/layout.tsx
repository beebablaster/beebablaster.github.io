import { Providers } from './providers'
import React from "react";

export const metadata = {
  title: 'TechnoTZ',
  description: 'Test Task at Technodom',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <Providers>
      {children}
      </Providers>
      </body>
    </html>
  )
}
