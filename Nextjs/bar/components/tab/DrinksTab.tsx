import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import React, { useEffect, useState } from 'react'
import './tab.css'
import Image from 'next/image'

type drinksItem = {
  item_id: number;
  item_name: string;
  price: string;
  ingredients?: string; // Chỉ có trong Cocktail
  strength?: number; // Chỉ có trong Cocktail
};

type drinkss = {
  id: number;
  name: string;
  items: drinksItem[];
};

const drinkssTab = () => {
  const [drinks, setdrinks] = useState<drinkss[]>([]);

  useEffect(() => {
    fetch('/data/drinkdata.json')
    .then((res) => res.json())
    .then((data) => {
      console.log("Data: ", data);
      if(Array.isArray(data)){
        setdrinks(data);
      } else if(data.drinks && Array.isArray(data.drinks)){
        setdrinks(data.drinks);
      } else {
        console.error("Dữ liệu không hợp lệ:", data); 
      }
    })
    .catch ((error) => console.error("Lỗi khi lấy dữ liệu:", error));
  }, []);

  return (
    <>
       <TabGroup className='mt-10'>
          <TabList className='grid grid-cols-4 gap-5'>
            {drinks.map((drinks) =>
              <Tab 
              key={drinks.id}
              className={({ selected }) => `shadow-custom shadow-purple-400 rounded-lg py-2 text-2xl font-semibold focus:outline-none hover:bg-purple-400 
              ${selected ? "bg-purple-400" : ""}`}>
             {drinks.name}
              </Tab>
            )}
          </TabList>
          <TabPanels className='banner-menu'>
            {drinks.map((drinks) => 
              <TabPanel key={drinks.id}>
                <div className='min-h-[50vh] content-center py-10 max-w-screen-lg w-full mx-auto'>
                  <ul className='leading-[3]'>
                    {drinks.items.map((item) => 
                      <li className='flex items-center justify-between' key={item.item_id}>
                        <p className='text-2xl'>{item.item_name} {item.ingredients && <span className='text-base italic'>{item.ingredients}</span>}</p>
                        <div className='flex items-center gap-x-3'>
                          <p className='italic'>{item.price}</p>
                          {item.strength && Array.from({ length: item.strength}).map((_, index) => (
                            <Image key={index} className='max-h-6 w-fit' src='/images/arm-muscle.png' width={500} height={500} alt='icon'/>
                          ))} 
                        </div>
                      </li>
                    )}
                  </ul>
                </div>
              </TabPanel>
            )}
          </TabPanels>
        </TabGroup>
    </>
  )
}

export default drinkssTab