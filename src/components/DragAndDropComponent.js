import React from 'react';
import { useFeatureToggle } from '../context/FeatureToggleContext';

const DragAndDropComponent = () => {
    const { dragAndDropEnabled } = useFeatureToggle();
    console.log(`Drag and drop feature is ${dragAndDropEnabled ? 'enabled' : 'disabled'}`);
  
    return (
      <div>
        {dragAndDropEnabled && <p>Drag and Drop functionality is enabled</p>}
      </div>
    );
  };
  

export default DragAndDropComponent;
