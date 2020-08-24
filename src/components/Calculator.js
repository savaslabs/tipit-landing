import React, { useContext, useState, useEffect } from "react";
import { CurrencyInput } from "./CurrencyInput";
import { PercentInput } from "./PercentInput";
import { Dashes } from "./Dashes";
import { Results } from "./Results";
import AppContext from "./AppContext";
import styles from "../theme/appstyles.module.css";

let resultID = 0;

//Determine if a string is a palindrome
function palindrome(str) {
  var re = ".";
  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}

// Returns an array of palindromes between numLow and numHigh
function palindromeArray(numLow, numHigh) {
  var palindromeArray = [];
  for (let i = numLow; i <= numHigh; i += 0.01) {
    let n = i.toFixed(2);
    if (palindrome(n.toString())) {
      palindromeArray.push(parseFloat(n));
    }
  }
  return palindromeArray;
}

//Output all possible palindromic tips within the given parameters.
function findPalTips(billAmount, tipPercentLow, tipPercentHigh) {
  const tipArray = palindromeArray(
    billAmount * tipPercentLow * 0.01,
    billAmount * tipPercentHigh * 0.01
  );
  return tipArray;
}

//Create an array with all totals with palindrome tips
function arrayTipsAndTotals(billAmount, tipArray) {
  let i;
  var results = [];
  let stringBill = billAmount.toFixed(2).toString();
  for (i of tipArray) {
    let total = Number(i) + Number(billAmount);
    let stringTip = i.toFixed(2).toString();
    let stringTotal = total.toFixed(2).toString();
    var result = new Result(
      resultID.toString(),
      stringBill,
      stringTip,
      stringTotal
    );
    results.push(result);
    resultID += 1;
  }
  return results;
}

//Outputs an array of palindromic tips and their corresponding palindromic totals, if any exist.
function findPalTotals(billAmount, tipArray) {
  let i;
  var results = [];
  let stringBill = billAmount.toFixed(2).toString();
  for (i of tipArray) {
    let total = Number(billAmount) + Number(i);
    let stringTotal = total.toFixed(2).toString();
    let stringTip = i.toFixed(2).toString();
    if (palindrome(stringTotal)) {
      const result = new Result(
        resultID.toString(),
        stringBill,
        stringTip,
        stringTotal
      );
      results.push(result);
    }
    resultID += 1;
  }
  return results;
}

function Result(id, bill, tip, total) {
  this.id = id;
  this.bill = bill;
  this.tip = tip;
  this.total = total;
}

export const Calculator = () => {
  const context = useContext(AppContext);
  const { colors } = context.useTheme();

  const [tipLow, setTipLow] = useState(context.defaultTipLow);
  const [tipHigh, setTipHigh] = useState(context.defaultTipHigh);
  const [bill, setBill] = useState("");
  const [results, setResults] = useState([]);
  const [message, setMessage] = useState("");

  const handleBill = text => {
    setBill(text);
  };

  const handleTipLow = text => {
    setTipLow(text);
    context.updateTipLowContext(text);
  };
  const handleTipHigh = text => {
    setTipHigh(text);
    context.updateTipHighContext(text);
  };
  const clearTable = () => {
    setMessage("");
  };
  const clearAll = () => {
    setBill("");
    clearTable();
  };

  //Update the state based on the functions above
  const findResults = () => {
    const billFloat = parseFloat(bill);
    const tipLowFloat = parseFloat(tipLow);
    const tipHighFloat = parseFloat(tipHigh);

    if (
      billFloat &&
      tipLowFloat &&
      tipHighFloat &&
      tipLowFloat <= tipHighFloat
    ) {
      const tipArray = findPalTips(billFloat, tipLowFloat, tipHighFloat);
      const allTotalArray = arrayTipsAndTotals(billFloat, tipArray);
      const palTotalArray = findPalTotals(billFloat, tipArray);

      console.log(allTotalArray);

      if (palTotalArray && palTotalArray.length > 0) {
        //both tip & total are arrays
        palTotalArray.length > 1
          ? setMessage(
              "Woot! There are " +
                palTotalArray.length +
                " ways for the tip AND total to be palindromes!"
            )
          : setMessage(
              "Woot! There is one way for the tip AND total to be palindromes!"
            );
        return palTotalArray;
      } else if (tipArray && tipArray.length > 0) {
        tipArray.length > 1
          ? setMessage("You can tip in " + tipArray.length + " palindromes!")
          : setMessage("You can tip in one palindrome!");
        return allTotalArray;
      } else {
        console.log("no results");
        setMessage("Sorry, no results.");
        return [];
      }
    }
  };

  useEffect(() => {
    setResults(findResults);
    // eslint-disable-next-line
  }, [bill, tipLow, tipHigh]);

  return (
    <div
      style={{
        backgroundColor: colors.background,
      }}
    >
      <div className={styles.inputRow}>
        <div style={{ textAlign: "left" }}>
          <label
            htmlFor="bill"
            name="bill"
            id="bill"
            aria-label="Bill amount"
            className={styles.label}
          >
            Your Bill:
          </label>
          <div className={styles.helper}>Pre-tip amount</div>
        </div>
        <CurrencyInput
          id="bill"
          label="Bill"
          value={bill}
          onChange={handleBill}
        />
      </div>
      <div className={styles.inputRow} style={{ marginTop: 20 }}>
        <div style={{ textAlign: "left" }}>
          <div className={styles.label}>Tip Range:</div>
          <div className={styles.helper}>Low to high</div>
        </div>
        <div className={styles.inputGroup}>
          <PercentInput
            id="Tip percentage low"
            value={context.defaultTipLow}
            onChange={handleTipLow}
          />
          <div className={styles.normalText} style={{ paddingRight: 5 }}>
            to
          </div>
          <PercentInput
            id="Tip percentage high"
            value={context.defaultTipHigh}
            onChange={handleTipHigh}
          />
        </div>
      </div>
      <React.Fragment>
        {/* If there are results, print the message and clear button. */}
        <div
          style={{
            minHeight: 50,
            paddingTop: 10,
            display: "flex",
            alignItems: "flex-end",
          }}
        >
          {results && (
            <div
              className={styles.inputRow}
              style={{ width: "100%", alignItems: "flex-end" }}
            >
              <div className={styles.normalText} style={{ textAlign: "left" }}>
                {message}
              </div>
              <button
                onClick={clearAll}
                className={styles.clearButton}
                aria-label="Clear button"
                style={{ padding: 10, color: colors.clear }}
              >
                X Clear
              </button>
            </div>
          )}
        </div>
      </React.Fragment>
      <React.Fragment>
        <div>
          <Dashes />
          {/* If there are results, print the results table. */}
          {results?.length > 0 && <Results results={results} />}
        </div>
      </React.Fragment>
    </div>
  );
};
