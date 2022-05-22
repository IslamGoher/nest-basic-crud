import { Injectable, NotFoundException } from '@nestjs/common';
import { Movies } from './movies.model';

@Injectable()
export class MoviesService {
  private movies: Movies[] = [];
  private id = 0;

  // @route   GET '/api/v1/movies'
  // @desc    get all movies
  // @access  public
  getAllMovies(): any {
    if (this.movies.length === 0) {
      throw new NotFoundException("there's no such movies found");
    }
    return this.movies;
  }

  // @route   GET '/api/v1/movies/:id'
  // @desc    get one movie by id
  // @access  public
  getOneMovie(id: number): any {
    const movieIndex = this.findMovieIndex(id);
    if (movieIndex === -1) {
      throw new NotFoundException("there's no such movie found with given id");
    }

    return this.movies[movieIndex];
  }

  // @route   POST '/api/v1/movies'
  // @desc    get all movies
  // @access  public
  createMovie(title: string, year: number, iswatched: boolean): any {
    const newId = ++this.id;
    const currentMovie = new Movies(newId, title, year, iswatched);
    this.movies.push(currentMovie);
    return {
      statusCode: 201,
      message: 'movie created successfully',
      movieId: newId,
    };
  }

  // @route   DELETE '/api/v1/movies/:id'
  // @desc    delete one movie
  // @access  public
  deleteMovie(id: number): any {
    const movieIndex = this.findMovieIndex(id);

    if (movieIndex === -1)
      throw new NotFoundException("there's no movie found with given id");

    this.movies.splice(movieIndex, 1);

    return {
      statusCode: 200,
      message: 'movie deleted successfully',
    };
  }

  // @route   PUT '/api/v1/movies/:id'
  // @desc    update one movie
  // @access  public
  updateMovie(
    id: number,
    title: string,
    year: number,
    isWatched: boolean,
  ): any {
    const movieIndex = this.findMovieIndex(id);

    if (movieIndex === -1)
      throw new NotFoundException("there's no movie found with given id");

    this.movies[movieIndex].title = title;
    this.movies[movieIndex].year = year;
    this.movies[movieIndex].isWatched = isWatched;

    return {
      statusCode: 200,
      message: 'movie updated successfully',
    };
  }

  private findMovieIndex(id: number): number {
    return this.movies.findIndex((el) => {
      if (el.id == id) return el;
    });
  }
}
