import ListSelect from '@/components/listselect/ListSelect'
import React, { useState } from 'react'

const people = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const ProductFilter = () => {
  const [selectedPerson, setSelectedPerson] = useState(people[0]);

  return (
    <section className='mt-16'>
        <div className='container mx-auto p-3 bg-white rounded-sm shadow-3xl shadow-black/30'>
            <div className='flex items-center gap-x-2'>
              <label className='text-base'>Sản phẩm</label>
              <ListSelect  
              options={people}
              selected={selectedPerson}
              onChange={setSelectedPerson}
              />
            </div>
        </div>
    </section>
  )
}

export default ProductFilter