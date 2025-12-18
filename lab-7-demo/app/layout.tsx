import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 antialiased dark:bg-gray-900 dark:text-gray-100"
      >
        {children}
      </body>
    </html>
  );
}
