import React, { useContext } from "react";
import AppContext from "./AppContext";
import ThemeToggle from "./ThemeToggle";
import { PercentInput } from "./PercentInput";
import styles from "../theme/appstyles.module.css";

export const Settings = () => {
  const context = useContext(AppContext);
  const { colors } = context.useTheme();

  const defaultTipLow = context.defaultTipLow;
  const defaultTipHigh = context.defaultTipHigh;

  return (
    <div style={{ color: colors.text }}>
      <h2 className={styles.normalText} style={{ textAlign: "center" }}>
        Settings
      </h2>
      <div className={styles.inputRow}>
        <div className={styles.label}>Low tip default:</div>
        <PercentInput
          value={defaultTipLow}
          onChange={context.updateTipLowContext}
        />
      </div>
      <div className={styles.inputRow} style={{ marginTop: 20 }}>
        <div className={styles.label}>High tip default:</div>
        <PercentInput
          value={defaultTipHigh}
          onChange={context.updateTipHighContext}
        />
      </div>
      <div className={styles.inputRow} style={{ marginTop: 20 }}>
        <div className={styles.label}>Dark Mode:</div>
        <ThemeToggle />
      </div>
    </div>
  );
};
