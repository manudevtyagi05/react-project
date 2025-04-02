import MovieCard from "./MoiveCard";

const MovieList = ({ movies }) => {
  return (
    <div className="flex flex-wrap gap-6 justify-center p-5">
      {movies.length === 0 ? (
        <p className="text-gray-500">No movies found.</p>
      ) : (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      )}
    </div>
  );
};

export default MovieList;
