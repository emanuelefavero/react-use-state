import { useState } from 'react';
import { languages } from '../data/languages.js';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/Tabs.jsx';
import './LanguagesTabs.css';

const DEFAULT_LANGUAGE_ID = languages[0]?.id ?? null;

export const LanguagesTabs = () => {
  const [activeLanguageId, setActiveLanguageId] = useState(DEFAULT_LANGUAGE_ID);

  if (activeLanguageId === null) return null;

  const activeLanguage = languages.find(({ id }) => id === activeLanguageId);

  const handleLanguageChange = (languageId) => {
    setActiveLanguageId(languageId);
  };

  return (
    <Tabs>
      <TabsList aria-label='Programming languages'>
        {languages.map(({ id, title }) => (
          <TabsTrigger
            key={id}
            value={id}
            isActive={id === activeLanguageId}
            onValueChange={handleLanguageChange}
          >
            {title}
          </TabsTrigger>
        ))}
      </TabsList>

      <TabsContent value={activeLanguageId}>
        <h2 className='font-semibold'>{activeLanguage?.title}</h2>
        <p className='text-lg'>{activeLanguage?.description}</p>
      </TabsContent>
    </Tabs>
  );
};
