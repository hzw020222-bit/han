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
    desc: "Whether Props Banknotes: Other Currency Prop Banknotes\nApplicable Age Group: 14 Years+\nColor: Golden, Silvery Grey\nNon-circulating currency"
  },
  {
    id: 2,
    name: "金色壁灯",
    title: "Golden Wall Lamp QS-BPWL-G-02-NEW 高端金属工艺壁灯",
    price: 23.4,
    unit: "个",
    images: ["/photo/1"],
    stock: "充足",
    desc: "QS-BPWL-G-02-NEW 高端金属工艺壁灯，现代简约设计，适合客厅、卧室、酒店装饰。"
  },
  {
    id: 3,
    name: "腰包",
    title: "Small Sling Backpack Crossbody Bags for Women Chest Bag",
    price: 5.5,
    unit: "个",
    images: ["/photo/TLP-JN8"],
    stock: "充足",
    desc: "Stylish & Versatile Crossbody Design: This simple ladies chest bag combines fashion and function, offering a sleek design that works as a crossbody, shoulder bag, or sling pack, ideal for daily use, travel, shopping, and outdoor activities. Compact Yet Spacious Storage: With multiple compartments, this bag offers ample space for your essentials and keeps them organized and secure. Premium Material & Durable Craftsmanship: Made from high-quality, water-resistant fabric, this sling bag is durable and features smooth zippers for easy use. Comfortable & Adjustable Fit: The adjustable strap ensures a comfortable, customized fit, reducing shoulder strain for all-day wear. Perfect for Any Occasion & Great Gift Choice: Versatile and stylish, this bag is perfect for shopping, traveling, or errands, making it a great gift for women of all ages."
  },
  {
    id: 4,
    name: "壁灯",
    title: "QS-3FSC-01 高端金属工艺壁灯 现代简约设计",
    price: 22.5,
    unit: "个",
    images: ["/photo/你的灯图片"],   // 请改成实际文件名
    stock: "充足",
    desc: "QS-3FSC-01 高端金属工艺壁灯，现代简约设计，适合各种室内装饰。"
  },
  {
    id: 5,
    name: "马蹄铁",
    title: "3PCS Good Luck horseshoe-shaped gifts, retro metal horseshoe-shaped with kraft paper labels, country horse shoes gifts, retro wedding party decorations, Kentucky Derby party decorations, Valentine's Day decorations",
    price: 8.4,
    unit: "包（3个）",
    images: ["/photo/1"],
    stock: "充足",
    desc: "Regarding this product: You will receive: There are a total of 3 horseshoe-shaped decorations in the package, approximately 7x6 cm /2.8x2.4 inches in size, with sufficient ropes, approximately 30 cm /11.8 inches in length, and the label size is approximately 9x4.5 cm /3.5x1.8 inches; A sufficient quantity can easily meet your decoration needs. Horseshoe-shaped decoration expresses your love: You can give denim decoration as a gift to your family, friends, colleagues and loved ones to express your love and care, enhance relationships, and convey your concern and blessings. They will be very happy to receive the gift. Widely applicable: This horse party gift is perfect for country weddings, farm weddings, denim parties, Western parties, vintage weddings, and bridal showers Baby welcome parties, anniversary and horse-themed parties, leave a lasting impression on your guests and bring good luck to an interesting and romantic experience. Creative horse party gifts: The surface of our cowboy party gifts is in the shape of a cute horse, charming and full of rural flavor. The label is printed on the surface and features a hollowed-out heart-shaped decoration, making it even more exquisite and cute. Sturdy and reliable: Our horse shoe decorations are supported by high-quality metal alloys, featuring a bronze metallic luster, and are not prone to damage or rust. The labels are made of high-quality paper materials and can be safely used for your gift decorations."
  },
  {
    id: 6,
    name: "圣经钥匙",
    title: "Three-Piece Set wedding gift bottle openers mixed in 5 colors, retro skeleton key bottle openers, key bottle openers with guard tags, gift cards and key chains for guests' wedding gifts (one each in 5 colors)",
    price: 8.4,
    unit: "包（5把）",
    images: ["/photo/TLP-JN8"],
    stock: "充足",
    desc: "Regarding this commodity: You will receive :5 hollowed-out bottle openers (one of each color) + 5 thank-you label cards + 5 key chains. Suitable for various party styles: This perfect combination of party gifts is an excellent decoration for weddings, bridal gifts, welcome party gifts, birthdays, engagements, banquets, Christmas, housewarming banquets, etc. ❤ DIY card tags: Each key bottle opener comes with a thank-you tag. You can express your gratitude and best wishes by writing or stamping on the back of the label. We believe they will be specialLike it and thank you for your meticulous preparation. Unforgettable party gift: Practical, artistic and long-lasting hollowed-out bottle openers, for wedding parties orThe gifts, decorations and souvenirs for the bride's gift-giving event will be very important for your guests after the wedding or partyI will always remember your party gift! Perfect guarantee: If our bottle opener fails to meet your requirements, please contact us and we will surely provide you with a satisfactory solution."
  },
  {
    id: 7,
    name: "圣经NFC项链",
    title: "Talking Cross Necklace, Openable Bible Pendant Metal Page, Christian Party Gift Jewelry, Religious Anniversary Engagement Birthday Gift 24 \"Gold-plated Amulet, Waterproof Hollowed-out Design, Daily Wear Can Change Family And Lover Photos",
    price: 10.8,
    unit: "个",
    images: ["/photo/cross"],
    stock: "充足",
    desc: "Cross Necklace - Openable Holy Bible Pendant. A talking necklace. Upon receiving the goods, we will send you a photo that has been pasted. You can replace the photo with your own. There will be a chip on the back of the photo. Take off the chip and stick it on the back of your own photo, then stick it inside the necklace. When your phone is close to the necklace, it will automatically speak and pop up a quote to encourage you to move forward. It's a great gift for friends and children. Bible Page Turning Pendant Necklace (waterproof) This unique pendant features a Jesus portrait, embodying love and peace. It's a devout pendant, perfect for Christian jewelry enthusiasts. The hollow cross design adds a touch of religious fashion. Ideal for anniversaries, engagements, birthdays, or as a car hanging ornament. Enhance your prayer time with this meaningful piece."
  },
  {
    id: 8,
    name: "基督教纪念币",
    title: "3PCS Christian Commemorative Coins",
    price: 8.4,
    unit: "包（3个）",
    images: ["/photo/jyb"],
    stock: "充足",
    desc: "基督教主题纪念币，3个/包，适合宗教活动、收藏、送礼使用。"
  },
  {
    id: 9,
    name: "幸运头尾硬币",
    title: "3PCS Lucky Collectible Coins - Vintage Charm Heads and Tails - Bikini Youth Challenge Alloy Decorations,AnniversarySuitable for Sports Fans Poker Markers Coasters Car and Room Decorations Festival Gifts Handicrafts Men's Gifts Fun Gifts (Not Legal Tender)",
    price: 8.4,
    unit: "包（3个）",
    images: ["/photo/jyb"],
    stock: "充足",
    desc: "DISCLAIMER: This product is intended solely for personal entertainment collection and decorative purposes. It is not a currency, financial instrument or investment product. \"Batteries Included:No Containing magnetism: No Color:3PCS Suitable Age:Over 14 Years Material: Zinc alloy Plating:No Precious Metal Plated"
  },
  {
    id: 10,
    name: "48个情侣积木",
    title: "48pcs Pink And White Couple Adult Game Building Blocks, Fun Date Nights, Romantic Couples, Exciting Stacking Blocks, Romantic Anniversary Valentine's Day Gifts, Chatting And Flirting Challenge Spicy Games, Party Supplies, Birthday Gifts",
    price: 16.2,
    unit: "盒（48根）",
    images: ["/photo/你的图片"],
    stock: "充足",
    desc: "You will receive: Quantity: 48 pink and white building blocks and one lucky head and tail coin. Individual stick size: 7cm*2.5cm*1.5cm/2.76in*0.98in*0.6in. The dimensions after stacking the building blocks: Height: 21cm/8.27 inches; Length: 7cm/2.71 inches; Width: 7cm/2.71 inches. Lust Tower Stacking: Our adult version of this classic game with hints and challenges is a fun and memorable Valentine's Day gift and activity."
  },
  {
    id: 11,
    name: "情侣筛子",
    title: "Wooden Date Night Decision Dice, Valentine's Day, portable,Romantic Couple Dice Set, Night, Funny date night ldeas couple Game Set, Party supplies Funny Gift for Valentine's DayAnniversary, Birthday (including 5 dice)",
    price: 8.4,
    unit: "套（5个筛子+棋盘）",
    images: ["/photo/你的图片"],
    stock: "充足",
    desc: "You will receive: Gross Weight: 135g. The set includes:1 chessboard, 5 wooden dice and a black velvet bag and a lucky head and tail coin. Surprise your date. ROMANTIC AND EXCITING This couples eveningcupe can add romance and excitement to vour datenight and quickly heat up your relationship."
  },
  {
    id: 12,
    name: "特朗普生日贺卡",
    title: "Pop Up Birthday Card with Light & Sound Says Happy Birthday in Donald Trump REAL Voice for Men and Women, Mom & Dad, Husband or Wife",
    price: 12,
    unit: "个",
    images: ["/photo/你的图片"],
    stock: "充足",
    desc: "PATRIOTIC TALKING POP-UP BIRTHDAY CARD - Spark a lot of fun when someone opens this funny birthday card that LIGHTS UP! Suddenly HEAR President Donald Trump's booming voice wishing them a Happy Birthday! The pop-up birthday cake fills the room with warm, joyful light and sound."
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
