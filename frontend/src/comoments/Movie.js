import { Link, useParams } from 'react-router-dom';
import { Card, Container, Image, Col, Row, Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios';

import './Movie.css';
import moment from 'moment';

const baseUrl = 'http://localhost:3000/images/'

const Movie = ({ user }) => {

  let params = useParams()

  const [movie, setMovie] = useState({})

  useEffect(() => {
    axios.get('http://localhost:3000/json/movies.json', {}).then(res => {
      const data = res.data
      const movie = data.find((res) => res._id === Number(params.id))
      setMovie(movie);
    })
  }, [params.id])

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className='poster'>
              <Image className='bigPicture' src={baseUrl + movie.poster} fluid />
            </div>
          </Col>
          <Col>
            <Card>
              <Card.Header as='h5'>{movie.title}</Card.Header>
              <Card.Body>
                <Card.Text>{movie.plot}</Card.Text>
                {
                  user && <Link to={'/movies/' + params.id + '/review'}>Add Review</Link>
                }
              </Card.Body>
            </Card>
            <h2>reviews</h2>
            <br></br>
            {
              movie.reviews !== undefined && movie.reviews.length !== 0 && movie.reviews.map((review, index) => (
                <div className='d-flex' key={index}>
                  <div className='flex-shrink-0 reviewsText'>
                    <h5>{review.user_name + ' reviewed on'} {moment(review.data).format("Do MMMM YYYY")}</h5>
                    <p className='review'>{review.review}</p>
                    {
                      user && user.googleId === review.user_id && <Row>
                        <Col>
                          <Link
                            to={'/movies/' + params.id + '/review'}
                            state={{ currentReview: review }}
                          >
                            Edit
                          </Link>
                        </Col>
                        <Col>
                          <Button variant='link' onClick={() => { }}>Delete</Button>
                        </Col>
                      </Row>
                    }
                  </div>
                </div>
              ))

            }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Movie;
