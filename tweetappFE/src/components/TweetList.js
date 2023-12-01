import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Pagination, Card, Row, Col } from 'react-bootstrap';

const TweetList = () => {
  const tweets = useSelector((state) => state.filteredTweets);
  const tweetsPerPage = 10; // Number of tweets to display per page
  const totalPages = Math.ceil(tweets.length / tweetsPerPage);

  const [currentPage, setCurrentPage] = useState(1);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPaginationItems = () => {
    const pageItems = [];
    const startPage = Math.max(currentPage - 2, 1);
    const endPage = Math.min(startPage + 4, totalPages);

    for (let i = startPage; i <= endPage; i++) {
      pageItems.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </Pagination.Item>
      );
    }
    return pageItems;
  };

  const getTweetsForCurrentPage = () => {
    const indexOfLastTweet = currentPage * tweetsPerPage;
    const indexOfFirstTweet = indexOfLastTweet - tweetsPerPage;
    return tweets.slice(indexOfFirstTweet, indexOfLastTweet);
  };

  return (
    <div className="container mt-4">
      <h2>Tweet List</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {getTweetsForCurrentPage().map((tweet) => (
          <Col key={tweet.id}>
            <Card style={{ height: '100%' }}>
              <Card.Img variant="top" src={`https://source.unsplash.com/random/300x300/?${tweet.title || 'random'}`} />
              <Card.Body>
                <Card.Title>{tweet.title}</Card.Title>
                <Card.Text>{tweet.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          <Pagination.Prev onClick={handlePrevPage} disabled={currentPage === 1} />
          {renderPaginationItems()}
          <Pagination.Next
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      </div>
    </div>
  );
};

export default TweetList;
