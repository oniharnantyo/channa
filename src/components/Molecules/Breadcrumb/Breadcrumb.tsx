import { truncate } from '@utils/text';
import clsx from 'clsx';
import Breadcrumbs from 'nextjs-breadcrumbs';
import React from 'react';

import Style from './Breadcrumb.module.css';

const Breadcrumb = () => {
  return (
    <Breadcrumbs
      listClassName="breadcrumb mb-0"
      inactiveItemClassName={clsx(Style.item, 'breadcrumb-item')}
      activeItemClassName={clsx(Style.item, Style.active, 'breadcrumb-item active')}
      transformLabel={(title) => {
        if (title.length > 25) {
          title = truncate(title, 20);
        }
        title = title.charAt(0).toUpperCase() + title.slice(1).toLowerCase();
        return title.replaceAll('-', ' ');
      }}
      rootLabel="home"
      containerClassName="d-flex justify-content-center"
      replaceCharacterList={[{ from: '-', to: ' ' }]}
    />
  );
};

export default Breadcrumb;
