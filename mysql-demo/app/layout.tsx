import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-white`}
      >
        <h1>This is the root layout</h1>
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
