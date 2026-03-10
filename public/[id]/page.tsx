import React from 'react';
import Link from 'next/link';
// 这里假设你把数据放在了同一个文件或者导入进来
import { productsData } from '../../data'; 

export default function ProductDetail({ params }: { params: { id: string } }) {
  // 核心逻辑：从数据表里找到那个 ID 一致的商品
  const product = productsData.find(p => p.id === params.id);

  // 如果找不到（比如用户乱输 ID），显示错误提示
  if (!product) {
    return <div className="py-20 text-center">商品不存在</div>;
  }

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
      <Link href="/" className="text-blue-600 mb-8 inline-block hover:underline">← 返回首页</Link>
      
      <div className="flex flex-col md:flex-row gap-12">
        {/* 这里会自动加载对应 ID 的图片 */}
        <div className="w-full md:w-1/2">
          <img src={product.image} alt={product.name} className="w-full rounded-2xl shadow-lg" />
        </div>
        
        <div className="w-full md:w-1/2">
          {/* 这里会自动加载对应 ID 的名字 */}
          <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
          {/* 这里会自动加载对应 ID 的价格 */}
          <p className="text-3xl text-blue-600 font-bold mb-6">{product.price}</p>
          
          <div className="border-t border-b py-6 my-6">
            <h3 className="font-bold mb-2">商品详情</h3>
            {/* 这里会自动加载对应 ID 的描述 */}
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>
          
          <button className="w-full bg-blue-600 text-white py-4 rounded-lg text-xl font-bold hover:bg-blue-700">
            立即下单
          </button>
        </div>
      </div>
    </div>
  );
}
