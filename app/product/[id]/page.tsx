import React from 'react';
import Link from 'next/link';

// 数据部分保持和首页一致
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

// 告诉 Vercel 提前生成这些页面
export async function generateStaticParams() {
  return productsData.map((product) => ({
    id: product.id,
  }));
}

// ✅ 关键点 1: 必须是 async 函数
// ✅ 关键点 2: params 必须定义为 Promise 类型
export default async function ProductDetail({ params }: { params: Promise<{ id: string }> }) {
  
  // ✅ 关键点 3: 必须加上 await 才能拿到真正的 id
  const resolvedParams = await params;
  const id = resolvedParams.id;
  
  // 查找匹配的商品
  const product = productsData.find(p => String(p.id) === String(id));

  // 如果找不到
  if (!product) {
    return (
      <div className="py-20 text-center">
        <h2 className="text-xl mb-4">抱歉，未找到该商品 (ID: {id})</h2>
        <Link href="/" className="text-blue-600">返回首页</Link>
      </div>
    );
  }

  // 渲染页面
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
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>
          
          <button className="w-full bg-blue-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-blue-700">
            咨询购买详情
          </button>
        </div>
      </div>
    </div>
  );
}
