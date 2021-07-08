import React, { useEffect, useMemo, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  chakra,
  ButtonGroup,
  Button,
  Flex,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { useTable, useSortBy, usePagination } from "react-table";

function DataTable({ rawData }) {
  const [processedData, setProcessedData] = useState({ data: [], columns: [] });
  console.log(processedData);
  useEffect(() => {
    if (rawData && rawData.length > 0 && typeof rawData[0] === "object") {
      Object.keys(rawData[0]).map((key) => {
        if (typeof rawData[0][key] !== "object") {
          setProcessedData((pre) => {
            return {
              ...pre,
              columns: [...pre.columns, { Header: key, accessor: key }],
            };
          });
        }
        return null;
      });
    }
  }, [rawData]);

  const data = useMemo(() => rawData, [rawData]);

  const columns = useMemo(() => processedData.columns, [processedData.columns]);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,

    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable({ columns, data }, useSortBy, usePagination);

  return rawData ? (
    <>
      <Table {...getTableProps()}>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <chakra.span pl="4">
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <TriangleDownIcon aria-label="sorted descending" />
                      ) : (
                        <TriangleUpIcon aria-label="sorted ascending" />
                      )
                    ) : null}
                  </chakra.span>
                </Th>
              ))}
            </Tr>
          ))}
        </Thead>
        <Tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <Tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                ))}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
      <Flex alignItems="center" mt="1rem">
        <ButtonGroup isAttached colorScheme="teal">
          <Button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
            {"<<"}
          </Button>
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
            {"<"}
          </Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>
            {">"}
          </Button>
          <Button
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {">>"}
          </Button>
        </ButtonGroup>
        <Flex px="1.5rem">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </Flex>
      </Flex>
    </>
  ) : null;
}

export default DataTable;
