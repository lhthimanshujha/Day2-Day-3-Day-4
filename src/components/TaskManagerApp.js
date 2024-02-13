import React, { Suspense } from 'react';
import { useKeyboardShortcuts } from '../hooks/useKeyboardShortcuts'; 
import { FeatureToggleProvider } from '../context/FeatureToggleContext';
import ErrorBoundary from './ErrorBoundary'; 

const LazyTaskList = React.lazy(() => import('./TaskList'));
const LazyCategoryList = React.lazy(() => import('./CategoryList'));
const LazyDragAndDropComponent = React.lazy(() => import('./DragAndDropComponent'));

const TaskManagerApp = () => {
  const keyboardShortcuts = {
    's': () => console.log('Save shortcut pressed'),
    'c': () => console.log('Copy shortcut pressed'), 
    'x': () => console.log('Cut shortcut pressed'), 
    'v': () => console.log('Paste shortcut pressed'), 
  };

  useKeyboardShortcuts(keyboardShortcuts);

  return (
    <FeatureToggleProvider>
      <div>
        <h1>Task Manager App</h1>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading TaskList...</div>}>
            <LazyTaskList />
          </Suspense>
        </ErrorBoundary>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading CategoryList...</div>}>
            <LazyCategoryList />
          </Suspense>
        </ErrorBoundary>
        <Suspense fallback={<div>Loading DragAndDropComponent...</div>}>
          <LazyDragAndDropComponent /> 
        </Suspense>
      </div>
    </FeatureToggleProvider>
  );
};

export default TaskManagerApp;