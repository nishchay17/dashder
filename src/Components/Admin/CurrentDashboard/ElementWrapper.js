import React from "react";

import DataTable from "../../lib/Table";

function ElementWrapper({ type, ...rest }) {
  switch (type) {
    case "table":
      return <DataTable {...rest} />;
    default:
      return null;
  }
}

export default ElementWrapper;
