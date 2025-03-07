import React from "react";
import  "../../styles/schimmer.css"

const SchimmerTable = ({ rows = 2, columns = 4 }) => {
  return (
    <div className="TableContainer">
      <table>
        <thead>
          <tr>
            {Array.from({ length: columns }).map((_, index) => (
              <th key={index}>
                <div className="shimmer-box"></div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: rows }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {Array.from({ length: columns }).map((_, colIndex) => (
                <td key={colIndex}>
                  <div className="shimmer-box"></div>
                  <span className="shimmer-box small"></span>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SchimmerTable;
