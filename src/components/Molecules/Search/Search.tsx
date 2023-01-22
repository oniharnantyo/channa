import { StyledButton } from '@components/Atoms/StyledButton';
import clsx from 'clsx';
import { Form, Stack } from 'react-bootstrap';

import Style from './Search.module.scss';
import { SearchProps } from './Search.types';

const Search: SearchProps = ({ placeholder, onType, onFinish, onEnter }) => {
  return (
    <Stack direction="horizontal" gap={3}>
      <Form.Control
        type="search"
        placeholder={placeholder}
        aria-label="Search"
        className={clsx(Style.input, 'rounded-0')}
        onChange={onType}
        onKeyUp={(event: any) => {
          if (event.key === 'Enter') onEnter();
        }}
      />
      <StyledButton variant="primary" size="sm" className={Style.button} onClick={onFinish}>
        Cari
      </StyledButton>
    </Stack>
  );
};

export default Search;
