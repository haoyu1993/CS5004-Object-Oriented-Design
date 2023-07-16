import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Container } from 'react-bootstrap';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import MoviesList from './comoments/MoviesList';
import Movie from './comoments/Movie';
import AddReview from './comoments/AddReview';

import Login from './comoments/Login';
import Logout from './comoments/Logout';

import './App.css';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function App () {
  const [user, setUser] = useState(null)

  useEffect(() => {
    let loginData = JSON.parse(localStorage.getItem('login'))
    if (loginData) {
      let loginExp = loginData.exp
      let now = Date.now() / 1000
      if (now < loginExp) {
        setUser(loginData)
      } else {
        localStorage.setItem('login', null)
      }
    }
  }, [])

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        <Navbar expand="lg" bg="primary" variant="dark">
          <Container className="container-fluid">
            <Navbar.Brand href="/">
              <img src="/images/movies-logo.png" alt="movies logo" className="moviesLogo" />
              MOVIE TIME
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link as={Link} to="/movies">
                  Movies
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
            {
              user ? (
                <Logout setUser={setUser} clientId={clientId} />
              ) : (<Login setUser={setUser} />)
            }
          </Container>
        </Navbar>

        <Routes>
          <Route exact path='/' element={<MoviesList />} />
          <Route exact path='/movies' element={<MoviesList />} />
          <Route path='/movies/:id' element={<Movie user={user} />} />
          <Route path='/movies/:id/review' element={<AddReview user={user} />} />

        </Routes>
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
