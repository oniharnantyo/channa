import clsx from 'clsx';
import { Container, Stack } from 'react-bootstrap';

import Style from './NoData.module.scss';
import { NoDataProps } from './NoData.types';

const NoData: NoDataProps = ({ message }) => {
  return (
    <div className={clsx(Style.noData, 'd-flex align-items-center justify-content-center')}>
      {message}
    </div>
  );
};

export default NoData;
