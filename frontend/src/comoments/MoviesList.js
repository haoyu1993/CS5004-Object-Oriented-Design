import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link, } from 'react-router-dom';
import { Form, Button, Col, Row, Container, Card } from 'react-bootstrap';
import axios from 'axios';
import './MoviesList.css';

const baseUrl = 'http://localhost:3000/images/'

const rating = ['UNRATED', 'Baoqiang Wang', 'Baoqiang Wang', 'Stephen King', 'Frank Darabont', 'Mario PuzoFrancis', 'Ford Coppola', 'Jonathan Nolan', 'Christopher Nolan', 'David S. Goyer', 'Francis Ford Coppola', 'Mario Puzo', 'Reginald Rose', 'Thomas Keneally', 'Steven Zaillian']

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");

  const [ratings] = useState(rating);

  const [currentPage, setCurrentPage] = useState(0);

  const [pageSize] = useState(20)

  const findByTitle = useCallback(() => {
    if (searchTitle.trim().length !== 0) {
      const filterMovie = movies.filter(item => item.title.toLowerCase().includes(searchTitle.toLowerCase()))

      setMovies(filterMovie)
    }
  }, [movies, searchTitle])


  const findByRate = useCallback(() => {
    if (searchRating === 'Al·Ratings') {
      setMovies(movies)
    }

    const filterMovie = movies.filter(item => item.rated.toLowerCase().includes(searchRating.toLowerCase()))
    setMovies(filterMovie)

  }, [movies, searchRating])


  useEffect(() => {
    axios.get('http://localhost:3000/json/movies.json', {}).then(res => {
      setMovies(res.data);
    })
  }, [])

  const movieData = useMemo(() => {
    let left = currentPage * pageSize;
    let right = Math.min((currentPage + 1) * pageSize, movies.length)

    return movies.slice(left, right)
  }, [currentPage, movies, pageSize])


  const onChangeSearchTitle = e => {
    const searchTitle = e.target.value
    setSearchTitle(searchTitle)
  }

  const onChangeSearchRating = e => {
    const searchRating = e.target.value
    setSearchRating(searchRating)


  }

  return (
    <div className="App">
      <Container className='min-container'>
        <Form className='movieForm'>
          <Row>
            <Col>
              <Form.Group className='mb-3'>
                <Form.Control
                  type='text'
                  placeholder='Search by title'
                  onChange={onChangeSearchTitle}
                />
              </Form.Group>
              <Button variant="primary" type='button' onClick={findByTitle}>Search</Button>
            </Col>
            <Col>
              <Form.Group className='mb-3'>
                <Form.Control
                  as='select'
                  onChange={onChangeSearchRating}
                >
                  <option>Al·Ratings</option>
                  {ratings.map((rating, i) => {
                    return (
                      <option value={rating} key={i}>{rating}</option>
                    )
                  })}
                </Form.Control>
              </Form.Group>
              <Button variant="primary" type='button' onClick={findByRate}>Search</Button>
            </Col>
          </Row>
        </Form>
        <Row className='movieRow'>
          {
            movieData.map(movie => {
              return (
                <Col key={movie._id}>
                  <Card className='moviesListCard'>
                    <Card.Img className='smallPoster'
                      src={baseUrl + movie.poster} />
                    <Card.Body>
                      <Card.Title>{movie.title}</Card.Title>
                      <Card.Text>Rating: {movie.rated}</Card.Text>
                      <Card.Text>{movie.plot}</Card.Text>
                      <Link to={'/movies/' + movie._id}>View Reviews</Link>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }

        </Row>
        <br />
        Showing page: {currentPage + 1}
        <Button variant='link' onClick={() => {
          if (pageSize < movies.length) {
            setCurrentPage(currentPage + 1)
          }
        }}>Get next results </Button>
      </Container>
    </div>
  );
}

export default MoviesList;
