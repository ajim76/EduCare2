// Pagination.jsx

import React from 'react';

const Pagination = ({ totalCount, currentPage, pageSize, onPageChange }) => {
  const totalPages = Math.ceil(totalCount / pageSize);

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    for (let page = 1; page <= totalPages; page++) {
      buttons.push(
        <button
          key={page}
          onClick={() => handlePageClick(page)}
          className={ currentPage === page ? 'active px-2' : ''+' px-2'}
        >
          {page}
        </button>
      );
    }
    return buttons;
  };

  return (
    <div className="pagination">
      {renderPaginationButtons()}
    </div>
  );
};

export default Pagination;
