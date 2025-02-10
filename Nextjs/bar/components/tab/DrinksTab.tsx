import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import React from 'react'

const DrinksTab = () => {
  return (
    <TabGroup className='mt-10'>
        <TabList className='grid grid-cols-4 gap-5'>
            <Tab 
                className={({ selected }) => `shadow-custom shadow-purple-400 rounded-lg py-2 focus:outline-none ${selected ? "bg-purple-400" : ""}`}>
                Cocktail
            </Tab>
        </TabList>
        <TabPanels>
            <TabPanel>
                
            </TabPanel>
        </TabPanels>
    </TabGroup>
  )
}

export default DrinksTab