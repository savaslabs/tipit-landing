import React, { useContext } from "react";
import { Switch } from "@material-ui/core";
import AppContext from "./AppContext";

export default function ThemeToggle() {
  const context = useContext(AppContext);

  return (
    <Switch
      onChange={context.toggleTheme}
      checked={context.theme === "light" ? false : true}
    />
  );
}
