import React, { createContext, useState, useContext } from 'react';

const FeatureToggleContext = createContext();

export const useFeatureToggle = () => useContext(FeatureToggleContext);

export const FeatureToggleProvider = ({ children }) => {
  const [dragAndDropEnabled, setDragAndDropEnabled] = useState(false);

const toggleFeature = () => {
    setDragAndDropEnabled((prev) => {
      console.log(`Feature toggle status changed. New value: ${!prev}`);
      return !prev;
    });
  };
  
  return (
    <FeatureToggleContext.Provider value={{ dragAndDropEnabled, toggleFeature }}>
      {children}
    </FeatureToggleContext.Provider>
  );
};
