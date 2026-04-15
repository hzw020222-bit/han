import Image from 'next/image';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: "特朗普纪念币",
    title: "3PCS Trump 47th President Three Collectible Coins, Patriotic Design, Trump Memorial Coin Collector Christmas Holiday Gift with Protective Box（Non-circulating currency）",
    price: 9.2,
    unit: "包（3个）",
    images: ["/photo/产品首图/首图1.jpg"],
    stock: "充足",
    desc: "Whether Props Banknotes: Other Currency Prop Banknotes\nApplicable Age Group: 14 Years+\nColor: Golden, Silvery Grey\nNon-circulating currency",
    warehouse: "美国CA2号仓\n地址：13200 Loop Road, Fontana, CA, 92337\n联系人：黎广才\n联系电话：+1 9378600010"
  },
  {
    id: 2,
    name: "金色壁灯",
    title: "Golden Wall Lamp QS-BPWL-G-02-NEW 高端金属工艺壁灯",
    price: 23.4,
    unit: "个",
    images: ["/photo/1"],
    stock: "充足",
    desc: "QS-BPWL-G-02-NEW 高端金属工艺壁灯，现代简约设计，适合客厅、卧室、酒店装饰。",
    warehouse: "美东仓认证(Trmax)\n地址：1202A Airport Rd, North Brunswick Township, NJ 08902\n电话：6096137559\n收件人：Yan"
  },
  {
    id: 3,
    name: "腰包",
    title: "Small Sling Backpack Crossbody Bags for Women Chest Bag",
    price: 5.5,
    unit: "个",
    images: ["/photo/TLP-JN8"],
    stock: "充足",
    desc: "Stylish & Versatile Crossbody Design: This simple ladies chest bag combines fashion and function...",
    warehouse: "美东GA仓\n地址：1050 Northfield Ct, Ste 240, Roswell, GA 30076 USA\n电话：6784620469\n收件人：Ivan Zhang"
  },
  {
    id: 4,
    name: "壁灯",
    title: "QS-3FSC-01 高端金属工艺壁灯 现代简约设计",
    price: 22.5,
    unit: "个",
    images: ["/photo/你的灯图片"],   // 请改成实际文件名
    stock: "充足",
    desc: "QS-3FSC-01 高端金属工艺壁灯，现代简约设计，适合各种室内装饰。",
    warehouse: "美联达美西6号仓\n地址：4401 Eucalyptus Ave, Chino CA 91710\n联系人：Gary\n联系电话：9094090891 / 9297893222"
  },
  {
    id: 5,
    name: "马蹄铁",
    title: "3PCS Good Luck horseshoe-shaped gifts, retro metal horseshoe-shaped with kraft paper labels, country horse shoes gifts, retro wedding party decorations, Kentucky Derby party decorations, Valentine's Day decorations",
    price: 8.4,
    unit: "包（3个）",
    images: ["/photo/1"],
    stock: "充足",
    desc: "Regarding this product: You will receive: There are a total of 3 horseshoe-shaped decorations...",
    warehouse: "美国CA2号仓\n地址：13200 Loop Road, Fontana, CA, 92337\n联系人：黎广才\n联系电话：+1 9378600010"
  },
  {
    id: 6,
    name: "圣经钥匙",
    title: "Three-Piece Set wedding gift bottle openers mixed in 5 colors, retro skeleton key bottle openers, key bottle openers with guard tags, gift cards and key chains for guests' wedding gifts (one each in 5 colors)",
    price: 8.4,
    unit: "包（5把）",
    images: ["/photo/TLP-JN8"],
    stock: "充足",
    desc: "Regarding this commodity: You will receive :5 hollowed-out bottle openers...",
    warehouse: "美国CA2号仓\n地址：13200 Loop Road, Fontana, CA, 92337\n联系人：黎广才\n联系电话：+1 9378600010"
  },
  {
    id: 7,
    name: "圣经NFC项链",
    title: "Talking Cross Necklace, Openable Bible Pendant Metal Page, Christian Party Gift Jewelry, Religious Anniversary Engagement Birthday Gift 24 \"Gold-plated Amulet, Waterproof Hollowed-out Design, Daily Wear Can Change Family And Lover Photos",
    price: 10.8,
    unit: "个",
    images: ["/photo/cross"],
    stock: "充足",
    desc: "Cross Necklace - Openable Holy Bible Pendant. A talking necklace...",
    warehouse: "美国CA2号仓\n地址：13200 Loop Road, Fontana, CA, 92337\n联系人：黎广才\n联系电话：+1 9378600010"
  },
  {
    id: 8,
    name: "基督教纪念币",
    title: "3PCS Christian Commemorative Coins",
    price: 8.4,
    unit: "包（3个）",
    images: ["/photo/jyb"],
    stock: "充足",
    desc: "基督教主题纪念币，3个/包，适合宗教活动、收藏、送礼使用。",
    warehouse: "美国CA2号仓\n地址：13200 Loop Road, Fontana, CA, 92337\n联系人：黎广才\n联系电话：+1 9378600010"
  },
  {
    id: 9,
    name: "幸运头尾硬币",
    title: "3PCS Lucky Collectible Coins - Vintage Charm Heads and Tails - Bikini Youth Challenge Alloy Decorations,AnniversarySuitable for Sports Fans Poker Markers Coasters Car and Room Decorations Festival Gifts Handicrafts Men's Gifts Fun Gifts (Not Legal Tender)",
    price: 8.4,
    unit: "包（3个）",
    images: ["/photo/jyb"],
    stock: "充足",
    desc: "DISCLAIMER: This product is intended solely for personal entertainment collection and decorative purposes...",
    warehouse: "美国CA2号仓\n地址：13200 Loop Road, Fontana, CA, 92337\n联系人：黎广才\n联系电话：+1 9378600010"
  },
  {
    id: 10,
    name: "48个情侣积木",
    title: "48pcs Pink And White Couple Adult Game Building Blocks, Fun Date Nights, Romantic Couples, Exciting Stacking Blocks, Romantic Anniversary Valentine's Day Gifts, Chatting And Flirting Challenge Spicy Games, Party Supplies, Birthday Gifts",
    price: 16.2,
    unit: "盒（48根）",
    images: ["/photo/你的图片"],
    stock: "充足",
    desc: "You will receive: Quantity: 48 pink and white building blocks and one lucky head and tail coin...",
    warehouse: "美国CA2号仓\n地址：13200 Loop Road, Fontana, CA, 92337\n联系人：黎广才\n联系电话：+1 9378600010"
  },
  {
    id: 11,
    name: "情侣筛子",
    title: "Wooden Date Night Decision Dice, Valentine's Day, portable,Romantic Couple Dice Set, Night, Funny date night ldeas couple Game Set, Party supplies Funny Gift for Valentine's DayAnniversary, Birthday (including 5 dice)",
    price: 8.4,
    unit: "套（5个筛子+棋盘）",
    images: ["/photo/你的图片"],
    stock: "充足",
    desc: "You will receive: Gross Weight: 135g. The set includes:1 chessboard, 5 wooden dice and a black velvet bag...",
    warehouse: "美国CA2号仓\n地址：13200 Loop Road, Fontana, CA, 92337\n联系人：黎广才\n联系电话：+1 9378600010"
  },
  {
    id: 12,
    name: "特朗普生日贺卡",
    title: "Pop Up Birthday Card with Light & Sound Says Happy Birthday in Donald Trump REAL Voice for Men and Women, Mom & Dad, Husband or Wife",
    price: 12,
    unit: "个",
    images: ["/photo/你的图片"],
    stock: "充足",
    desc: "PATRIOTIC TALKING POP-UP BIRTHDAY CARD - Spark a lot of fun when someone opens this funny birthday card that LIGHTS UP! Suddenly HEAR President Donald Trump's booming voice...",
    warehouse: "美国CA2号仓\n地址：13200 Loop Road, Fontana, CA, 92337\n联系人：黎广才\n联系电话：+1 9378600010"
  }
];

export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">产品不存在</h2>
          <Link href="/products" className="text-orange-600 hover:underline">← 返回全部产品</Link>
        </div>
      </div>
    );
  }

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
            <Link href="/products" className="text-orange-600 font-semibold">全部产品</Link>
            
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

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/products" className="text-orange-600 hover:underline mb-8 inline-block">← 返回全部产品</Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 图片区 */}
          <div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-xl">
              <Image src={product.images[0]} alt={product.name} fill className="object-cover" />
            </div>
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

            {/* 产品描述 */}
            <div className="prose text-gray-600 leading-relaxed whitespace-pre-line mb-10">
              {product.desc}
            </div>

            {/* 发货仓库地址 */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5 text-sm">
              <div className="font-medium text-gray-900 mb-2">📦 发货仓库地址</div>
              <div className="whitespace-pre-line text-gray-600">
                {product.warehouse}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
