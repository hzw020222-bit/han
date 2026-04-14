import Image from 'next/image';
import Link from 'next/link';

const products = [
  // 这里放你全部产品数据（和之前一样）
  { id: 1, name: "特朗普纪念币", title: "3PCS Trump 47th President Three Collectible Coins, Patriotic Design", price: 9.2, unit: "包（3个）", image: "/photo/jyb", stock: "充足", desc: "爱国设计特朗普47任总统纪念币，收藏级礼品，附保护盒。适合特朗普粉丝、爱国主题活动。" },
  { id: 2, name: "金色壁灯", title: "Golden Wall Lamp QS-BPWL-G-02-NEW", price: 23.4, unit: "个", image: "/photo/1", stock: "充足", desc: "高端金属工艺金色壁灯，现代简约设计，适合客厅、卧室、酒店装饰。" },
  { id: 3, name: "腰包", title: "Small Sling Backpack Crossbody Bags for Women Chest Bag", price: 5.5, unit: "个", image: "/photo/TLP-JN8", stock: "充足", desc: "时尚小胸包/斜挎包，多色可选，防水耐用，日常出行、旅行首选。" },
  { id: 4, name: "壁灯", title: "QS-3FSC-01 高端金属工艺壁灯", price: 22.5, unit: "个", image: "/photo/你的灯图片", stock: "充足", desc: "现代简约金属吊灯/壁灯，北欧风格，适合各种室内装饰。" },
  // 继续把你其他产品都复制进来（id 5~12），我这里先放4个做示例，你可以自己补全
  { id: 5, name: "马蹄铁", title: "3PCS Good Luck horseshoe-shaped gifts", price: 8.4, unit: "包（3个）", image: "/photo/1", stock: "充足", desc: "复古金属马蹄铁装饰，附标签，好运礼物，适合乡村婚礼、派对装饰。" },
  // ... 后面产品你照着格式继续加
];

export default function ProductDetail({ params }: { params: { id: string } }) {
  const product = products.find(p => p.id === parseInt(params.id));

  if (!product) {
    return <div className="text-center py-20">产品不存在</div>;
  }

  return (
    <>
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">📦</div>
            <span className="text-2xl font-bold">货盘展示</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/products" className="text-orange-600 hover:underline mb-8 inline-block">← 返回全部产品</Link>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* 左侧大图 */}
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>

          {/* 右侧信息 */}
          <div>
            <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-500 mb-6">{product.title}</p>
            
            <div className="flex items-center gap-4 mb-8">
              <span className="text-5xl font-semibold text-orange-600">${product.price}</span>
              <span className="text-xl text-gray-400">/ {product.unit}</span>
              <span className="bg-green-100 text-green-700 px-4 py-2 rounded-2xl text-sm font-medium">库存充足</span>
            </div>

            <div className="prose text-gray-600 leading-relaxed">
              {product.desc}
            </div>

            <div className="mt-12 pt-8 border-t">
              <p className="text-sm text-gray-400">仅供展示 · 价格为参考进货成本</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
