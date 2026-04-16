'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const products = [
  {
    id: 1,
    name: "特朗普纪念币",
    title: "3PCS Trump 47th President Three Collectible Coins, Patriotic Design, Trump Memorial Coin Collector Christmas Holiday Gift with Protective Box（Non-circulating currency）",
    price: 9.2,
    unit: "包（3个）",
    images: ["/photo/特朗普币/1.jpg","/photo/特朗普币/2.jpg","/photo/特朗普币/3.jpg","/photo/特朗普币/4.jpg","/photo/特朗普币/5.jpg","/photo/特朗普币/6.jpg","/photo/特朗普币/7.jpeg"],
    stock: "充足",
    desc: `Whether Props Banknotes: Other Currency Prop Banknotes
Applicable Age Group: 14 Years+
Color: Golden, Silvery Grey
Non-circulating currency`,
    warehouse: "美国CA2号仓\n地址：13200 Loop Road, Fontana, CA, 92337\n联系人：黎广才\n联系电话：+1 9378600010"
  },
  {
    id: 2,
    name: "金色壁灯",
    title: "Golden Wall Lamp QS-BPWL-G-02-NEW 高端金属工艺壁灯",
    price: 23.4,
    unit: "个",
    images: ["/photo/金色壁灯/1.jpg","/photo/金色壁灯/2.jpg","/photo/金色壁灯/3.jpg","/photo/金色壁灯/4.jpg","/photo/金色壁灯/5.jpg","/photo/金色壁灯/6.jpg","/photo/金色壁灯/7.jpg","/photo/金色壁灯/8.jpg","/photo/金色壁灯/9.jpg","/photo/金色壁灯/10.jpg","/photo/金色壁灯/11.jpg","/photo/金色壁灯/12.jpg",],
    stock: "充足",
    desc: `QS-BPWL-G-02-NEW 高端金属工艺壁灯，现代简约设计，适合客厅、卧室、酒店装饰。(标题和详情在tiktok或亚马逊上面拍照搜索同行的)`,
    warehouse: "美东仓认证(Trmax)\n地址：1202A Airport Rd, North Brunswick Township, NJ 08902\n电话：6096137559\n收件人：Yan"
  },
  {
    id: 3,
    name: "腰包",
    title: "Small Sling Bakpack Crossbody Bags for Women Chest Bag Cross Body Bag Fanny Pack for Outdoors Hiking Traveling,Crossbody Small Sling Backpack Sling Bag for Women Men,Mother's Day Gifts",
    price: 5.5,
    unit: "个",
    images: ["/photo/TLP-JN8"],
    stock: "充足",
    desc: `Stylish & Versatile Crossbody Design: This simple ladies chest bag combines fashion and function, offering a sleek design that works as a crossbody, shoulder bag, or sling pack, ideal for daily use, travel, shopping, and outdoor activities.
Compact Yet Spacious Storage: With multiple compartments, this bag offers ample space for your essentials and keeps them organized and secure.
Premium Material & Durable Craftsmanship: Made from high-quality, water-resistant fabric, this sling bag is durable and features smooth zippers for easy use.
Comfortable & Adjustable Fit: The adjustable strap ensures a comfortable, customized fit, reducing shoulder strain for all-day wear.
Perfect for Any Occasion & Great Gift Choice: Versatile and stylish, this bag is perfect for shopping, traveling, or errands, making it a great gift for women of all ages`,
    warehouse: "美东GA仓\n地址：1050 Northfield Ct, Ste 240, Roswell, GA 30076 USA\n电话：6784620469\n收件人：Ivan Zhang"
  },
  {
    id: 4,
    name: "农舍三头灯",
    title: "QS-3FSC-01 高端金属工艺壁灯 现代简约设计",
    price: 22.5,
    unit: "个",
    images: ["/photo/你的灯图片"],
    stock: "充足",
    desc: `QS-3FSC-01 高端金属工艺壁灯，现代简约设计，适合各种室内装饰。(标题和详情在tiktok或亚马逊上面拍照搜索同行的)`,
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
    desc: `Regarding this product:
You will receive: There are a total of 3 horseshoe-shaped decorations in the package, approximately 7x6 cm /2.8x2.4 inches in size, with sufficient ropes, approximately 30 cm /11.8 inches in length, and the label size is approximately 9x4.5 cm /3.5x1.8 inches; A sufficient quantity can easily meet your decoration needs
Horseshoe-shaped decoration expresses your love: You can give denim decoration as a gift to your family, friends, colleagues and loved ones to express your love and care, enhance relationships, and convey your concern and blessings. They will be very happy to receive the gift. Widely applicable: This horse party gift is perfect for country weddings, farm weddings, denim parties, Western parties, vintage weddings, and bridal showers Baby welcome parties, anniversary and horse-themed parties, leave a lasting impression on your guests and bring good luck to an interesting and romantic experience
Creative horse party gifts: The surface of our cowboy party gifts is in the shape of a cute horse, charming and full of rural flavor. The label is printed on the surface and features a hollowed-out heart-shaped decoration, making it even more exquisite and cute
Sturdy and reliable: Our horse shoe decorations are supported by high-quality metal alloys, featuring a bronze metallic luster, and are not prone to damage or rust. The labels are made of high-quality paper materials and can be safely used for your gift decorations`,
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
    desc: `Regarding this commodity
You will receive :5 hollowed-out bottle openers (one of each color) + 5 thank-you label cards + 5 key chains.
Suitable for various party styles: This perfect combination of party gifts is an excellent decoration for weddings, bridal gifts, welcome party gifts, birthdays, engagements, banquets, Christmas, housewarming banquets, etc.
❤ DIY card tags: Each key bottle opener comes with a thank-you tag.
You can express your gratitude and best wishes by writing or stamping on the back of the label. We believe they will be specialLike it and thank you for your meticulous preparation.
Unforgettable party gift: Practical, artistic and long-lasting hollowed-out bottle openers, for wedding parties orThe gifts, decorations and souvenirs for the bride's gift-giving event will be very important for your guests after the wedding or partyI will always remember your party gift!
Perfect guarantee: If our bottle opener fails to meet your requirements, please contact us and we will surely provide you with a satisfactory solution`,
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
    desc: `Cross Necklace - Openable Holy Bible Pendant
A talking necklace
Upon receiving the goods, we will send you a photo that has been pasted. You can replace the photo with your own. There will be a chip on the back of the photo. Take off the chip and stick it on the back of your own photo, then stick it inside the necklace. When your phone is close to the necklace, it will automatically speak and pop up a quote to encourage you to move forward. It's a great gift for friends and children.
Bible Page Turning Pendant Necklace (waterproof) This unique pendant features a Jesus portrait, embodying love and peace. It's a devout pendant, perfect for Christian jewelry enthusiasts. The hollow cross design adds a touch of religious fashion. Ideal for anniversaries, engagements, birthdays, or as a car hanging ornament. Enhance your prayer time with this meaningful piece.`,
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
    desc: `基督教主题纪念币，3个/包，适合宗教活动、收藏、送礼使用。`,
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
    desc: `DISCLAIMER: This product is intended solely for personal entertainment collection and decorative purposes. It is not a currency, financial instrument or investment product.
"Batteries Included:No
Containing magnetism: No
Color:3PCS
Suitable Age:Over 14 Years
Material: Zinc alloy
Plating:No Precious Metal Plated`,
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
    desc: `You will receive:
Quantity: 48 pink and white building blocks and one lucky head and tail coin
Individual stick size: 7cm*2.5cm*1.5cm/2.76in*0.98in*0.6in
The dimensions after stacking the building blocks: Height: 21cm/8.27 inches; Length: 7cm/2.71 inches; Width: 7cm/2.71 inches
Lust Tower Stacking: Our adult version of this classic game with hints and challenges is a fun and memorable Valentine's Day gift and activity. Use super naughty building block tower games to spice up date nights and increase the relationship between couples
High-quality materials: Our lust tower stacking mainly uses wood, which is durable, wear-resistant, crack-resistant and reusable. It can be used for adult couple games, which is very fun and interesting
Reusabl: This game is carefully made of high-quality wooden blocks with smooth edges and no burrs, ensuring repeated use, ensuring laughter and intimacy, everything is full of joyful spirit, can be reused, and is very convenient
Adult Stacking Block Game: Very suitable for adult stacking block games, this fun stacking tower game brings a touch of sensuality and humor to your holiday celebrations
Relationship Increase Gift: Using this gift can make the relationship between couples more intimate. Different gameplay will bring you different game experiences, and each game will make you feel very interesting`,
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
    desc: `You will receive:You will receive:
Gross Weight: 135g
The set includes:1 chessboard, 5 wooden dice and a black velvet bag and a lucky head and tail coin. Surprise your date.
ROMANTIC AND EXCITING This couples eveningcupe can add romance and excitement to vour datenight and quickly heat up your  relationship. Simplyroll the cube and let it decide what to do,
Suitable Scenarios Date Night Dice offers you theopportunity to create unforgettable memories inhonor of Valentine's  Day, wedding anniversaries
birthdays, dates and weddings.
Get Closer The cube dating game allows you toincrease intimacy with your partner, open up newareas of intimacy,  build connections through
interaction,explore the unknown, make your datenight memorable and special, and instantly bringyou closer to each other.
Durable & Portable They are wear-resistant,  crackresistant and reusable. They can usually be put inthe bag for organisation, not easy to lose,  are easyto carry and can be taken out directly, so you canspend a pleasant night.`,
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
    desc: `PATRIOTIC TALKING POP-UP BIRTHDAY CARD - Spark a lot of fun when someone opens this funny birthday card that LIGHTS UP! Suddenly HEAR President Donald Trump's booming voice wishing them a Happy Birthday!
The pop-up birthday cake fills the room with warm, joyful light and sound. One of the best Donald Trump gifts for men and women. A perfect gift for your husband, wife, parents,
and more MAKE SOMEONE'S BIRTHDAY GREAT AGAIN - When your friend or loved one opens up this awe-inspiring birthday card, our 45th President delivers a personal message to them with patriotic background music.
This is the greatest birthday card you can give somebody with or without a trump teddy bear or Biden toilet paper OUR FRIENDLY FOREST BRAND IS A ONE-WAY TICKET TO SMILE - In signature style, our cards, gifts,
and collectibles engage your senses in many ways. With new upgraded technology, our cards push the envelope - the light generates a pleasant atmosphere, and our president's voice wishes you a Happy Birthday.
Every feature works in perfect synchronization. Comes with a non-replaceable battery ready for hundreds of uses. POP OPEN THE OVAL OFFICE - When you open this fantastic talking celebration card, you’ll be magically
transported into the presidential Oval Office. From the popup wood desk to the flags proudly displayed in the background—even the paintings on the wall—you’ll feel like you’re right there, talking to the Commander
in Chief himself. You can even write a custom message on White House stationary for your loved ones with the Presidential seal of approval! FAMILY-OWNED SMALL BUSINESS - We pride ourselves in using only the
highest-quality materials in all of our products (pens, figures, cards, etc.); starting with premium paper, ceramic, and other high end materials through the durable glossy finish and colorful paint, all the
way to our state of the art light and audio technology. We know birthdays are special, so we try to make our cards as special as the celebrations you use them for!`,
    warehouse: "美国CA2号仓\n地址：13200 Loop Road, Fontana, CA, 92337\n联系人：黎广才\n联系电话：+1 9378600010"
  },
  {
    id: 13,
    name: "6寸美规面板灯（6只装）",
    title: "BesLowe 6 Packs 6 Inch 5CCT LED Recessed Ceiling Lights Ultra-Thin with Junction Box, 12W 150W Eqv, 3000K/3500K/4000K/5000K/6500K, 1200LM Dimmable Canless Downlights for Kitchen Hallway Dining Room",
    price: 25.2,
    unit: "6只",
    images: ["/photo/你的图片"],
    stock: "充足",
    desc: `5 Color Temperatures in One & Dimmable: This LED recessed lighting offers 5 color temperature options: 3000K (soft white), 3500K (warm white), 4000K (neutral white), 5000K (daylight white), or 6500K (cool white). Simply slide the switch on the junction box to select your desired color before installation. It is compatible with most dimmers (dimmer not included), allowing dimming from 5% to 100%.
Slim & Low-profile Design: Each light requires only 2 inches of clearance above the ceiling, making it suitable for various ceiling types and allowing installation around joists. The canless recessed lights create a clean ceiling appearance while enhancing the sense of space. Ideal for dining rooms, kitchens, living rooms, bedrooms, hallways, entryways, basements, offices, shopping malls, and other commercial areas.
Bright & Flicker-Free Performance: Equipped with a built-in LED chip, this 6-inch wafer light provides high brightness with low energy consumption. It uses 12 watts to produce 1200 lumens (150W equivalent), helping reduce electricity use. The low-profile recessed lighting delivers stable light without flickering, buzzing, or harsh glare.
Safe & Durable Construction: Made with heat-dissipating materials and an integrated sealing design, these LED downlights are IC-rated and suitable for damp locations. The spring clip holds the fixture securely against the ceiling. The panel projects a 180-degree beam angle to help illuminate darker areas of your home.
Easy to Install: The LED recessed light comes with clear instructions and all necessary mounting accessories. Installation involves three main steps: 1) Use the included round template to cut a 6.14-inch (155mm) hole in the ceiling. 2) Connect the wires. 3) Insert the light into the ceiling. You can install multiple recessed lights in under 30 minutes to update your home lighting.`,
    warehouse: "美国CA2号仓\n地址：13200 Loop Road, Fontana, CA, 92337\n联系人：黎广才\n联系电话：+1 9378600010"
  }
];

