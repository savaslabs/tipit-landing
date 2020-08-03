import React, { useContext } from "react";
import AppContext from "./AppContext";

export const Title = () => {
  const context = useContext(AppContext);
  const { colors } = context.useTheme();
  return (
    <h1
      style={{
        color: colors.text,
        fontSize: 36,
        marginTop: 30,
        paddingBottom: 10,
      }}
    >
      tipit
    </h1>
  );
};
