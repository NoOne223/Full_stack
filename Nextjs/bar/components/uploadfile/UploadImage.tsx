'use client'
import React, { useState } from 'react'

const UploadImage = () => {
    const [image, setImage] = useState<string | null>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
          setImage(URL.createObjectURL(file)); // Tạo URL tạm thời để hiển thị ảnh
        }
    };
  return (
    <div className="flex flex-col gap-4">
      {/* Nút upload ảnh */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-gray-50 focus:outline-none"
      />

      {/* Ô chứa hình ảnh */}
      {image && (
        <div className="overflow-hidden">
          <img src={image} alt="Uploaded preview" className="w-64 h-64 object-cover" />
        </div>
      )}
    </div>
  )
}

export default UploadImage