// src/components/ResultsTable.js

import React from "react";

const ResultsTable = (props) => {

  if (!props || !props.data || props.data.length === 0) {
    return (<p>No results yet</p>);
  } else {
    return (
      <div>
        <table className="results">
          <thead>
            <tr>
              <th>Input</th>
              <th>Output</th>
            </tr>
          </thead>
          <tbody>
            {props.data.map( (result, index) =>
                <tr key={index}>
                  <td><pre>{result.i}</pre></td>
                  <td>{result.o}</td>
                </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ResultsTable;
