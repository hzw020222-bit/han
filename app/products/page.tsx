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
      images: ["/photo/jyb"],           // ← 必须是数组
      stock: "充足",
    },
    {
      id: 2,
      name: "金色壁灯",
      title: "Golden Wall Lamp QS-BPWL-G-02-NEW 高端金属工艺壁灯",
      price: 23.4,
      unit: "个",
      images: ["/photo/1"],
      stock: "充足",
    },
    {
      id: 3,
      name: "腰包",
      title: "Small Sling Backpack Crossbody Bags for Women Chest Bag",
      price: 5.5,
      unit: "个",
      images: ["/photo/TLP-JN8"],
      stock: "充足",
    },
    {
      id: 4,
      name: "壁灯",
      title: "QS-3FSC-01 高端金属工艺壁灯 现代简约设计",
      price: 22.5,
      unit: "个",
      images: ["/photo/你的灯图片"],     // ← 改成你实际文件名
      stock: "充足",
    },
    {
      id: 5,
      name: "马蹄铁",
      title: "3PCS Good Luck horseshoe-shaped gifts, retro metal horseshoe",
      price: 8.4,
      unit: "包（3个）",
      images: ["/photo/1"],
      stock: "充足",
    },
    {
      id: 6,
      name: "圣经钥匙",
      title: "Three-Piece Set wedding gift bottle openers mixed in 5 colors",
      price: 8.4,
      unit: "包（5把）",
      images: ["/photo/TLP-JN8"],
      stock: "充足",
    },
    {
      id: 7,
      name: "圣经NFC项链",
      title: "Talking Cross Necklace, Openable Bible Pendant",
      price: 10.8,
      unit: "个",
      images: ["/photo/cross"],
      stock: "充足",
    },
    {
      id: 8,
      name: "基督教纪念币",
      title: "3PCS Christian Commemorative Coins",
      price: 8.4,
      unit: "包（3个）",
      images: ["/photo/jyb"],
      stock: "充足",
    },
    {
      id: 9,
      name: "幸运头尾硬币",
      title: "3PCS Lucky Collectible Coins - Vintage Heads and Tails",
      price: 8.4,
      unit: "包（3个）",
      images: ["/photo/jyb"],
      stock: "充足",
    },
    {
      id: 10,
      name: "48个情侣积木",
      title: "48pcs Pink And White Couple Adult Game Building Blocks",
      price: 16.2,
      unit: "盒（48根）",
      images: ["/photo/你的图片"],       // ← 改成实际文件名
      stock: "充足",
    },
    {
      id: 11,
      name: "情侣筛子",
      title: "Wooden Date Night Decision Dice",
      price: 8.4,
      unit: "套（5个筛子+棋盘）",
      images: ["/photo/你的图片"],
      stock: "充足",
    },
    {
      id: 12,
      name: "特朗普生日贺卡",
      title: "Pop Up Birthday Card with Light & Sound - Trump Voice",
      price: 12,
      unit: "个",
      images: ["/photo/你的图片"],
      stock: "充足",
    },
  ];

  return (
    <>
      {/* 顶部导航栏（和首页保持一致） */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">📦</div>
            <span className="text-2xl font-bold tracking-tight">货盘展示</span>
          </Link>
            <div className="hidden md:flex gap-8 text-sm font-medium">
            <Link href="/" className="hover:text-orange-600 transition-colors">首页</Link>
            <Link href="/products" className="text-orange-600 font-semibold">全部产品</Link>
            <Link href="#" className="hover:text-orange-600 transition-colors">联系我们</Link>
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
