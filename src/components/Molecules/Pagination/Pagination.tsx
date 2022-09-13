import ColorStyle from '@styles/Color.module.css';
import clsx from 'clsx';
import ReactPaginate from 'react-paginate';

import { PaginationProps } from './Pagination.types';

const Pagination: PaginationProps = ({ pageCount, onPageChange }) => {
  return (
    <ReactPaginate
      pageCount={pageCount}
      containerClassName={clsx(ColorStyle.primary, 'pagination', 'justify-content-center')}
      pageClassName="page-item"
      activeClassName="active"
      disabledClassName="disabled"
      disabledLinkClassName="page-link border-0"
      pageLinkClassName="page-link border-0"
      previousClassName="page-item"
      previousLinkClassName="page-link border-0"
      nextClassName="page-item"
      nextLinkClassName="page-link border-0"
      breakClassName="page-item"
      breakLinkClassName="page-link border-0"
      nextLabel=">"
      previousLabel="<"
      onPageChange={onPageChange}
    ></ReactPaginate>
  );
};

export default Pagination;
