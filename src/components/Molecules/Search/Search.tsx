import { StyledButton } from '@components/Atoms/StyledButton';
import { Button, Form, InputGroup, Stack } from 'react-bootstrap';

import { SearchProps } from './Search.types';

const Search: SearchProps = ({ placeholder, onType, onFinish, onEnter }) => {
  return (
    <Stack direction="horizontal" gap={3}>
      <Form.Control
        type="search"
        placeholder={placeholder}
        aria-label="Search"
        className="rounded-0"
        onChange={onType}
        onKeyUp={(event: any) => {
          if (event.key === 'Enter') onEnter();
        }}
      />
      <StyledButton variant="primary" size="sm" onClick={onFinish}>
        Cari
      </StyledButton>
    </Stack>
  );
};

export default Search;
