import Link from 'next/link';
import ProductCard from '../components/ProductCard';

export default function Home() {
    const products = [
    {
      id: 1,
      name: "特朗普纪念币",
      title: "3PCS Trump 47th President Three Collectible Coins, Patriotic Design",
      price: 9.2,
      unit: "包（3个）",
      image: "/photo/产品首图/首图1.jpg",           // ← 改成你实际的特朗普币图片文件名
      stock: "充足",
    },
    {
      id: 2,
      name: "金色壁灯",
      title: "Golden Wall Lamp QS-BPWL-G-02-NEW 高端金属工艺壁灯",
      price: 23.4,
      unit: "个",
      image: "/photo/产品首图/首图2.jpg",   // ← 改成实际文件名（public/photo/ 里的）
      stock: "充足",
    },
    {
      id: 3,
      name: "腰包",
      title: "Small Sling Backpack Crossbody Bags for Women Chest Bag",
      price: 5.5,
      unit: "个",
      image: "/photo/产品首图/首图3.jpeg",          // ← 改成包的实际图片文件名
      stock: "充足",
    },
    {
      id: 4,
      name: "壁灯",
      title: "QS-3FSC-01 高端金属工艺壁灯 现代简约设计",
      price: 22.5,
      unit: "个",
      image: "/photo/产品首图/首图4.jpeg", // ← 改成表格里倒数第二个灯的图片
      stock: "充足",
    },
  ];

  return (
    <>
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">📦</div>
            <div>
              <span className="text-2xl font-bold tracking-tight">货盘展示</span>
            </div>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#" className="hover:text-orange-600 transition-colors">首页</a>
            <a href="#" className="hover:text-orange-600 transition-colors">全部产品</a>
            <a href="#" className="hover:text-orange-600 transition-colors">关于货盘</a>
            <a href="#" className="hover:text-orange-600 transition-colors">联系我们</a>
          </div>
          <div className="text-sm bg-gray-100 px-5 py-2.5 rounded-2xl font-medium">
            美国CA2号仓 | 现货充足
          </div>
        </div>
      </nav>

      {/* Hero Banner */}
      <header className="bg-gradient-to-br from-orange-600 to-amber-700 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block bg-white/20 text-white text-xs tracking-widest px-6 py-2 rounded-3xl mb-6">
            原创设计 · 高品质
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            货盘产品展示站
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
             <br />
            仅供展示
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link 
          href="/products"
          className="bg-white text-orange-700 px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-transform inline-block"
            >
          浏览全部产品 ↓
            </Link>
            </a>
          </div>
        </div>
      </header>

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-bold">热门货盘产品</h2>
                //<p className="text-gray-500 mt-2">共 {products.length} 款 · 持续更新中</p>    
          </div>
          <div className="text-orange-600 font-medium flex items-center gap-2 cursor-pointer hover:underline">
            查看全部产品 →
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm">
          © 2026 货盘展示站 | 仅作产品展示用途 · 所有图片与价格仅供参考
        </div>
      </footer>
    </>
  );
}
