import React from 'react';
import Link from 'next/link';

// 1. 商品数据
const productsData = [
  { 
    id: "1", 
    name: "金工艺品1", 
    price: "$29.00", 
    image: "/微信图片_20260310193212_9_21.jpg", 
    description: "这是第一款金工艺品的详细描述，纯手工制作。" 
  },
  { 
    id: "2", 
    name: "金工艺品2", 
    price: "$15.00", 
    image: "/微信图片_20260310193212_9_21.jpg", 
    description: "这是第二款金工艺品的详细描述，现代工艺设计。" 
  },
  { 
    id: "3", 
    name: "金工艺品3", 
    price: "$12.00", 
    image: "/微信图片_20260310193212_9_21.jpg", 
    description: "这是第三款金工艺品的详细描述，小巧精致。" 
  }
];

// ✅ 新增这个函数：告诉网站这三个 ID 是真实存在的，提前准备好页面
export async function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id,
  }));
}

export default function ProductDetail({ params }: { params: { id: string } }) {
  // ✅ 修改这里：使用 String() 强制转换，确保匹配成功
  const product = productsData.find(p => String(p.id) === String(params.id));

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl mb-4">抱歉，未找到该商品 (ID: {params.id})</h2>
        <Link href="/" className="text-blue-600">返回首页</Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <Link href="/" className="text-blue-600 mb-8 inline-block hover:underline">← 返回首页</Link>
      
      <div className="flex flex-col md:flex-row gap-12">
        <div className="w-full md:w-1/2">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full rounded-2xl shadow-lg object-cover aspect-square" 
          />
        </div>
        
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          <p className="text-3xl text-blue-600 font-bold mb-6">{product.price}</p>
          
          <div className="border-t border-b py-6 my-6">
            <h3 className="font-bold mb-2">商品详情介绍</h3>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>
          
          <button className="w-full bg-blue-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-blue-700 transition">
            咨询购买详情
          </button>
        </div>
      </div>
    </div>
  );
}
