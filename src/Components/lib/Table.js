import React, { useCallback, useEffect, useMemo, useState } from "react";
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
  useToast,
  Box,
  TableCaption,
  Heading,
} from "@chakra-ui/react";
import { TriangleDownIcon, TriangleUpIcon } from "@chakra-ui/icons";
import { useTable, useSortBy, usePagination } from "react-table";
import fetchService from "../service/fetchService";

function DataTable({ endpoint, isNew }) {
  const [rawData, setRawData] = useState(null);
  const [processedData, setProcessedData] = useState({ data: [], columns: [] });

  const toast = useToast();

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

  const fetchRawData = useCallback(
    async function (endpoint) {
      try {
        let data = await fetchService.table(endpoint);
        isNew &&
          toast({
            title: "Generated",
            description: "API fetched successfully",
            status: "success",
            duration: 4000,
            isClosable: true,
          });
        setRawData(data);
      } catch (err) {
        console.log(err);
        toast({
          title: "Error",
          description: "Something went wrong, try again",
          status: "error",
          duration: 4000,
          isClosable: true,
        });
      }
    },
    [toast, isNew]
  );

  useEffect(() => {
    if (endpoint) fetchRawData(endpoint);
    else setRawData(null);
  }, [endpoint, fetchRawData]);

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
    <Box overflow="auto">
      <Table variant="striped" size="sm" {...getTableProps()}>
        <TableCaption placement="top" mt="0" textAlign="left">
          <Heading as="h3" size="sm">
            Imperial to metric conversion factors
          </Heading>
        </TableCaption>
        <Thead>
          {headerGroups.map((headerGroup) => (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render("Header")}
                  <chakra.span pl="1rem">
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
        <ButtonGroup size="sm" isAttached colorScheme="teal">
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
        <Flex px="1.5rem" fontSize="0.7rem">
          Page
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </Flex>
      </Flex>
    </Box>
  ) : null;
}

DataTable.defaultProps = {
  isNew: false,
};

export default DataTable;
