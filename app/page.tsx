import React from 'react';

// 模拟工艺品数据，你可以根据实际售卖的工艺品修改图片和价格
const products = [
  { id: 1, name: '金工艺品1', price: '$29.00', image: '微信图片_20260310193212_9_21.jpg' },
  { id: 2, name: '金工艺品2', price: '$15.00', image: '微信图片_20260310193212_9_21.jpg' },
  { id: 3, name: '金工艺品3', price: '$12.00', image: '微信图片_20260310193212_9_21.jpg' },
];

export default function HomePage() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* 导航栏 - 去掉了登录逻辑，改为简洁的导航 */}
      <nav className="flex justify-between items-center px-8 py-4 border-b">
        <div className="text-2xl font-bold tracking-tighter text-blue-600">JYB CRAFT</div>
        <div className="space-x-6 flex items-center">
          <a href="#" className="text-sm font-medium hover:text-blue-600">所有商品</a>
          <a href="#" className="text-sm font-medium hover:text-blue-600">关于我们</a>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition">
            联系客服
          </button>
        </div>
      </nav>

      {/* 主视觉区域 (Hero Section) */}
      <header className="relative h-[500px] flex items-center justify-center bg-slate-50 overflow-hidden text-center">
        <div className="z-10 px-4">
          <h1 className="text-5xl font-extrabold mb-4 uppercase tracking-tight">精湛工艺 · 永恒瞬间</h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            为您心爱的收藏提供专业级展示空间，让每一份回忆都闪耀光芒。
          </p>
          <div className="flex justify-center gap-4">
            <button className="bg-black text-white px-8 py-3 rounded-md text-lg font-bold hover:bg-gray-800 transition">
              立即选购
            </button>
            <button className="border-2 border-black text-black px-8 py-3 rounded-md text-lg font-bold hover:bg-gray-100 transition">
              了解更多
            </button>
          </div>
        </div>
        {/* 背景装饰块 */}
        <div className="absolute top-0 right-0 w-1/4 h-full bg-blue-50 -skew-x-12 transform translate-x-20"></div>
      </header>

      {/* 产品展示区 */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold">热门单品</h2>
            <p className="text-gray-400">最新上架的工艺礼品</p>
          </div>
          <a href="#" className="text-blue-600 font-semibold border-b-2 border-blue-600">查看全部 &rarr;</a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square bg-gray-100 overflow-hidden rounded-xl mb-5 shadow-sm">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500" 
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{product.name}</h3>
              <p className="text-blue-600 font-mono text-lg">{product.price}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 底部信息 */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">JYB CRAFT STORE</div>
          <p className="text-gray-400 mb-8">专注于高品质工艺品与展示方案</p>
          <div className="border-t border-gray-800 pt-8 text-sm text-gray-500">
            &copy; 2026 JYBTOP1.COM. 版权所有.
          </div>
        </div>
      </footer>
    </div>
  );
}
