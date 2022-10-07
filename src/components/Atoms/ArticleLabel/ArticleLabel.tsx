import Color from '@styles/Color.module.css';
import { formatDate } from '@utils/format';

import Style from './ArticleLabel.module.css';
import { ArticleLabelProps } from './ArticleLabel.types';

const ArticleLabel: ArticleLabelProps = ({ author, date }) => {
  const createdAtDate = formatDate(date, 'DD MMMM YYYY');

  return (
    <span className={Color.grey}>
      oleh {author} <span>&#8226;</span> {createdAtDate}
    </span>
  );
};

export default ArticleLabel;
