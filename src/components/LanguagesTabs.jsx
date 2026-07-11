import { languages } from '../data/languages.js';
import './LanguagesTabs.css';
import { useState } from 'react';

const DEFAULT_VALUE = languages[0].id || 1;

export const LanguagesTabs = () => {
  const [activeValue, setActiveValue] = useState(DEFAULT_VALUE);
  const activeItem = languages.find((item) => item.id === activeValue);

  const handleValueChange = (value) => {
    if (value !== activeValue) setActiveValue(value);
  };

  return (
    // Tabs
    <div className='tabs'>
      {/* TabsList */}
      <div className='tabs-list' role='tablist'>
        {languages.map(({ id, title }) => (
          // TabsTrigger
          <button
            key={id}
            className='tabs-trigger'
            role='tab'
            id={`tab-${id}`}
            onClick={() => handleValueChange(id)}
          >
            {title}
          </button>
        ))}
      </div>

      {/* TabsContent */}
      {activeItem && (
        <div
          className='tabs-content'
          role='tabpanel'
          aria-labelledby={`tab-${activeItem.id}`}
        >
          {activeItem.description}
        </div>
      )}
    </div>
  );
};
