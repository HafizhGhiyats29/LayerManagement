import React from 'react';
import { useTable } from 'react-table';

function BaseMapTable() {
  const {
    prepareRow,
    rows,
  } = useTable({
    columns: [],
    data: [],
  });
  return (
    <table />
  );
}

export default BaseMapTable;
