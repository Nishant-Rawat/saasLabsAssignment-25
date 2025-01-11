import React from "react";
import Pagination from "./Pagination";
import "./index.css";

export default function DataTable({
  columnConfig,
  bodyData,
  tableTitle,
  totalPages,
  currentPage,
  handlePagination,
}) {
  return (
    <>
      {tableTitle && <h3 className="table-title">{tableTitle}</h3>}
      <div className="table-container">
        <table className="table">
          <thead>
            <tr className="row">
              {columnConfig.map((head) => (
                <th className="column-header" key={head.key}>
                  {head.value}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bodyData.map((row) => (
              <tr className="row" key={row["s.no"]}>
                {columnConfig.map((head) => {
                  return (
                    <td className="cell" key={`${row[head.key]}}`}>
                      {head.suffix}
                      {row[head.key]}
                      {head.prefix}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePagination={handlePagination}
      />
    </>
  );
}
