import clsx from 'clsx';

import { NoDataProps } from './NoData.types';

const NoData: NoDataProps = ({ message, className }) => {
  return (
    <div className={clsx(className, 'd-flex align-items-center justify-content-center text-dark')}>
      {message}
    </div>
  );
};

export default NoData;
