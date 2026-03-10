import React from 'react';
import Link from 'next/link';

export default function ProductDetail({ params }: { params: { id: string } }) {
  // 这里可以根据 ID 显示不同的内容，现在先做一个统一的漂亮模版
  return (
    <div className="max-w-4xl mx-auto py-20 px-4">
      <Link href="/" className="text-blue-600 mb-8 inline-block">← 返回首页</Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* 左侧大图 */}
        <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
          <img src={`/photo/${params.id}.jpg`} alt="商品详情" className="w-full h-full object-cover" />
        </div>
        
        {/* 右侧文字 */}
        <div>
          <h1 className="text-3xl font-bold mb-4">精美工艺品 - 编号 {params.id}</h1>
          <p className="text-2xl text-blue-600 font-bold mb-6">$99.00</p>
          <div className="prose text-gray-600 mb-8">
            <p>这是该工艺品的详细介绍。采用高品质材料，历经多道工序手工打造。</p>
            <ul className="list-disc pl-5 space-y-2 mt-4">
              <li>材质：优质金属/树脂</li>
              <li>尺寸：15cm x 15cm</li>
              <li>适用场景：家居装饰、收藏赠礼</li>
            </ul>
          </div>
          <button className="w-full bg-black text-white py-4 rounded-full font-bold hover:bg-gray-800 transition">
            立即咨询 / 购买
          </button>
        </div>
      </div>
    </div>
  );
}
