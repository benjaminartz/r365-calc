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
    <div>
      <input name="input" type="string" value={state.input} onChange={handleChange}></input>
      <button name="submit" onClick={process}>Go!</button>
      <ResultsTable data={state.results} />
    </div>
  );
};

const calculate = (input) => {
  let numbers = input.split(",");
  if (numbers.length > 2) {
    throw new Error("Max of 2 numbers exceeded");
  }
  let num1 = parseInt(numbers[0]) || 0;
  let num2 = parseInt(numbers[1]) || 0;
  return num1 + num2;
}

export {Calculator, calculate};
