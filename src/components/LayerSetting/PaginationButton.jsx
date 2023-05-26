import React from 'react';

function PaginationButton({
  gotoPageFunction, canPreviousPage, canNextPage, previousPage, nextPage, activePage,
}) {
  return (
    <div className="flex  gap-5">
      <button type="button" disabled={!canPreviousPage} onClick={previousPage}>Previous</button>
      <div className="flex gap-5">
        {[1, 2, 3, 4, 5, 6, 7].map((length) => (
          <button type="button" onClick={() => gotoPageFunction(length - 1)} key={length} className={`${activePage + 1 === length && 'bg-blue'} px-2`}>{length}</button>
        ))}
      </div>
      <button type="button" disabled={!canNextPage} onClick={nextPage}>Next</button>

    </div>
  );
}

export default PaginationButton;
