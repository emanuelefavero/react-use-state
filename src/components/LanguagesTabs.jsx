import { useState } from 'react';
import { languages } from '@/data/languages';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import './LanguagesTabs.css';

const DEFAULT_LANGUAGE_ID = languages[0]?.id ?? null;

export const LanguagesTabs = () => {
  const [activeLanguageId, setActiveLanguageId] = useState(DEFAULT_LANGUAGE_ID);

  if (activeLanguageId === null) return null;

  const activeLanguage = languages.find(({ id }) => id === activeLanguageId);

  const handleLanguageChange = (languageId) => setActiveLanguageId(languageId);

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
        <TabsContent.Title>{activeLanguage?.title}</TabsContent.Title>
        <TabsContent.Description>
          {activeLanguage?.description}
        </TabsContent.Description>
      </TabsContent>
    </Tabs>
  );
};
