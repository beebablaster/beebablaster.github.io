import { Providers } from './providers'
import React from "react";
import {ReduxProvider} from "../redux/provider";

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
      <ReduxProvider>
      <Providers>
      {children}
      </Providers>
      </ReduxProvider>
      </body>
    </html>
  )
}
