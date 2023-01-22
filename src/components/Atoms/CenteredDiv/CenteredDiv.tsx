import { CenteredDivProps } from './CenteredDiv.types';

const CenteredDiv: CenteredDivProps = ({ children, minHeight }) => {
  return (
    <div
      style={{ minHeight: minHeight }}
      className="d-flex align-items-center justify-content-center"
    >
      {children}
    </div>
  );
};

export default CenteredDiv;
