'use client'; 

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// 1. 商品数据
const products = [
  { id: "1", name: '金工艺品1', price: '$29.00', image: '/微信图片_20260310193212_9_21.jpg', url: '/product/1' },
  { id: "2", name: '金工艺品2', price: '$15.00', image: '/微信图片_20260310193212_9_21.jpg', url: '/product/2' },
  { id: "3", name: '金工艺品3', price: '$12.00', image: '/微信图片_20260310193212_9_21.jpg', url: '/product/3' },
];

export default function HomePage() {
  // 2. 轮播图数组（如果图片没上传，这里会显示空白，建议先上传 factory1.jpg 等）
  const carouselImages = [
    "/微信图片_20260310193212_9_21.jpg", 
    "/微信图片_20260310193212_9_21.jpg", 
    "/微信图片_20260310193212_9_21.jpg",
    "/微信图片_20260310193212_9_21.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* 导航栏 */}
      <nav className="flex justify-between items-center px-8 py-4 border-b">
        <div className="text-2xl font-bold tracking-tighter text-blue-600">JYB CRAFT</div>
        <div className="space-x-6 flex items-center">
          <a href="#" className="text-sm font-medium hover:text-blue-600">所有商品</a>
          <button className="bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-blue-700">
            联系客服
          </button>
        </div>
      </nav>

      {/* 🌟 调整位置后的【工厂简介】（现在在最上面） */}
      <section className="bg-slate-900 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          {/* 左侧：文字 */}
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold border-l-4 border-blue-600 pl-4">工厂简介</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              JYB CRAFT 拥有占地 5000 平米的现代化厂房。我们不仅支持 TikTok Shop, Temu, Shein 等平台的快速供货，更拥有独立的设计研发团队，确保每一件产品都符合国际高标准。
            </p>
            <div className="flex gap-8">
              <div><div className="text-2xl font-bold text-blue-400">10+</div><div className="text-sm text-gray-400">经验</div></div>
              <div><div className="text-2xl font-bold text-blue-400">5000㎡</div><div className="text-sm text-gray-400">面积</div></div>
            </div>
          </div>
          {/* 右侧：轮播图 */}
          <div className="w-full md:w-1/2">
            <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
              {carouselImages.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  alt="Factory Slide"
                />
              ))}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {carouselImages.map((_, index) => (
                  <div key={index} className={`h-1.5 w-1.5 rounded-full ${index === currentIndex ? 'bg-blue-600 w-4' : 'bg-white/50'}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 调整位置后的【Hero Slogan】（现在在简介下面） */}
      <header className="relative h-[300px] flex items-center justify-center bg-slate-50 text-center border-b">
        <div className="z-10 px-4">
          <h1 className="text-5xl font-extrabold mb-4 uppercase">精湛工艺 · 永恒瞬间</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">JYB CRAFT 工厂直供，为您提供专业级工艺礼品。</p>
        </div>
      </header>

      {/* 产品展示区 */}
      <section className="max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">热门单品</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {products.map((product) => (
            <Link key={product.id} href={product.url} className="group block">
              <div className="aspect-square bg-gray-100 overflow-hidden rounded-xl mb-4 shadow-sm">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <h3 className="text-xl font-bold group-hover:text-blue-600">{product.name}</h3>
              <p className="text-blue-600 font-mono text-lg">{product.price}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* 底部 */}
      <footer className="bg-gray-100 py-8 text-center text-gray-500 text-sm">
        &copy; 2026 JYBTOP1.COM. 版权所有.
      </footer>
    </div>
  );
}
