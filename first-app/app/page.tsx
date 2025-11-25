export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Welcome to Advanced Web Technology
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-12 max-w-3xl mx-auto">
            Explore modern web development with Next.js, React, and TypeScript. 
            This is a showcase of cutting-edge technologies and best practices.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🚀</div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Fast Performance
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Built with Next.js for optimal performance and lightning-fast page loads.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">💎</div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Modern Design
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Beautiful UI components styled with Tailwind CSS for a sleek look.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl mb-4">🔒</div>
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-3">
              Type Safe
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Developed with TypeScript for better code quality and developer experience.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            What We Offer
          </h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
            <ul className="space-y-4 text-left text-gray-700 dark:text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                <span>Server-side rendering and static site generation</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                <span>Responsive design that works on all devices</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                <span>Optimized for search engines (SEO friendly)</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 dark:text-blue-400 mr-3 text-xl">✓</span>
                <span>Easy navigation with client-side routing</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
