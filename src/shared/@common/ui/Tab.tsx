import React, { useState } from 'react';

type TabProps = {
  tabs: string[];
  onClick: (index: number) => void;
};

const Tab = ({ tabs, onClick }: TabProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onClick(index);
  };

  return (
    <div className="flex w-[366px] justify-between">
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={`flex-1 py-2 text-center font-medium border-b-2 border-muted
                      ${activeTab === index ? 'border-primary text-primary' : ''}`}
          onClick={() => handleTabClick(index)}
        >
          
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tab;