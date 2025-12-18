import Link from "next/link";

const products = [
  { id: 1, name: "Product A", price: "$29.99", description: "High quality product" },
  { id: 2, name: "Product B", price: "$39.99", description: "Premium choice" },
  { id: 3, name: "Product C", price: "$49.99", description: "Best value" },
];

export default function ProductsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Link 
            key={product.id} 
            href={`/client/product/${product.id}`}
            className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow hover:shadow-lg transition-shadow"
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{product.name}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}