import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  title: string;
  price: number;
  unit: string;
  images: string[];     // ← 改成数组，支持多图
  stock: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className="block">
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 h-full">
        <div className="relative h-64 bg-gray-100">
          <Image
            src={product.images[0]}          // ← 显示第一张
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 300px"
          />
          {product.stock === '充足' && (
            <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              库存充足
            </div>
          )}
        </div>
        
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
          <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.title}</p>
          
          <div className="flex justify-between items-end">
            <div>
              <span className="text-2xl font-semibold text-orange-600">${product.price}</span>
              <span className="text-sm text-gray-400 ml-1">/ {product.unit}</span>
            </div>
            <div className="text-xs bg-orange-100 text-orange-700 px-3 py-1 rounded-lg">
              货盘展示
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
