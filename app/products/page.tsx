import ProductCard from '../../components/ProductCard';
import Link from 'next/link';

export default function AllProducts() {
    const products = [
    {
      id: 1,
      name: "特朗普纪念币",
      title: "3PCS Trump 47th President Three Collectible Coins, Patriotic Design",
      price: 9.2,
      unit: "包（3个）",
      images: ["/photo/特朗普币/2.jpg"],           // ← 必须是数组
      stock: "充足",
    },
    {
      id: 2,
      name: "金色壁灯",
      title: "Golden Wall Lamp QS-BPWL-G-02-NEW 高端金属工艺壁灯",
      price: 23.4,
      unit: "个",
      images: ["/photo/金色壁灯/1.jpg"],
      stock: "充足",
    },
    {
      id: 3,
      name: "腰包",
      title: "Small Sling Backpack Crossbody Bags for Women Chest Bag",
      price: 5.5,
      unit: "个",
      images: ["/photo/腰包/1.jpeg"],
      stock: "充足",
    },
    {
      id: 4,
      name: "农舍三头灯",
      title: "QS-3FSC-01 高端金属工艺壁灯 现代简约设计",
      price: 22.5,
      unit: "个",
      images: ["/photo/农舍三头灯/1.jpeg"],     // ← 改成你实际文件名
      stock: "充足",
    },
    {
      id: 5,
      name: "马蹄铁",
      title: "3PCS Good Luck horseshoe-shaped gifts, retro metal horseshoe",
      price: 8.4,
      unit: "包（3个）",
      images: ["/photo/马蹄铁/1.jpg"],
      stock: "充足",
    },
    {
      id: 6,
      name: "圣经钥匙",
      title: "Three-Piece Set wedding gift bottle openers mixed in 5 colors",
      price: 8.4,
      unit: "包（5把）",
      images: ["/photo/圣经钥匙/1.jpeg"],
      stock: "充足",
    },
    {
      id: 7,
      name: "圣经NFC项链",
      title: "Talking Cross Necklace, Openable Bible Pendant",
      price: 10.8,
      unit: "个",
      images: ["/photo/圣经NFC项链/1.jpg"],
      stock: "充足",
    },
    {
      id: 8,
      name: "基督教纪念币",
      title: "3PCS Christian Commemorative Coins",
      price: 8.4,
      unit: "包（3个）",
      images: ["/photo/基督币/2.jpg"],
      stock: "充足",
    },
    {
      id: 9,
      name: "幸运头尾硬币",
      title: "3PCS Lucky Collectible Coins - Vintage Heads and Tails",
      price: 8.4,
      unit: "包（3个）",
      images: ["/photo/幸运币/6.jpg"],
      stock: "充足",
    },
    {
      id: 10,
      name: "48个情侣积木",
      title: "48pcs Pink And White Couple Adult Game Building Blocks",
      price: 16.2,
      unit: "盒（48根）",
      images: ["/photo/积木/1.png"],       // ← 改成实际文件名
      stock: "充足",
    },
    {
      id: 11,
      name: "情侣筛子",
      title: "Wooden Date Night Decision Dice",
      price: 8.4,
      unit: "套（5个筛子+棋盘）",
      images: ["/photo/筛子/1.jpeg"],
      stock: "充足",
    },
    {
      id: 12,
      name: "特朗普生日贺卡",
      title: "Pop Up Birthday Card with Light & Sound - Trump Voice",
      price: 12,
      unit: "个",
      images: ["/photo/特朗普贺卡/1.jpg"],
      stock: "充足",
    },
    {
      id: 13,
      name: "6寸美规面板灯（6只装）",
      title: "QS-PL-YL6-12W",
      price: 25.2,
      unit: "6只",
      images: ["/photo/面板灯/1.jpeg"],
      stock: "充足",
    },
    {
      id: 14,
      name: "开瓶器",
      title: "Messi #10 Jersey Wine Opener - Zinc Alloy Football Collector's Item",
      price: 30,
      unit: "套",
      images: ["/photo/开瓶器/1.jpg"],
      stock: "充足",
    },
    {
      id: 15,
      name: "250周年纪念币",
      title: "5PCS 250th US Anniversary Commemorative Coin Set - Honor 250 Years of American Independence",
      price: 10.8,
      unit: "包（5个）",
      images: ["/photo/250周年/1.jpg"],
      stock: "充足",
    },
  ];

  return (
    <>
            {/* Navbar - 统一美观版本 + 下拉菜单 */}
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
            <Link href="/products" className="text-orange-600 font-semibold">全部产品</Link>
            
            {/* 联系我们 - 下拉菜单 */}
            <div className="relative group">
              <button className="hover:text-orange-600 transition-colors flex items-center gap-1">
                联系我们
                <span className="text-xs">▼</span>
              </button>
              
              {/* 下拉菜单内容 */}
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

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold">全部货盘产品</h1>
          
          </div>
          <Link href="/" className="text-orange-600 hover:underline flex items-center gap-1">
            ← 返回首页
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm">
          © 2026 货盘展示站 | 仅作产品展示用途 · 所有图片与价格仅供参考
        </div>
      </footer>
    </>
  );
}
