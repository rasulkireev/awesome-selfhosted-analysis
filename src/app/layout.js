import './globals.css'
import Script from 'next/script'

export const metadata = {
  title: 'Awesome Self-Hosted Tools',
  description: 'Searchable list of awesome self-hosted repos',
}


export default function RootLayout({ children }) {
  return (
    <html class="h-full" lang="en">
      <head>
        <script defer data-domain="awesome-selfhosted-analysis.vercel.app" src="https://plausible.rasulkireev.com/js/script.js"></script>
      </head>
      <body class="h-full">{children}</body>
    </html>
  )
}
