import { humanizeDate } from '@utils/format';

import { ArticleLabelProps } from './ArticleLabel.types';

const ArticleLabel: ArticleLabelProps = ({ author, date }) => {
  const createdAtDate = humanizeDate(date);

  return (
    <span className="text-muted">
      oleh {author} <span>&#8226;</span> {createdAtDate}
    </span>
  );
};

export default ArticleLabel;
