import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-free/css/all.css';
import './template.css'
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

interface TagData{
  tag: string;
  id: number;
  tag_name: string;
}

const TemplateTagButton = () => {
  const [tags, setTags] = useState<TagData[]>([]);

  useEffect(() => {
    fetch("/example_data/templatetagdata.json")
    .then((response) => response.json())
    .then((data) => {
      console.log("Dữ liệu tải về:", data);

      // Lấy mảng template từ object JSON và loại bỏ object trống
      const filteredData = data.tag.filter(
        (item: TagData) => item.id && Object.keys(item).length > 0
      );

      setTags(filteredData);
    })
    .catch((error) => console.error("Lỗi khi tải dữ liệu:", error));
  }, [])

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
  };
  return (
    <div className='sticky top-0 left-0 w-full bg-white p-5 shadow-2xl z-10'>
        <div className='container mx-auto p-[10px]'>
          <Slider {...settings}>
            {tags.map((item)=>(
              <div key={item.id}>
                <div>
                  <button className='max-w-[150px] w-full border border-black rounded-full py-1 text-base'>{item.tag_name}</button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className='flex justify-center gap-x-2 mt-3'>
            <input className='py-1 px-2 border border-black max-w-md w-full focus:outline-color-1 rounded' type='text' placeholder='Enter keywords'/>
            <button className='hover:bg-gray-300 w-9 h-9 rounded'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
        </div>
    </div>
  )
}

export default TemplateTagButton