import React, { useContext, useEffect, useState } from 'react';

import { SearchContext } from '../../../context/search';
import { Card, Alert, Row, Col, Spinner } from 'react-bootstrap';

function MovieView() {
  const [search] = useContext(SearchContext);
  const [movie, setMovie] = useState({});
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setMovie({});
    if(search.movie){
      setLoading(true);
      fetch('https://www.omdbapi.com/?i=tt3896198&apikey=1a9ae8c0&t='+search.movie.toLowerCase()).then(res=> res.json())
        .then(response => {
          setLoading(false);
          setMovie(response);
        })
        .catch(()=>{
          setLoading(false);
          setMovie({});
        });
    }
  },[search, setMovie, setLoading]);

  return (
    <Row>
      <Col md={{ span: 4, offset: 4 }}>
        {isLoading && (<div className="mt-5 d-flex justify-content-center"><Spinner animation="grow" /></div>)}
        {movie.Response === "True" && (
          <Card>
            {movie.Poster !== "N/A" && (
              <Card.Img variant="top" src={movie.Poster} alt="none"/>
            )}
            <Card.Body>
              <Card.Title>{movie.Title}</Card.Title>
              {movie.Plot !== "N/A" && (
                <Card.Text>
                  {movie.Plot}
                </Card.Text>
              )}
            </Card.Body>
          </Card>
        )}
        {movie.Response === "False" && (
          <Alert variant='warning'>
            {movie.Error}
          </Alert>
        )}
      </Col>
    </Row>
  );
}

export default MovieView;
