export const metadata = {
  title: 'Authentication',
  description: 'Authentication',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section>{children}</section>
  )
}
