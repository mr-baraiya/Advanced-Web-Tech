import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-12 grid-rows-[auto_1fr_auto] h-screen">
      <header className="col-span-12 bg-blue-500 p-4 text-white">
        <div className="flex items-center justify-between gap-6">
          <Link className="text-xl font-bold" href="/">
            LOGO
          </Link>
          <div className="flex items-center gap-6">
            <div className="w-64">
              <input
                type="text"
                placeholder="Search Bar"
                className="w-full border-2 p-3 rounded-md text-white"
              />
            </div>
            <div className="grid grid-cols-4 gap-3">
              <Link
                href="/home"
                className="p-3 text-center rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="p-3 text-center rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="p-3 text-center rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
              >
                Contact
              </Link>
              <Link
                href="/login"
                className="p-3 text-center rounded-lg hover:bg-blue-600 hover:text-white transition font-medium"
              >
                Logout
              </Link>
            </div>
          </div>
        </div>
      </header>
      <aside className="col-span-2 bg-gray-200 p-4">
        <div className="grid gap-3">
          <div className="p-3 text-center bg-white rounded-lg shadow hover:bg-blue-100 transition cursor-pointer">
            Dashboard
          </div>
          <div className="p-3 text-center bg-white rounded-lg shadow hover:bg-blue-100 transition cursor-pointer">
            Profile
          </div>

          <div className="p-3 text-center bg-white rounded-lg shadow hover:bg-blue-100 transition cursor-pointer">
            Settings
          </div>

          <div className="p-3 text-center bg-white rounded-lg shadow hover:bg-blue-100 transition cursor-pointer">
            Notifications
          </div>
        </div>
      </aside>
      <main className="col-span-10 p-4 bg-white">{children}</main>
      <footer className="col-span-12 bg-gray-800 text-white p-8">
        <div className="grid grid-cols-3 gap-6 text-center">
          <div className="p-4 hover:text-blue-400 transition cursor-pointer">
            About Us
          </div>

          <div className="p-4 hover:text-blue-400 transition cursor-pointer">
            Contact
          </div>

          <div className="p-4 hover:text-blue-400 transition cursor-pointer">
            Terms & Privacy
          </div>
        </div>

        <p className="text-center text-gray-400 mt-6 text-sm">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
