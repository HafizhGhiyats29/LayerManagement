import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import PaginationButton from './BaseMapSetting/PaginationButton';

function TableWithPagination({
  tableColumns = [], tableDatas = [], isPaginate, isShowingEntries, headerStyle = '', rowStyle,
}) {
  const columns = useMemo(() => tableColumns, []);
  const data = useMemo(() => tableDatas, []);

  const {
    prepareRow,
    headerGroups,
    getTableBodyProps,
    getTableProps,
    pageCount,
    page,
    previousPage,
    gotoPage,
    nextPage,
    canNextPage,
    canPreviousPage,
    state: {
      pageSize,
      pageIndex,
    },
  } = useTable({
    columns,
    data,
    initialState: {
      pageSize: 10,
      pageIndex: 0,
    },
  }, usePagination);

  console.log({
    pageSize, pageIndex, pageCount, canPreviousPage, canNextPage,
  });
  return (
    <div>
      <table {...getTableProps()} className="w-full mt-8 p-2 text-center">
        <thead className={`p-4 ${headerStyle}`}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()} className={rowStyle}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex justify-between mt-8">
        <h1>{`Showing ${pageIndex + 1} to 8 of ${pageCount} Entries`}</h1>
        <PaginationButton
          totalPage={10}
          gotoPageFunction={gotoPage}
          canNextPage={canNextPage}
          canPreviousPage={canPreviousPage}
          nextPage={nextPage}
          previousPage={previousPage}
          activePage={pageIndex}
        />
      </div>
    </div>
  );
}

export default TableWithPagination;
