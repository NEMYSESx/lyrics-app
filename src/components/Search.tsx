const Search = () => {
  return (
    <div className="border flex flex-col justify-center items-center mt-8 p-1 w-3/4 border-black">
      <h1 className="text-4xl">Search For A song</h1>
      <h1 className="mt-1">Get the lyrics for any track</h1>
      <input
        className="border border-black p-1 m-2 w-3/4 rounded-sm"
        placeholder="Search..."
      />
      <button className="bg-blue-600 text-white p-1 w-3/4 rounded-sm mb-2">
        Get Track Lyrics
      </button>
    </div>
  );
};

export default Search;
