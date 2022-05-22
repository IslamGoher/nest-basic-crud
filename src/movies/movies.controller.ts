import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('/api/v1/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  // @route   GET '/api/v1/movies'
  // @desc    get all movies
  // @access  public
  @Get()
  getAllMovies(): any {
    return this.moviesService.getAllMovies();
  }

  // @route   GET '/api/v1/movies/:id'
  // @desc    get one movie by id
  // @access  public
  @Get('/:id')
  getOneMovie(@Param('id') id: number): any {
    return this.moviesService.getOneMovie(id);
  }

  // @route   POST '/api/v1/movies'
  // @desc    get all movies
  // @access  public
  @Post()
  createMovie(
    @Body('title') title: string,
    @Body('year') year: number,
    @Body('isWatched') iswatched: boolean,
  ): any {
    return this.moviesService.createMovie(title, year, iswatched);
  }

  // @route   DELETE '/api/v1/movies/:id'
  // @desc    delete one movie
  // @access  public
  @Delete(':id')
  deleteMovie(@Param('id') id: number): any {
    return this.moviesService.deleteMovie(id);
  }

  // @route   PUT '/api/v1/movies/:id'
  // @desc    update one movie
  // @access  public
  @Put('/:id')
  updateMovie(
    @Param('id') id: number,
    @Body('title') title: string,
    @Body('year') year: number,
    @Body('isWatched') isWatched: boolean,
  ): any {
    return this.moviesService.updateMovie(id, title, year, isWatched);
  }
}
