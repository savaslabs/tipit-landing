import React, { useState, useEffect } from "react";
import ReactGA from "react-ga";
import AppContext, { useTheme } from "./components/AppContext";
import { Landing } from "./components/Landing";

export const App = () => {
  useEffect(() => {
    ReactGA.initialize("UA-176008925-1");
    ReactGA.pageview(window.location.pathname);
  }, []);

  const _storeData = () => {
    try {
      localStorage.clear();
      const settingsToSave = {
        defaultTipLow: userSettings.defaultTipLow,
        defaultTipHigh: userSettings.defaultTipHigh,
        theme: userSettings.theme,
      };
      localStorage.setItem("@store:appContext", JSON.stringify(settingsToSave));
    } catch (error) {
      console.log("Error saving user settings.");
    }
  };

  const [initialAppLoad, setInitialAppLoad] = useState(true);

  const _retrieveData = () => {
    try {
      const value = localStorage.getItem("@store:appContext");
      const savedSettings = JSON.parse(value);
      const themeStylesheet = document.getElementById("theme");
      if (savedSettings !== null) {
        setDefaultTipLow(savedSettings.defaultTipLow);
        setDefaultTipHigh(savedSettings.defaultTipHigh);
        setTheme(savedSettings.theme);
        themeStylesheet.href = "/tipit-landing/" + savedSettings.theme + ".css";
      }
    } catch (error) {
      console.log("No user setting data was retrieved");
    }
    setInitialAppLoad(false);
  };

  const [defaultTipLow, setDefaultTipLow] = useState("18");
  const [defaultTipHigh, setDefaultTipHigh] = useState("25");
  const [theme, setTheme] = useState("light");

  const updateTipLowContext = input => {
    setDefaultTipLow(input);
  };

  const updateTipHighContext = input => {
    setDefaultTipHigh(input);
  };

  const toggleTheme = () => {
    const themeStylesheet = document.getElementById("theme");
    if (themeStylesheet.href.includes("light")) {
      themeStylesheet.href = "/tipit-landing/dark.css";
    } else {
      themeStylesheet.href = "/tipit-landing/light.css";
    }
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const userSettings = {
    defaultTipLow: defaultTipLow,
    defaultTipHigh: defaultTipHigh,
    theme: theme,
    useTheme,
    toggleTheme,
    updateTipLowContext,
    updateTipHighContext,
  };

  useEffect(() => {
    initialAppLoad ? _retrieveData() : _storeData();
  });

  return (
    <AppContext.Provider value={userSettings}>
      <Landing />
    </AppContext.Provider>
  );
};
