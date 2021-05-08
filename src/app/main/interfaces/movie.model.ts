import { Company } from "./company.model";
import { Genre } from "./genre.model"

export interface Movie {
    //Budget: number;
    //Genres: Genre[];
    //Homepage: string;
    MovieId: Number;
    ImdbId: string;
    //Language: string;
    Title: string;
    //Overview: string;
    //Popularity: number;
    Poster: string;
    //ProductionCompanies: Company[];
    ReleaseDate: Date;
    //Revenue: number;
    //Runtime: number;
    //Tagline: string;
    //ImdbRating: number;
    //VoteCount: number;
    //Actors: string;
    //Awards: string;
    //Director: string;
    // List<Vote> Votes
    // List<User> Users
}
