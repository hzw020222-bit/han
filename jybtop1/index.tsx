import React from 'react';

// 模拟工艺品数据，你可以根据实际库存（如奖牌、展示盒）修改
const products = [
  { id: 1, name: '精工纪念奖牌', price: '$29.00', image: 'https://images.unsplash.com/photo-1615486511484-92e172cc4fe0?w=400' },
  { id: 2, name: '高清亚克力展示盒', price: '$15.00', image: 'https://images.unsplash.com/photo-1590073844006-36939763e80c?w=400' },
  { id: 3, name: '定制收藏底座', price: '$12.00', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400' },
];

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* 导航栏 */}
      <nav className="flex justify-between items-center px-8 py-4 border-b">
        <div className="text-2xl font-bold tracking-tighter">CRAFT MASTER</div>
        <div className="space-x-6 flex items-center">
          <a href="#" className="hover:text-blue-600">全部商品</a>
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm hover:bg-gray-800 transition">
            Google 登录
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[450px] flex items-center justify-center bg-gray-50 overflow-hidden text-center">
        <div className="z-10 px-4">
          <h1 className="text-5xl font-extrabold mb-4 uppercase italic">精湛工艺，永恒瞬间</h1>
          <p className="text-lg text-gray-600 mb-8">为您心爱的收藏提供专业级展示空间</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700">
            立即选购
          </button>
        </div>
      </header>

      {/* 产品展示区 */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">热门单品</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="aspect-square bg-gray-100 overflow-hidden rounded-lg mb-4">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
              </div>
              <h3 className="text-lg font-medium">{product.name}</h3>
              <p className="text-gray-500 font-semibold">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-50 py-10 border-t text-center text-gray-400 text-sm">
        &copy; 2026 JYBTOP Store. Powered by Vercel & Cloudflare.
      </footer>
    </div>
  );
}
