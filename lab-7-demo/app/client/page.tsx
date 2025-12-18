import Link from "next/link";

export default function ClientPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Welcome to Client Portal</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Link 
          href="/client/product"
          className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Products</h2>
              <p className="text-gray-600 dark:text-gray-400">Browse our product catalog</p>
            </div>
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Orders</h2>
          <p className="text-gray-600 dark:text-gray-400">View your order history</p>
        </div>

        <Link 
          href="/client/profile"
          className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Profile</h2>
              <p className="text-gray-600 dark:text-gray-400">Manage your account settings</p>
            </div>
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">Support</h2>
          <p className="text-gray-600 dark:text-gray-400">Get help and contact us</p>
        </div>
      </div>
    </div>
  );
}
