export class Movies {
  id: number;
  title: string;
  year: number;
  isWatched: boolean;

  constructor(id: number, title: string, year: number, isWatched: boolean) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.isWatched = isWatched;
  }
}
