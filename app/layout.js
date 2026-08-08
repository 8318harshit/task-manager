import './globals.css'

export const metadata = {
  title: 'Task Tracker',
  description: 'A simple task tracker',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
