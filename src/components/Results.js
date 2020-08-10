import React, { useContext } from "react";
import AppContext from "./AppContext";
import styles from "../theme/appstyles.module.css";

export const Results = ({ results }) => {
  const context = useContext(AppContext);
  const { colors } = context.useTheme();

  const renderTableData = () => {
    return results.map(result => {
      const { bill, tip, total } = result; //destructuring
      return (
        <tr key={tip}>
          <td key={bill} style={{ textAlign: "left" }}>
            ${bill} +{" "}
          </td>
          <td key={tip} style={{ textAlign: "left" }}>
            ${tip}
          </td>
          <td key={total} className="total__td">
            = ${total}
          </td>
        </tr>
      );
    });
  };

  return (
    <div className={styles.tableWrapper}>
      <table>
        <tbody>
          <tr>
            <th scope="col" style={{ background: colors.background }}>
              Bill
            </th>
            <th scope="col" style={{ background: colors.background }}>
              Tip
            </th>
            <th
              scope="col"
              style={{ background: colors.background }}
            >
              Total
            </th>
          </tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
};
