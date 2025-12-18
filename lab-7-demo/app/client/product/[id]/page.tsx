import Link from "next/link";

const products: Record<string, { name: string; price: string; description: string; details: string }> = {
  "1": { name: "Product A", price: "$29.99", description: "High quality product", details: "This is a high-quality product with excellent features and durability." },
  "2": { name: "Product B", price: "$39.99", description: "Premium choice", details: "Premium product with advanced features and superior performance." },
  "3": { name: "Product C", price: "$49.99", description: "Best value", details: "Best value product offering the most features for your money." },
};

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const product = products[params.id];

  if (!product) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h1>
        <Link href="/client/product" className="text-blue-600 hover:text-blue-700">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link href="/client/product" className="text-blue-600 hover:text-blue-700 mb-4 inline-block">
        ← Back to Products
      </Link>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">{product.name}</h1>
        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6">{product.price}</p>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
        <p className="text-gray-700 dark:text-gray-300 mb-8">{product.details}</p>
        
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-lg transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
}
