// src/components/Calculator.js

import React from "react";
import ResultsTable from "./ResultsTable";

const Calculator = () => {

  const [state, setState] = React.useState({
    input: "",
    results: []
  });

  const handleChange = (e) => {
    setState({...state, [e.target.name]: e.target.value});
  }

  const process = () => {
    let i = state.input;
    let o = calculate(state.input);
    state.results.unshift({i, o});
    setState({...state, input: ""});
  }

  return (
    <>
      <div className="calcForm">
        <textarea name="input" type="string" value={state.input} onChange={handleChange}></textarea>
        <button name="submit" onClick={process}>Go!</button>
      </div>
      <ResultsTable data={state.results} />
    </>
  );
};

const calculate = (input) => {
  let numbers = input.split(/(,|\n|\r\n)/g);
  let total = 0;
  let negNums = [];
  numbers.forEach((number) => {
    let num = parseInt(number) || 0;
    if (num < 0) {
      negNums.push(num);
    }
    total += num;
  });
  if (negNums.length > 0) {
    throw new Error("Negative numbers are not allowed: [" + negNums + "]");
  }
  return total;
}

export {Calculator, calculate};
