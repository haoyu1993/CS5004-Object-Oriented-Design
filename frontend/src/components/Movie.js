import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { response } from 'msw'
import MovieDataService from '../services/movies'
const Movie = (props) => {
  const [movie, setMovie] = useState({
    id: null,
    title: '',
    rated: '',
    reviews: []
  })

  let params = useParams()

  useEffect(() => {
    const getMovie = (id) => {
      MovieDataService.get(id)
        .then((response) => {
          setMovie(response.data)
        })
        .catch((e) => {
          console.log(e)
        })
    }

    getMovie(params.id)
  }, [params.id])



  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className="poster">
              <Image
                className="bigPicture"
                src={movie.poster + "/100px250"}
                fluid />
            </div>
          </Col>
          <Col>
            <Card>
              <Card.Header as="h5">{movie.title}</Card.Header>
              <Card.Body>
                <Card.Text>{movie.plot}</Card.Text>
              </Card.Body>
            </Card>
            <h2>Reviews</h2>
            <br />
            {movie.reviews.map((review, index) => (
              <div className="d-flex" key={index}>
                <div className="flex-shrink-0 reviewsText">
                  <h5>{review.name} reviewed on {review.date}</h5>
                  <p className="review">{review.review}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )

}

export default Movie
