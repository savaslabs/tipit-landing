import React, { useContext } from "react";
import AppContext from "./AppContext";
import styles from "../theme/appstyles.module.css";

export const PercentInput = ({ value, onChange, ...props }) => {
  const context = useContext(AppContext);
  const { colors } = context.useTheme();
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          maxWidth: 60,
          marginRight: 15,
          color: colors.text,
        }}
      >
        <input
          style={{
            minWidth: 40,
            paddingRight: 20,
            textAlign: "right",
            backgroundColor: colors.background,
            color: colors.text,
          }}
          type="number"
          min="0"
          max="100"
          step="1"
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        <span className={styles.label} style={{ marginLeft: -20 }}>
          %
        </span>
      </div>
    </React.Fragment>
  );
};
