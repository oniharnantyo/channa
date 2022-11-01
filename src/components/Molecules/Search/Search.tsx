import { Button, Form, InputGroup } from 'react-bootstrap';

import { SearchProps } from './Search.types';

const Search: SearchProps = ({ placeholder, onType, onFinish, onEnter }) => {
  return (
    <InputGroup>
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
      <Button variant="primary" className="rounded-0" onClick={onFinish}>
        Cari
      </Button>
    </InputGroup>
  );
};

export default Search;
