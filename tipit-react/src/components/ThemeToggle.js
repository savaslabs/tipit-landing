import React, { useState, useContext } from "react";
// import { Switch } from '@material-ui/core';
import AppContext from './AppContext';
const InputSwitch = document.getElementById('toggle-input');

export default function ThemeToggle() {
  const context = useContext(AppContext)
  const theme = context.theme;

  const [isEnabled, setIsEnabled] = useState(theme === 'light' ? false : true);
  const toggleInput = () => {
    setIsEnabled(previousState => !previousState);
    context.toggleTheme();
  }

  InputSwitch.addEventListener('change', (event) => {
    console.log('hi');
  });

  return (
      <InputSwitch
          onChange={toggleInput}
          checked={isEnabled}
      />
  );
}