export default function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = React.use(params); // Next.js 15+ 需要这样写
  const product = products.find(p => p.id === parseInt(id));
  const [currentImage, setCurrentImage] = useState(0);

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
      {/* Navbar */}
      <nav className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 bg-orange-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">📦</div>
            <span className="text-2xl font-bold tracking-tight">货盘展示</span>
          </Link>
          <div className="hidden md:flex gap-8 text-sm font-medium items-center">
            <Link href="/" className="hover:text-orange-600 transition-colors">首页</Link>
            <Link href="/products" className="text-orange-600 font-semibold">全部产品</Link>
            <div className="relative group">
              <button className="hover:text-orange-600 transition-colors flex items-center gap-1">
                联系我们 <span className="text-xs">▼</span>
              </button>
              <div className="absolute right-0 mt-3 w-72 bg-white shadow-2xl rounded-2xl py-4 px-5 border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                <a href="mailto:3034279102@qq.com" className="flex items-center gap-3 px-4 py-3 hover:bg-orange-50 rounded-2xl transition-colors">
                  <span className="text-2xl">✉️</span>
                  <div>
                    <div className="font-medium text-gray-900">3034279102@qq.com</div>
                    <div className="text-xs text-gray-500">点击发送邮件</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/products" className="text-orange-600 hover:underline mb-8 inline-block">← 返回全部产品</Link>

        <div className="grid md:grid-cols-2 gap-12">
          {/* 图片区 - 多图切换 */}
          <div>
            {/* 主图 */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gray-100 shadow-xl">
              <Image 
                src={product.images[currentImage]} 
                alt={product.name} 
                fill 
                className="object-cover transition-all duration-300" 
              />
            </div>

            {/* 缩略图列表 */}
            {product.images.length > 1 && (
              <div className="flex gap-3 mt-6 overflow-x-auto pb-2">
                {product.images.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                      currentImage === index 
                        ? 'border-orange-600 scale-110' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
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

            <div className="prose text-gray-600 leading-relaxed whitespace-pre-line mb-10">
              {product.desc}
            </div>

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
