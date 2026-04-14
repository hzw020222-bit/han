import Image from 'next/image';
import Link from 'next/link';

const products = [
  { id: 1, name: "特朗普纪念币", title: "3PCS Trump 47th President Three Collectible Coins, Patriotic Design", price: 9.2, unit: "包（3个）", images: ["/photo/jyb"], stock: "充足", desc: "3个/包 特朗普47任总统纪念币，金色/银色设计，带保护盒。适合收藏、送礼、爱国主题活动使用。" },
  { id: 2, name: "金色壁灯", title: "Golden Wall Lamp QS-BPWL-G-02-NEW 高端金属工艺壁灯", price: 23.4, unit: "个", images: ["/photo/1"], stock: "充足", desc: "高端金色金属壁灯，现代简约设计，适合客厅、卧室、酒店等空间装饰。" },
  { id: 3, name: "腰包", title: "Small Sling Backpack Crossbody Bags for Women Chest Bag", price: 5.5, unit: "个", images: ["/photo/TLP-JN8"], stock: "充足", desc: "时尚小胸包/斜挎包，多色可选，防水耐用，日常出行、旅行、购物首选。" },
  { id: 4, name: "壁灯", title: "QS-3FSC-01 高端金属工艺壁灯 现代简约设计", price: 22.5, unit: "个", images: ["/photo/你的灯图片"], stock: "充足", desc: "现代简约金属壁灯/吊灯，北欧风格，高品质工艺，适合各种室内装饰。" },
  { id: 5, name: "马蹄铁", title: "3PCS Good Luck horseshoe-shaped gifts, retro metal horseshoe", price: 8.4, unit: "包（3个）", images: ["/photo/1"], stock: "充足", desc: "复古金属马蹄铁装饰礼品，附 kraft 纸标签，好运象征，适合乡村婚礼、派对装饰。" },
  { id: 6, name: "圣经钥匙", title: "Three-Piece Set wedding gift bottle openers mixed in 5 colors", price: 8.4, unit: "包（5把）", images: ["/photo/TLP-JN8"], stock: "充足", desc: "5把/包（5种颜色）开瓶器 + 感谢卡 + 钥匙链，适合婚礼、派对、纪念日礼物。" },
  { id: 7, name: "圣经NFC项链", title: "Talking Cross Necklace, Openable Bible Pendant", price: 10.8, unit: "个", images: ["/photo/cross"], stock: "充足", desc: "可打开的圣经项链，内置NFC芯片，可放入照片并播放鼓励语音，基督教礼物。" },
  { id: 8, name: "基督教纪念币", title: "3PCS Christian Commemorative Coins", price: 8.4, unit: "包（3个）", images: ["/photo/jyb"], stock: "充足", desc: "基督教主题纪念币，3个/包，适合宗教活动、收藏、送礼使用。" },
  { id: 9, name: "幸运头尾硬币", title: "3PCS Lucky Collectible Coins - Vintage Heads and Tails", price: 8.4, unit: "包（3个）", images: ["/photo/jyb"], stock: "充足", desc: "复古幸运头尾硬币，3个/包，娱乐收藏装饰用，非流通货币。" },
  { id: 10, name: "48个情侣积木", title: "48pcs Pink And White Couple Adult Game Building Blocks", price: 16.2, unit: "盒（48根）", images: ["/photo/你的图片"], stock: "充足", desc: "情侣成人游戏积木，48根/盒，增加情趣、适合情人节、纪念日使用。" },
  { id: 11, name: "情侣筛子", title: "Wooden Date Night Decision Dice", price: 8.4, unit: "套（5个筛子+棋盘）", images: ["/photo/你的图片"], stock: "充足", desc: "情侣约会决策骰子，浪漫互动游戏，附绒布袋，适合情侣夜晚使用。" },
  { id: 12, name: "特朗普生日贺卡", title: "Pop Up Birthday Card with Light & Sound - Trump Voice", price: 12, unit: "个", images: ["/photo/你的图片"], stock: "充足", desc: "特朗普语音生日贺卡，打开会发光+播放特朗普语音，趣味生日礼物。" },
];

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">产品不存在</h2>
          <Link href="/products" className="text-orange-600 hover:underline">
            ← 返回全部产品
          </Link>
        </div>
      </div>
    );
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
          <div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-xl">
              <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
            </div>
          </div>

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
          </div>
        </div>
      </div>
    </>
  );
}
