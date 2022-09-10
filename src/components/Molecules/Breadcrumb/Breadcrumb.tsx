import clsx from 'clsx';
import Breadcrumbs from 'nextjs-breadcrumbs';
import React from 'react';

import Style from './Breadcrumb.module.css';

const Breadcrumb = () => {
  return (
    <Breadcrumbs
      listClassName="breadcrumb"
      inactiveItemClassName={clsx(Style.item, 'breadcrumb-item')}
      activeItemClassName={clsx(Style.item, 'breadcrumb-item active')}
      transformLabel={(title) => {
        return title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
      }}
      rootLabel="home"
      containerClassName="d-flex justify-content-center"
    />
  );
};

export default Breadcrumb;
