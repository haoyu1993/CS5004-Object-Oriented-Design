import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, Form, Button } from 'react-bootstrap';

import './Movie.css';

// const baseUrl = 'http://localhost:3000/images/'

const AddReview = ({ user }) => {

  // let params = useParams()

  const navigate = useNavigate()
  let params = useParams()

  let editing = false
  let initialReviewState = ''

  const [review, setReview] = useState(initialReviewState)

  const onChangeReview = () => { }

  const saveReview = () => { }


  return (
    <Container className='main-container'>
      <Form>
        <Form.Group className='mb-3'>
          <Form.Label>{editing ? 'Edit' : 'Ceate'} Review</Form.Label>
          <Form.Control
            as="textarea"
            type='text'
            required
            review={review}
            onChange={onChangeReview}
            defaultValue={editing ? null : ''}
          />
        </Form.Group>
        <Button variant='primary' onClick={saveReview}>Submit</Button>
      </Form>
    </Container>
  );
}

export default AddReview;
