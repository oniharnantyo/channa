import Color from '@styles/Color.module.css';
import { humanizeDate } from '@utils/format';

import { ArticleLabelProps } from './ArticleLabel.types';

const ArticleLabel: ArticleLabelProps = ({ author, date }) => {
  const createdAtDate = humanizeDate(date);

  return (
    <span className={Color.grey}>
      oleh {author} <span>&#8226;</span> {createdAtDate}
    </span>
  );
};

export default ArticleLabel;
