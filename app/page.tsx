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
      images: ["/photo/产品首图/首图1.jpg"],           // ← 改成数组，即使只有一张也用 []
      stock: "充足",
    },
    {
      id: 2,
      name: "金色壁灯",
      title: "Golden Wall Lamp QS-BPWL-G-02-NEW 高端金属工艺壁灯",
      price: 23.4,
      unit: "个",
      images: ["/photo/产品首图/首图2.jpg"],             // ← 改成数组
      stock: "充足",
    },
    {
      id: 3,
      name: "腰包",
      title: "Small Sling Backpack Crossbody Bags for Women Chest Bag",
      price: 5.5,
      unit: "个",
      images: ["/photo/产品首图/首图3.jpeg"],       // ← 改成数组
      stock: "充足",
    },
    {
      id: 4,
      name: "壁灯",
      title: "QS-3FSC-01 高端金属工艺壁灯 现代简约设计",
      price: 22.5,
      unit: "个",
      images: ["/photo/产品首图/首图4.jpeg"],     // ← 改成你实际的文件名，记得用数组
      stock: "充足",
    },
  ];

  return (
    <>
            {/* Navbar - 统一美观版本 */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">📦</div>
            <span className="text-2xl font-bold tracking-tight">货盘展示</span>
          </Link>

          {/* 导航链接 */}
          <div className="hidden md:flex gap-8 text-sm font-medium items-center">
            <Link href="/" className="hover:text-orange-600 transition-colors">首页</Link>
            <Link href="/products" className="hover:text-orange-600 transition-colors">全部产品</Link>
            
            {/* 联系我们 - 下拉菜单 */}
            <div className="relative group">
              <button className="hover:text-orange-600 transition-colors flex items-center gap-1">
                联系我们
                <span className="text-xs">▼</span>
              </button>
              
              <div className="absolute right-0 mt-3 w-72 bg-white shadow-2xl rounded-2xl py-4 px-5 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <a 
                  href="mailto:3034279102@qq.com"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 rounded-2xl transition-colors"
                >
                  <span className="text-2xl">✉️</span>
                  <div>
                    <div className="font-medium text-gray-900">3034279102@qq.com</div>
                    <div className="text-xs text-gray-500">点击发送邮件</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* 右侧仓库信息 */}
          <div className="hidden sm:flex items-center gap-2 text-sm bg-gray-100 px-5 py-2.5 rounded-3xl font-medium">
            <span className="text-green-600">●</span>
            美国仓 | 现货充足
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
            货盘展示站
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
          </div>
        </div>
      </header>

      {/* Products Section */}
      <section id="products" className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-4xl font-bold">热门货盘产品</h2>
                   
          </div>
          <div className="text-orange-600 font-medium flex items-center gap-2 cursor-pointer hover:underline">
            
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
          © 2026 货盘展示站 | 仅作产品展示用途 
        </div>
      </footer>
    </>
  );
}
