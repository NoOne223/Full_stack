import React, { useEffect, useState } from 'react'
import './template.css'
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faHeart, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';


const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <FontAwesomeIcon
      title="Add to favorite"
      className={`absolute add-fav -top-5 right-5 cursor-pointer ${
        isFavorite ? "text-red-500" : "text-white"
      }`}
      icon={faHeart}
      onClick={toggleFavorite}
    />
  );
};

interface TemplateData {
  id?: number;
  template_tag: string;
  keywords?: string;
  image_banner: string;
  link_review: string;
  price?: string;
}

const TemplateContent:React.FC = () => {
  const [templates, setTemplates] = useState<TemplateData[]>([])

  useEffect(() => {
    fetch("/example_data/templatedata.json")
      .then((response) => response.json())
      .then((data) => {
        console.log("Dữ liệu tải về:", data);

        // Lấy mảng template từ object JSON và loại bỏ object trống
        const filteredData = data.template.filter(
          (item: TemplateData) => item.id && Object.keys(item).length > 0
        );

        setTemplates(filteredData);
      })
      .catch((error) => console.error("Lỗi khi tải dữ liệu:", error));
  }, []);

  return (
    <div className='container mx-auto p-[10px] my-36'>
      <div className='grid grid-cols-4 gap-6'>
        {templates.map((item) => (
          <div key={item.id}>
            <div className="template-box relative overflow-hidden">
              <Image
                className="h-full"
                src={item.image_banner}
                width={500}
                height={500}
                alt={item.template_tag}
              />
              <div className="gradient-bg hidden absolute top-0 left-0 w-full h-full"></div>
              <FavoriteButton />
              <div className="absolute template-button -bottom-10 left-0 w-full bg-white">
                <Link href={item.link_review} target='_blank'>
                  <button className="text-center w-1/2 py-2 hover:bg-color-1 hover:text-white">
                    <FontAwesomeIcon icon={faExpand} />
                    <span className="text-base ms-2">View page</span>
                  </button>
                </Link>
                <button className="text-center w-1/2 py-2 hover:bg-color-2 hover:text-white">
                  <FontAwesomeIcon icon={faMoneyBillWave} />
                  <span className="text-base ms-2">Get page</span>
                </button>
              </div>
            </div>
            <div className="text-base text-gray-600 py-2">
              <p>
                <strong>Tag :</strong> <span>{item.template_tag}</span>
              </p>
              <p>
                <strong>Keywords :</strong> <span>{item.keywords}</span>
              </p>
              <p>
                <strong>Price :</strong> <span>{item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TemplateContent