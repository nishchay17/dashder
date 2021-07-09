import React from "react";
import DataTable from "../../lib/Table";

function ElementWrapper({ type }) {
  switch (type) {
    case "table":
      return <DataTable />;
    default:
      break;
  }
}

export default ElementWrapper;
