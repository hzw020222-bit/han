'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CodePet } from "@/components/CodePet";

export default function HomePage() {
  // 1. 定制案例（这里展示你们最拿手的工艺品类别）
  const cases = [
    { id: "1", name: '企业商务定制礼金', image: '/微信图片_20260310193212_9_21.jpg', tag: '商务馈赠' },
    { id: "2", name: '纪念奖杯与奖牌', image: '/微信图片_20260310193212_9_21.jpg', tag: '赛事纪念' },
    { id: "3", name: '手工金箔艺术品', image: '/微信图片_20260310193212_9_21.jpg', tag: '家居陈设' },
  ];

  const carouselImages = ["/微信图片_20260310193212_9_21.jpg"]; 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [carouselImages.length]);

  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* 顶部联系条 */}
      <div className="bg-[#B8860B] text-white py-2 px-8 flex justify-between text-sm font-medium">
        <span>高端工艺品定制源头工厂 | 20年匠心传承</span>
        <div className="space-x-4">
          <span>WhatsApp: +86 138XXXXXX</span>
          <span>Email: factory@jybtop1.com</span>
        </div>
      </div>

      {/* 导航栏 */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md flex justify-between items-center px-8 py-5 border-b">
        <div className="text-2xl font-serif font-bold text-[#B8860B]">JYB CRAFT</div>
        <div className="hidden md:flex space-x-10 font-bold text-xs uppercase tracking-[0.2em]">
          <a href="#about" className="hover:text-[#B8860B] transition">About Us</a>
          <a href="#products" className="hover:text-[#B8860B] transition">Collections</a>
          <a href="#process" className="hover:text-[#B8860B] transition">Customization</a>
          <a href="#contact" className="hover:text-[#B8860B] transition">Contact</a>
        </div>
      </nav>

      {/* 🌟 1. 艺术感画廊轮播 (Hero) */}
      <section className="relative h-[700px] bg-stone-900 overflow-hidden">
        {carouselImages.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-70' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <span className="text-[#B8860B] tracking-[0.3em] mb-4 text-sm font-bold uppercase">Heritage & Innovation</span>
          <h1 className="text-5xl md:text-7xl font-serif mb-8 max-w-4xl leading-tight">将每一份灵感，淬炼成永恒的艺术珍品</h1>
          <p className="text-lg md:text-xl mb-12 max-w-2xl font-light opacity-80 leading-relaxed">
            为您定制专属的企业礼赠、纪念收藏与文化周边。纯手工打磨，匠心定义每一份精致。
          </p>
          <a href="#contact" className="border-2 border-[#B8860B] text-[#B8860B] hover:bg-[#B8860B] hover:text-white px-12 py-4 text-lg font-bold transition-all duration-300">
            START YOUR DESIGN
          </a>
        </div>
      </section>

      {/* 🌟 2. 匠心故事 (About) */}
      <section id="about" className="py-24 px-4 bg-stone-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img src="/微信图片_20260310193212_9_21.jpg" className="shadow-2xl grayscale hover:grayscale-0 transition duration-700" />
            <div className="absolute -bottom-10 -right-10 bg-[#B8860B] p-10 text-white hidden md:block">
              <p className="text-4xl font-serif mb-2">20+</p>
              <p className="text-xs tracking-widest uppercase">Years of Artistry</p>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-4xl font-serif italic text-gray-800">匠心独运 · 始于1996</h2>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              在 JYB CRAFT，我们相信每一件工艺品都承载着独特的故事。从传统的金属铸造、精细的珐琅上色，到现代的3D建模与激光微刻，我们将古老技艺与现代技术完美融合。
            </p>
            <p className="text-gray-600 leading-relaxed text-lg font-light">
              我们为超过 500 家跨国企业提供高端定制服务，产品远销欧美、中东及东南亚地区。
            </p>
            <div className="flex gap-12 pt-4">
              <div><p className="text-xl font-bold text-[#B8860B]">SGS</p><p className="text-xs text-gray-400">认证工厂</p></div>
              <div><p className="text-xl font-bold text-[#B8860B]">100%</p><p className="text-xs text-gray-400">手工质检</p></div>
              <div><p className="text-xl font-bold text-[#B8860B]">OEM/ODM</p><p className="text-xs text-gray-400">柔性定制</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* 🌟 3. 定制分类展示 (Case) */}
      <section id="products" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl font-serif italic">定制类别展示</h2>
          <div className="w-12 h-[1px] bg-[#B8860B] mx-auto"></div>
          <p className="text-gray-400 text-sm tracking-widest uppercase">Our Craftsmanship Categories</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {cases.map((item) => (
            <div key={item.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-[3/4] mb-6">
                <img src={item.image} className="w-full h-full object-cover transition duration-1000 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition duration-500"></div>
                <div className="absolute bottom-6 left-6">
                  <span className="bg-white/90 text-black px-4 py-1 text-xs font-bold tracking-tighter uppercase">{item.tag}</span>
                </div>
              </div>
              <h3 className="text-2xl font-serif group-hover:text-[#B8860B] transition">{item.name}</h3>
              <Link href={`/product/${item.id}`} className="inline-block mt-4 text-xs font-bold border-b border-black pb-1 hover:border-[#B8860B] hover:text-[#B8860B] transition uppercase tracking-widest">Inquiry Details</Link>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 4. 定制服务流程 (Service) */}
      <section id="process" className="py-24 bg-stone-900 text-white px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
          {[
            { step: "I", title: "Consultation", desc: "专属顾问沟通需求" },
            { step: "II", title: "Design", desc: "手稿与3D效果预览" },
            { step: "III", title: "Casting", desc: "精工制造与手工打磨" },
            { step: "IV", title: "Delivery", desc: "礼盒包装与全球配送" },
          ].map((item, idx) => (
            <div key={idx} className="border border-white/10 p-10 text-center hover:border-[#B8860B] transition group">
              <div className="text-[#B8860B] font-serif text-3xl mb-6">{item.step}</div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-[#B8860B]">{item.title}</h4>
              <p className="text-gray-400 text-sm font-light leading-loose">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🌟 5. 联系表单 (Contact) */}
      <section id="contact" className="py-24 px-4">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl p-12 md:p-20 border-t-8 border-[#B8860B]">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif mb-4">开启您的定制旅程</h2>
            <p className="text-gray-400 font-light italic">Leave your message and we will respond within 12 hours.</p>
          </div>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Full Name *" className="w-full border-b border-gray-200 py-4 outline-none focus:border-[#B8860B] transition" required />
              <input type="email" placeholder="Email Address *" className="w-full border-b border-gray-200 py-4 outline-none focus:border-[#B8860B] transition" required />
            </div>
            <input type="text" placeholder="Subject (e.g., Corporate Trophy Customization)" className="w-full border-b border-gray-200 py-4 outline-none focus:border-[#B8860B] transition" />
            <textarea placeholder="Tell us about your project..." rows={4} className="w-full border-b border-gray-200 py-4 outline-none focus:border-[#B8860B] transition"></textarea>
            <div className="pt-8 flex justify-center">
              <button className="bg-black text-white px-16 py-4 hover:bg-[#B8860B] transition-all duration-300 font-bold uppercase tracking-widest text-sm">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 底部 */}
      <footer className="bg-stone-50 py-12 px-8 text-center text-[10px] text-gray-400 tracking-[0.2em] uppercase">
        <p className="mb-4">Global Shipping | Quality Guarantee | Custom Artistry</p>
        <p>&copy; 2026 JYB CRAFT ARTISTRY. All Rights Reserved.</p>
      </footer>
      <CodePet />
    </div>
  );
}
