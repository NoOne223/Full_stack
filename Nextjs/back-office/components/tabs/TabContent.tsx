import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';

interface Tab {
  label: string;
  content: React.ReactNode;
  className?: string;
}

const TabContent: React.FC<{ tabs: Tab[]; className?: string }> = ({ tabs, className }) => {
  return (
    <Tabs className={className}>
      <TabList>
        {tabs.map((tab: Tab, index: number) => (
          <Tab className='cursor-pointer' key={index}>{tab.label}</Tab>
        ))}
      </TabList>
      {tabs.map((tab: Tab, index: number) => (
        <TabPanel key={index}>{tab.content}</TabPanel>
      ))}
    </Tabs>
  );
};

export default TabContent;