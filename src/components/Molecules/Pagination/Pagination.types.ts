import { FC } from 'react';

interface IPaginationProps {
  pageCount: number;
  onPageChange: (params: any) => any;
}

export type PaginationProps = FC<IPaginationProps>;
