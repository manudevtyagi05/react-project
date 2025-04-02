const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 w-64">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-72 object-cover rounded-lg"
      />
      <h3 className="text-lg font-semibold mt-2">{movie.Title}</h3>
      <p className="text-gray-600">{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
