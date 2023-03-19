import './globals.css'

export const metadata = {
  title: 'Awesome Self-Hosted Tools',
  description: 'Searchable list of awesome self-hosted repos',
}

export default function RootLayout({ children }) {
  return (
    <html class="h-full" lang="en">
      <body class="h-full">{children}</body>
    </html>
  )
}
