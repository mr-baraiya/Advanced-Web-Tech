export default function About() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
            About Us
          </h1>
          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <p className="text-lg leading-relaxed">
              Welcome to our Advanced Web Technology project! This application is built using Next.js, 
              demonstrating modern web development practices and technologies.
            </p>
            <p className="text-lg leading-relaxed">
              We focus on creating responsive, performant, and user-friendly web applications 
              using the latest tools and frameworks in the industry.
            </p>
            <div className="mt-8">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Technologies Used
              </h2>
              <ul className="list-disc list-inside space-y-2">
                <li>Next.js 15</li>
                <li>React 19</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
