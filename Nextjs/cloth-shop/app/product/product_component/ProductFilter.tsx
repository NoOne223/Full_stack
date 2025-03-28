'use client'
import ListSelect from '@/components/filter/ListSelect'
import SearchBar from '@/components/filter/SearchBar';
import React, { useState } from 'react'

const product = [
  { id: 1, name: "Tất cả" },
  { id: 2, name: "Quần áo" },
  { id: 3, name: "Phụ kiện" },
];

const category = [
  { id: 1, name: "Tất cả" },
  { id: 2, name: "Nam" },
  { id: 3, name: "Nữ" },
  { id: 4, name: "Unisex" },
];

const price = [
  { id: 1, name: "Dưới 500.000VNĐ" },
  { id: 2, name: "Trên 500.000VNĐ" },
];

const ProductFilter = () => {
  const [selectedProduct, setSelectedProduct] = useState(product[0]);
  const [selectedCategory, setSelectedCategory] = useState(category[0]);
  const [selectedPrice, setSelectedPrice] = useState(price[0]);

  return (
    <section className='mt-16'>
        <div className='container mx-auto p-3 bg-white rounded-sm shadow-3xl shadow-black/30'>
          <div className='flex gap-x-10 justify-center'>
            <div className='flex items-center gap-x-2'>
                <label className='text-base'>Sản phẩm</label>
                <ListSelect  
                options={product}
                selected={selectedProduct}
                onChange={setSelectedProduct}
                />
              </div>
              <div className='flex items-center gap-x-2 justify-center'>
                <label className='text-base'>Danh mục</label>
                <ListSelect  
                options={category}
                selected={selectedCategory}
                onChange={setSelectedCategory}
                />
              </div>
              <div className='flex items-center gap-x-2 justify-center'>
                <label className='text-base'>Giá</label>
                <ListSelect  
                options={price}
                selected={selectedPrice}
                onChange={setSelectedPrice}
                />
              </div>
              <div className='w-[500px]'>
                <SearchBar />
              </div>
          </div>
        </div>
    </section>
  )
}

export default ProductFilter