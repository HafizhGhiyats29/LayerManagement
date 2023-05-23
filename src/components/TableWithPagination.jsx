/* eslint-disable no-nested-ternary */
import React, { useMemo, useState } from 'react';
import { useTable, usePagination, useSortBy } from 'react-table';
import { FaSortAlphaDown } from 'react-icons/fa';
import { MdOutlineDeleteForever, MdOutlineEdit } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteMapListActionCreator } from '../states';
import PaginationButton from './BaseMapSetting/PaginationButton';
import ModalDelete from './ModalDelete';

function TableWithPagination({
  tableColumns = [], tableDatas = [], headerStyle = '', rowStyle,
}) {
  const dispatch = useDispatch();

  const onDeleteMapHandler = (id) => {
    dispatch(deleteMapListActionCreator(id));
  };

  const columns = useMemo(() => [
    {
      Header: 'No',
      Cell: ({ row }) => (
        <h1>{row.index + 1}</h1>
      ),
    },
    ...tableColumns,
    {
      Header: 'Action',
      accessor: 'no',
      Cell: ({ row }) => {
        console.log(row);
        const [isShowModalDelete, setIsShowModalDelete] = useState(false);
        const onClickDeleteButton = () => {
          setIsShowModalDelete(true);
        };
        return (
          <div className="flex justify-center items-center text-xl gap-4">
            <button type="button" onClick={() => console.log(tableDatas)}>
              <MdOutlineEdit />
            </button>
            <button
              type="button"
              onClick={() => {
                onClickDeleteButton();
              }}
            >
              <MdOutlineDeleteForever />
            </button>
            <ModalDelete isShow={isShowModalDelete} onDelete={onDeleteMapHandler} />
          </div>
        );
      },
    },
  ], []);
  const data = useMemo(() => tableDatas, [tableDatas]);

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
      pageIndex,
    },
  } = useTable({
    columns,
    data,
    initialState: {
      pageSize: 10,
      pageIndex: 0,
    },
  }, useSortBy, usePagination);

  return (
    <div>
      <table {...getTableProps()} className="w-full mt-8 p-2 text-center">
        <thead className={`p-4 ${headerStyle}`}>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())} className="relative">
                  {column.render('Header')}
                  {column.Header !== 'No' && <FaSortAlphaDown className="absolute right-10 top-1" />}
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
                  <td {...cell.getCellProps()} className={`${rowStyle}`}>
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
