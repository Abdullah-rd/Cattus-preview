import { useState } from 'react';

export const useThemeToggle = () => {
  const [icon, setIcon] = useState('./cattus-logo.png');

  const Changeicon = () => {
    setIcon(prevIcon => (prevIcon === './cattus-logo.png' ? './cattus-logo-dark.png' : './cattus-logo.png'));
  };

  return { icon, Changeicon };
};