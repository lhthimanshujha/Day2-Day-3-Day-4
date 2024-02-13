import { useEffect } from 'react';

export const useKeyboardShortcuts = (shortcutsMap) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      const shortcut = shortcutsMap[event.key];
      if (shortcut && event.ctrlKey) {
        event.preventDefault();
        shortcut();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [shortcutsMap]);
};
