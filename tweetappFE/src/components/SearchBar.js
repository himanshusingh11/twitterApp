import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterTweets } from '../actions/tweetActions';
import { Container, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    dispatch(filterTweets(searchTerm));
  };

  return (
    <Container>
      <Row className="justify-content-center mt-4">
        <Col xs={6}>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search by Title"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button onClick={handleSearch}>Search</Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
