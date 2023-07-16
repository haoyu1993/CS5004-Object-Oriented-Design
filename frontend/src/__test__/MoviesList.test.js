import { render, waitFor, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import mockServer from '../_mocks_/mockServer'
import MoviesList from '../components/MoviesList'

beforeAll(() => mockServer.listen())
afterEach(() => mockServer.resetHandlers())
afterAll(() => mockServer.close())

test('renders the appropriate number of movie cards', async () => {
  const TITLE_OF_MOVIE = 'Blacksmith Scene'
  const MOVIE_CARD_CLASS = 'moviesListCard'
  const NUMBER_OF_MOVIES = 2

  const { container } = render(
    <MemoryRouter>
      <MoviesList />
    </MemoryRouter>
  )

  await waitFor(() => screen.getByText(TITLE_OF_MOVIE))
  const movieCards = container.getElementsByClassName(MOVIE_CARD_CLASS)

  expect(movieCards.length).toBe(NUMBER_OF_MOVIES)
})


const mockMovieByIdResponse = {
  id: "573a1390f29313caabcd42e8",
  plot: "A group of bandits stage a brazen train hold-up.",
  title: "The Great Train Robbery",
  rated: "TV-G",
  reviews: [
    {
      id: "64277d6fc09d78dd3ec77544",
      name: "Testerooni Testerson",
      user_id: "1234",
      date: "2023-04-01T00:40:15.512Z",
      review: "This movie is OK by me!",
      movie_id: "573a1390f29313caabcd4135",
    },
    {
      id: "64277d6fc09d78dd3ec77545",
      name: "Testerooni Testerson Too",
      user_id: "1235",
      date: "2023-04-02T00:40:15.512Z",
      review: "This movie is OK by me!",
      movie_id: "573a1390f29313caabcd4135",
    },
  ],
}

const mockServer = setupServer(
  rest.get("/movies/:id", (req, res, ctx) => {
    const { id } = req.params
    return res(ctx.json(mockMovieByIdResponse))
  })
)

beforeAll(() => mockServer.listen())
afterEach(() => mockServer.resetHandlers())
afterAll(() => mockServer.close())

test("renders the correct movie", async () => {
  // Test code remains the same
});
// I added the mockMovieByIdResponse variable, and then used it to define the mock response for the server's /movies/:id endpoint.







