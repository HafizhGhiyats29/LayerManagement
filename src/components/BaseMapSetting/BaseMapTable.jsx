import React from 'react';
import { FaSortAlphaDown } from 'react-icons/fa';
import TableWithPagination from '../TableWithPagination';
import data from '../../MOCK_DATA.json';

function BaseMapTable() {
  const tableColumns = [
    {
      Header: 'No',
      accessor: 'no',
    },
    {
      Header: 'Map',
      accessor: 'map',
    },
    {
      Header: 'Source',
      accessor: 'source',
    },
  ];
  return (
    <section>
      <TableWithPagination tableColumns={tableColumns} tableDatas={data} headerStyle="bg-[#4893E6] text-white" rowStyle="p-1.5 border-b" />
    </section>
  );
}

export default BaseMapTable;
