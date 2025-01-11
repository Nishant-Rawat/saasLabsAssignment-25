import React, { useState, useEffect } from "react";
import DataTable from "../DataTable";
import { API_URL } from "../../constants";
import { getHighlyRatedKickStarterProjects } from "../../services/getHighlyRatedKickStarterProjects";
import ShimmerLoader from "../Shimmer";

export default function KickStarterProjects({ localeData }) {
  const { Highly_Rated_Kick_Starter_Projects, Kick_Starter_Config } =
    localeData;
  const { KICK_STARTER } = API_URL;
  const rowsPerPage = 5;
  const [tableData, setTableData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const handlePagination = (type, currentPageNumber) => {
    setLoader(true);

    if (type === "next") {
      const nextPage = currentPageNumber + 1;
      setCurrentPage(nextPage);
      setPaginatedData(
        tableData.slice((nextPage - 1) * rowsPerPage, nextPage * rowsPerPage)
      );
    } else if (type === "previous") {
      const previousPage = currentPageNumber - 1;
      if (previousPage > 0) {
        setCurrentPage(previousPage);
        setPaginatedData(
          tableData.slice(
            (previousPage - 1) * rowsPerPage,
            previousPage * rowsPerPage
          )
        );
      }
    }

    setLoader(false);
  };

  useEffect(() => {
    const fetchTableData = async () => {
      setLoader(true);
      const data = await getHighlyRatedKickStarterProjects(KICK_STARTER);
      setTableData(data);
      setPaginatedData(data.slice(0, rowsPerPage));
      setLoader(false);
    };
    fetchTableData();
  }, []);

  return loader ? (
    [1, 2, 3, 4, 5].map((item) => <ShimmerLoader key={item} height="60px" />)
  ) : (
    <DataTable
      tableTitle={Highly_Rated_Kick_Starter_Projects}
      columnConfig={Kick_Starter_Config.Column_Config}
      bodyData={paginatedData}
      rowsPerPage={rowsPerPage}
      currentPage={currentPage}
      totalPages={Math.ceil(tableData.length / 5)}
      handlePagination={handlePagination}
    />
  );
}
