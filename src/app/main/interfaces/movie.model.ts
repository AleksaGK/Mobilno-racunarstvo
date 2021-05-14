// import { Company } from "./company.model";
import { Genre } from './genre.model';

export interface Movie {
    budget: number;
    genres: Genre[];
    homepage: string;
    movieId: number;
    imdbId: string;
    language: string;
    title: string;
    overview: string;
    popularity: number;
    poster: string;
    //ProductionCompanies: Company[];
    releaseDate: Date;
    revenue: number;
    runtime: number;
    tagline: string;
    imdbRating: number;
    voteCount: number;
    actors: string;
    awards: string;
    director: string;
    //List<Vote> Votes
    //List<User> Users
}
